import { TextAreaProps } from "antd/es/input";
import { borderRadius, fontSizes, lineHeights, paddings } from "../config";
import { Input } from "antd";

export default function CusTextArea({
    size = "m",
    placeholder,
    style = {},
    originProps = {},
}: {
    size?: "el" | "l" | "m" | "s" | "es"; //Extra Large， Large， Medium。 Small。 Extra Small
    placeholder?: string;
    style?: React.CSSProperties;
    originProps?: TextAreaProps;
}) {
    return (
        <Input.TextArea
            style={{
                borderRadius: `${borderRadius[size]}rem`,
                padding: `${paddings[size]}rem`,
                fontSize: `${fontSizes[size]}rem`,
                lineHeight: `${lineHeights[size]}rem`,
                fontFamily: "$regular",
                fontWeight: 500,
                color: "#FFFFFFE0",
                resize: "none",
                ...style,
            }}
            placeholder={placeholder}
            rows={3}
            {...originProps}
        />
    );
}
