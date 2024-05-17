import { Space } from "antd";
import CusModal from ".";
import CusButton from "../CusButton";
import { useBoolean } from "ahooks";

export default function CusModalFixture() {
    const [open, setOpen] = useBoolean(false);

    return (
        <Space>
            <CusButton onClick={setOpen.setTrue}>modal</CusButton>
            <CusModal open={open} onCancel={setOpen.setFalse}>
                <div
                    style={{
                        padding: 32,
                        color: "#fff",
                    }}
                >
                    Modal Component
                </div>
            </CusModal>
        </Space>
    );
}
