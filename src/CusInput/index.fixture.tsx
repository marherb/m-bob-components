import { Divider, Space } from "antd";
import CusInput from ".";
import TestPng from "../assets/test.png";
import CusTextArea from "./CusTextArea";

export default function () {
    return (
        <div
            style={{
                padding: "1rem",
                backgroundColor: "#ffffff1f",
            }}
        >
            <Space direction="vertical" size="large">
                <Space>
                    <CusInput size="el" placeholder="size=el" />
                    <CusInput size="l" placeholder="size=l" />
                    <CusInput size="m" placeholder="size=m" />
                </Space>
                <Space>
                    <CusInput state="default" placeholder="state=default" />
                    <CusInput state="success" placeholder="state=success" />
                    <CusInput state="warning" placeholder="state=warning" />
                    <CusInput state="error" placeholder="state=error" />
                </Space>
                <Space>
                    <CusInput
                        leftIcon={{ src: TestPng }}
                        placeholder="leftIcon"
                    />
                    <CusInput
                        rightIcon={{ src: TestPng }}
                        placeholder="rightIcon"
                    />
                </Space>
                <Space>
                    <CusInput type="email" placeholder="type=email" />
                </Space>
                <Divider />
                <Space>
                    <CusInput label="label" placeholder="label" />
                    <CusInput
                        feedback="feedback"
                        state="warning"
                        placeholder="feedback"
                    />
                    <CusInput tip="tip" placeholder="tip" />
                </Space>
                <Divider />
                <Space>
                    <CusTextArea placeholder="textArea" />
                </Space>
            </Space>
        </div>
    );
}
