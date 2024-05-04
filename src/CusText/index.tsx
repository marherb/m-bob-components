import React, { memo } from "react";

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
//字体 需要自定义
const fontFamilys = {
    regular: "Cus-Regular",
    medium: "Cus-Medium",
    semibold: "Cus-SemiBold",
    bold: "Cus-Bold",
};
//字重
const fontWeights = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};

function CusText({
    children,
    style = "b1",
    outline = "regular",
}: {
    children: React.ReactNode;
    style?: "b1" | "b2";
    outline?: "regular" | "medium" | "semibold" | "bold";
}) {
    return (
        <div
            style={{
                fontSize: fontSize[style],
                lineHeight: lineHeight[style],
                color: "#FFFFFFE0",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontStyle: "normal",
                fontFamily: fontFamilys[outline],
                fontWeight: fontWeights[outline],
            }}
        >
            {children}
        </div>
    );
}
export default memo(CusText);
