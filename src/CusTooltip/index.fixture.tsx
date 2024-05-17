import { Space, Typography } from "antd";
import CusTooltip from ".";

export default (
    <Space>
        <CusTooltip title="Lorem ipsum dolor." open={true}>
            <Typography.Title style={{ color: "white" }}>
                tooltip
            </Typography.Title>
        </CusTooltip>
    </Space>
);
