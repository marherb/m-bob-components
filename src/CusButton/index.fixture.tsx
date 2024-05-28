import { Row, Space } from "antd";
import CusButton from ".";
import testPng from "../assets/test.png";

export default (
    <Space direction="vertical">
        <Row>
            <Space>
                <CusButton size="el">size=el</CusButton>
                <CusButton size="l">size=l</CusButton>
                <CusButton size="m">size=m</CusButton>
                <CusButton size="s">size=s</CusButton>
                <CusButton size="es">size=es</CusButton>
            </Space>
        </Row>
        <Row>
            <Space>
                <CusButton type="solid">type=solid</CusButton>
                <CusButton type="outline">type=outline</CusButton>
                <CusButton type="text">type=text</CusButton>
            </Space>
        </Row>
        <Row>
            <CusButton disabled>disabled</CusButton>
        </Row>
        <Row>
            <CusButton block>block</CusButton>
        </Row>
        <Row>
            <Space>
                <CusButton
                    leftIcon={{
                        src: testPng,
                    }}
                >
                    leftIcon
                </CusButton>
                <CusButton
                    leftIcon={{
                        src: testPng,
                        animation: "width",
                    }}
                >
                    HoverAnimation
                </CusButton>
            </Space>
        </Row>
    </Space>
);
