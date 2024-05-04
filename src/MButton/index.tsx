import { Button } from "antd";
import { MButtonProps } from "./type";

export function MButton(props: MButtonProps) {
    return <Button>点击({props.disabled})</Button>;
}
