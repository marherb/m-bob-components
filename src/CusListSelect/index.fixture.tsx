import { useState } from "react";
import CusListSelect from ".";
import { Space } from "antd";

export default function () {
    const [value, setValue] = useState("one");

    return (
        <div
            style={{
                padding: "1rem",
                backgroundColor: "#ffffff",
            }}
        >
            <Space>
                <CusListSelect
                    options={[
                        { label: "one", value: "one" },
                        { label: "two", value: "two" },
                    ]}
                    value={value}
                    onChange={setValue}
                />
            </Space>
        </div>
    );
}
