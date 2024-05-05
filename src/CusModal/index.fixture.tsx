import { Space } from "antd";
import CusModal from ".";
import CusButton from "../CusButton";
import { useBoolean } from "ahooks";
import { useEffect } from "react";

export default function () {
    const [open, setOpen] = useBoolean(false);
    const [loading, setLoading] = useBoolean(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading.setFalse();
            }, 1000);
        }
    }, [loading]);

    return (
        <Space>
            <CusButton onClick={setOpen.setTrue}>modal</CusButton>
            <CusModal
                open={open}
                onCancel={() => {
                    setOpen.setFalse();
                    setLoading.setFalse();
                }}
                loading={loading}
            >
                <Space
                    style={{
                        padding: "1rem",
                    }}
                >
                    <CusButton onClick={setLoading.setTrue}>loading</CusButton>
                </Space>
            </CusModal>
        </Space>
    );
}
