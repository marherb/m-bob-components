import { Button, ButtonProps } from "antd";
import { useRef } from "react";
import { useHover } from "ahooks";
import { borderRadius, fontSizes, lineHeights, paddings } from "../config";
import {
    backgrounds,
    borderColors,
    borderColorsOnHover,
    color,
} from "./buttonConfig";
import CusComIcon, { CusComIconType } from "../CusIcon/CusComIcon";

export default function CusButton({
    children,
    size = "m",
    type = "solid",
    disabled,
    block,
    style = {},
    onClick,
    importantClassName,
    leftIcon,
    rightIcon,
    originProps = {},
}: {
    children: React.ReactNode;
    size?: "el" | "l" | "m" | "s" | "es"; //Extra Large， Large， Medium。 Small。 Extra Small
    type?: "solid" | "outline" | "text";
    disabled?: boolean;
    block?: boolean;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
    importantClassName?: string; //临时覆盖样式
    leftIcon?: CusComIconType; //左侧图标
    rightIcon?: CusComIconType; //右侧图标
    originProps?: ButtonProps; //原始组件参数
}) {
    const ref = useRef(null);
    const isHovering = useHover(ref);

    return (
        <Button
            ref={ref}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Poppins-Medium",
                fontWeight: 500,
                height: "unset",
                padding: `${paddings[size]}rem ${paddings[size] * 2}rem`,
                borderRadius: `${borderRadius[size]}rem`,
                borderColor: isHovering
                    ? borderColorsOnHover[type]
                    : borderColors[type],
                fontSize: `${fontSizes[size]}rem`,
                lineHeight: `${lineHeights[size]}rem`,
                background: backgrounds[type],
                color: color[type],
                filter: !!disabled ? "brightness(0.6)" : "none",
                ...style,
            }}
            className={importantClassName}
            disabled={disabled}
            block={block}
            onClick={onClick}
            {...originProps}
        >
            {!!leftIcon && (
                <CusComIcon
                    control={isHovering}
                    size={size}
                    position="left"
                    {...leftIcon}
                />
            )}
            {children}
            {!!rightIcon && (
                <CusComIcon
                    control={isHovering}
                    size={size}
                    position="right"
                    {...rightIcon}
                />
            )}
        </Button>
    );
}
