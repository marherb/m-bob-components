import { useHover } from "ahooks";
import { useRef } from "react";

//字体大小 单位rem
const fontSize = {
    b1: 1,
    b2: 0.875,
};
//行高
const lineHeight = {
    b1: 1.5,
    b2: 1.375,
};
//字重
const fontWeights = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};

export default function CusText({
    children,
    style = {},
    size = "b1",
    outline = "regular",
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    size?: "b1" | "b2";
    outline?: "regular" | "medium" | "semibold" | "bold";
}) {
    const ref = useRef(null);
    const isHovering = useHover(ref);

    return (
        <span
            ref={ref}
            style={{
                fontSize: fontSize[size] + "rem",
                lineHeight: lineHeight[size],
                color: "#FFFFFFE0",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontStyle: "normal",
                fontWeight: fontWeights[outline],
                textDecoration: isHovering ? "underline" : "none",
                cursor: "pointer",
                ...style,
            }}
        >
            {children}
        </span>
    );
}
