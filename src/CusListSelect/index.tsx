import { CheckOutlined } from "@ant-design/icons";
import "./style.scss";

/**列表选择 */
export default function CusListSelect({
    options,
    value,
    onChange,
    className,
}: {
    options: {
        label: React.ReactNode;
        value: string;
    }[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}) {
    return (
        <div className={"com-list-select" + (className ? ` ${className}` : "")}>
            {options.map((item) => {
                return (
                    <div
                        key={item.value}
                        className="item"
                        onClick={() => {
                            onChange(item.value);
                        }}
                    >
                        <div className="item-label">{item.label}</div>
                        {value === item.value && (
                            <CheckOutlined className="item-icon" />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
