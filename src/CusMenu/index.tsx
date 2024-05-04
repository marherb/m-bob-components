import { MouseEventHandler } from "react";
import "./style.scss";

/**选项点击 */
export default function CusMenu({
    options,
    className,
}: {
    options: {
        icon?: JSX.Element; //图标 需要是react组件
        label: string; //文字
        onClick: MouseEventHandler<HTMLDivElement>; //选项点击触发事件
    }[];
    className?: string;
}) {
    return (
        <div className={"com-list-click" + (className ? ` ${className}` : "")}>
            {options.map((item, index) => {
                return (
                    <div key={index} className="item" onClick={item.onClick}>
                        {item.icon && (
                            <div className="item-icon">{item.icon}</div>
                        )}
                        <div className="item-text">{item.label}</div>
                    </div>
                );
            })}
        </div>
    );
}
