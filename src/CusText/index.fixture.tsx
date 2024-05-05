import { Space } from "antd";
import CusText from ".";

export default function () {
    return (
        <Space direction="vertical">
            <Space>
                <CusText style="b1">style=b1</CusText>
                <CusText style="b2">style=b2</CusText>
            </Space>
            <Space>
                <CusText outline="regular">outline=regular</CusText>
                <CusText outline="medium">outline=medium</CusText>
                <CusText outline="semibold">outline=semibold</CusText>
                <CusText outline="bold">outline=bold</CusText>
            </Space>
        </Space>
    );
}
