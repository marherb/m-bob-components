import { Tooltip, TooltipProps } from "antd";

export default function CusTooltip(props: TooltipProps) {
    return (
        <Tooltip
            overlayInnerStyle={{
                background: "white",
                borderRadius: "0.625rem",
                padding: "0.625rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                lineHeight: "1.25rem",
                color: "black",
                letterSpacing: "0.025rem",
            }}
            color="white"
            destroyTooltipOnHide={true}
            {...props}
        ></Tooltip>
    );
}
