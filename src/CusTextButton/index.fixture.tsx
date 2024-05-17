import { Space } from "antd";
import CusText from ".";

export default (
    <Space direction="vertical">
        <Space>
            <CusText size="b1">size=b1</CusText>
            <CusText size="b2">size=b2</CusText>
        </Space>
        <Space>
            <CusText outline="regular">outline=regular</CusText>
            <CusText outline="medium">outline=medium</CusText>
            <CusText outline="semibold">outline=semibold</CusText>
            <CusText outline="bold">outline=bold</CusText>
        </Space>
    </Space>
);
