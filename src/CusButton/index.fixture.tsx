import { Space } from "antd";
import CusButton from ".";

export default () => {
    return (
        <Space direction="vertical">
            <Space>
                <CusButton size="el">size=el</CusButton>
                <CusButton size="l">size=l</CusButton>
                <CusButton size="m">size=m</CusButton>
                <CusButton size="s">size=s</CusButton>
                <CusButton size="es">size=es</CusButton>
            </Space>
            <Space>
                <CusButton type="solid">type=solid</CusButton>
                <CusButton type="outline">type=outline</CusButton>
                <CusButton type="text">type=text</CusButton>
            </Space>
            <Space>
                <CusButton disabled={true}>disabled</CusButton>
            </Space>
            <Space>
                <CusButton block={true}>block</CusButton>
            </Space>
        </Space>
    );
};
