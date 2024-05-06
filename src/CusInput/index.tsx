import { Input, InputProps } from "antd";
import { borderRadius, fontSizes, lineHeights, paddings } from "../config";
import { useRef } from "react";
import { useHover } from "ahooks";
import CusComIcon, { CusComIconType } from "../CusIcon/CusComIcon";
import {
    feedbackGap,
    feedbackIcon,
    feedbackIconSize,
    themeColor,
} from "./inputConfig";

export default function CusInput({
    size = "m",
    placeholder,
    style = {},
    inputStyle = {},
    label,
    tip,
    feedback,
    type = "text",
    leftIcon,
    rightIcon,
    state = "default",
    originProps = {},
}: {
    size?: "el" | "l" | "m";
    placeholder?: string;
    style?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    label?: string; //输入框左上角标题
    tip?: string; //输入框右上角小提示
    feedback?: string; //输入框下方小提示
    type?: string; //input类型
    leftIcon?: CusComIconType; //左侧图标
    rightIcon?: CusComIconType; //右侧图标
    state?: "default" | "success" | "warning" | "error"; //组件状态 默认|成功|警告|错误
    originProps?: InputProps;
}) {
    const ref = useRef(null);
    const isHovering = useHover(ref);

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: `${borderRadius[size]}rem`,
                boxShadow: isHovering
                    ? `0px 0px 0px 1px ${themeColor[state]}66`
                    : "none",
                padding: `${paddings[size]}rem`,
                backgroundColor: `${themeColor[state]}1F`,
                ...style,
            }}
        >
            {label && (
                <div
                    style={{
                        position: "absolute",
                        top: `-${paddings[size] * 1.25 + 0.5}rem`,
                        left: "0.5rem",
                        fontSize: `${fontSizes[size] * 0.625}rem`,
                        lineHeight: `${paddings[size] * 1.25}rem`,
                        fontWeight: 500,
                        color: `${themeColor[state]}E0`,
                    }}
                >
                    {label}
                </div>
            )}
            {tip && (
                <div
                    style={{
                        position: "absolute",
                        top: `-${paddings[size] * 1.25 + 0.5}rem`,
                        right: "0rem",
                        fontSize: `${fontSizes[size] * 0.625}rem`,
                        lineHeight: `${paddings[size] * 1.25}rem`,
                        fontWeight: 500,
                        color: `${themeColor[state]}E0`,
                    }}
                >
                    {tip}
                </div>
            )}
            {feedback && state !== "default" && (
                <div
                    style={{
                        position: "absolute",
                        bottom: `-${paddings[size] * 1.25 + 0.5}rem`,
                        left: "0.5rem",
                        fontSize: `${fontSizes[size] * 0.625}rem`,
                        lineHeight: `${paddings[size] * 1.25}rem`,
                        fontWeight: 500,
                        color: `${themeColor[state]}E0`,
                        display: "flex",
                        alignItems: "center",
                        gap: `${feedbackGap[size]}rem`,
                    }}
                >
                    <img
                        src={feedbackIcon[state]}
                        alt=""
                        style={{
                            width: `${feedbackIconSize[size]}rem`,
                            height: `${feedbackIconSize[size]}rem`,
                        }}
                    />
                    {feedback}
                </div>
            )}
            {!!leftIcon && (
                <CusComIcon
                    control={isHovering}
                    size={size}
                    position="left"
                    animation={state === "default" ? "width" : "default"}
                    {...leftIcon}
                />
            )}
            <Input
                type={type}
                style={{
                    padding: "0rem",
                    fontSize: `${fontSizes[size]}rem`,
                    lineHeight: `${lineHeights[size]}rem`,
                    fontFamily: "$regular",
                    fontWeight: 500,
                    color: `${themeColor[state]}E0`,
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    border: "none",
                    ...inputStyle,
                }}
                placeholder={placeholder}
                {...originProps}
            />
            {!!rightIcon && (
                <CusComIcon
                    control={isHovering}
                    size={size}
                    position="right"
                    {...rightIcon}
                />
            )}
        </div>
    );
}
