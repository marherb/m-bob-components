import { Button, ButtonProps } from "antd";

/**不包含任何内部元素的按钮 */
export default function ButtonProvider(props: ButtonProps) {
  return (
    <Button
      {...props}
      style={{
        width: "unset",
        height: "unset",
        padding: "0px",
        background: "transparent",
        border: "unset",
        ...props.style,
      }}
    />
  );
}
