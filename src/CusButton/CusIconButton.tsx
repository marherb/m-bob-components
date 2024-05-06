import { MouseEventHandler, useRef } from "react";
import { useHover } from "ahooks";
import { Button, ButtonProps } from "antd";
import { borderRadius, paddings } from "../config";
import { backgrounds, borderColors, borderColorsOnHover } from "./buttonConfig";
import CusComIcon, { CusComIconType } from "../CusIcon/CusComIcon";

/**图标按钮 */
export default function CusIconButton({
    icon,
    onClick,
    size = "m",
    type = "solid",
    disabled,
    style = {},
    importantClassName,
    originProps = {},
}: {
    icon: CusComIconType; //图标
    onClick?: MouseEventHandler<HTMLElement>;
    size?: "xl" | "el" | "l" | "m" | "s" | "es"; //Extra Large， Large， Medium。 Small。 Extra Small
    type?: "solid" | "outline" | "text";
    disabled?: boolean;
    style?: React.CSSProperties;
    importantClassName?: string; //临时覆盖样式
    originProps?: ButtonProps; //原始组件参数
}) {
    const ref = useRef(null);
    const isHovering = useHover(ref);

    return (
        <Button
            ref={ref}
            style={{
                padding: `${paddings[size]}rem`,
                borderRadius: `${borderRadius[size]}rem`,
                border: !!onClick ? "inherit" : "none",
                borderColor: isHovering
                    ? borderColorsOnHover[type]
                    : borderColors[type],
                background: backgrounds[type],
                filter: !!disabled ? "brightness(0.6)" : "none",
                height: "unset",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...style,
            }}
            className={importantClassName}
            disabled={disabled}
            onClick={onClick}
            {...originProps}
        >
            <CusComIcon
                control={isHovering}
                size={size}
                animation="rotate"
                style={{
                    cursor: "pointer",
                }}
                {...icon}
            />
        </Button>
    );
}
