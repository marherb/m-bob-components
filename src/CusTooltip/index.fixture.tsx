import { Space, Tooltip } from "antd";
import TestPng from "../assets/test.png";
import CusIconButton from "../CusButton/CusIconButton";

export default function () {
    return (
        <Space>
            <Tooltip title="title">
                <div>
                    <CusIconButton icon={{ src: TestPng }} />
                </div>
            </Tooltip>
        </Space>
    );
}
