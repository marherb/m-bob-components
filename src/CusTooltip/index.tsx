import { Tooltip, TooltipProps } from "antd";

export default function CusTooltip({
    originProps = {},
}: {
    originProps?: TooltipProps;
}) {
    return (
        <Tooltip
            overlayInnerStyle={{
                background: "white",
                borderRadius: "0.625rem",
                padding: "0.625rem",
                fontFamily: "Poppins-Medium",
                fontSize: "0.75rem",
                fontWeight: 500,
                lineHeight: "1.25rem",
                color: "black",
            }}
            destroyTooltipOnHide={true}
            {...originProps}
        ></Tooltip>
    );
}
