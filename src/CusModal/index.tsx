import { Modal, ModalProps } from "antd";

/**自定义modal框
 */
export default function CusModal(
    props: ModalProps & {
        onBack?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    }
) {
    return (
        <Modal
            footer={null}
            width="min(36.75rem,calc(100vw - 9.25rem))"
            centered={true}
            maskClosable={props.closable === false}
            closable={false}
            styles={{
                mask: {
                    backdropFilter: "blur(22.5px)",
                },
                content: {
                    borderRadius: "1.5rem",
                    padding: "0",
                    backgroundColor: "#ffffff1f",
                    backdropFilter: "blur(100px)",
                    border: "1px solid #ffffff3e",
                },
            }}
            {...props}
        >
            {props.closable !== false && (
                <button
                    onClick={props.onCancel}
                    style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "0.75rem",
                        border: "1px solid #ffffff3e",
                        backgroundColor: "#ffffff1f",
                        cursor: "pointer",
                        position: "absolute",
                        top: "0",
                        right: "-3.75rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <svg
                        width="1.5rem"
                        height="1.5rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.92825 19.0711C4.49434 18.6372 4.49434 17.9336 4.92825 17.4997L17.499 4.92894C17.933 4.49502 18.6365 4.49502 19.0704 4.92894C19.5043 5.36286 19.5043 6.06637 19.0704 6.50029L6.4996 19.0711C6.06568 19.505 5.36217 19.505 4.92825 19.0711Z"
                            fill="white"
                            fillOpacity="0.88"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.92825 4.92893C5.36217 4.49501 6.06568 4.49501 6.4996 4.92893L19.0704 17.4997C19.5043 17.9336 19.5043 18.6371 19.0704 19.0711C18.6365 19.505 17.933 19.505 17.499 19.0711L4.92825 6.50027C4.49434 6.06636 4.49434 5.36284 4.92825 4.92893Z"
                            fill="white"
                            fill-opacity="0.88"
                        />
                    </svg>
                </button>
            )}
            {props.onBack && (
                <button
                    onClick={props.onBack}
                    style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "0.75rem",
                        border: "1px solid #ffffff3e",
                        backgroundColor: "#ffffff1f",
                        cursor: "pointer",
                        position: "absolute",
                        top: "0",
                        left: "-3.75rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <svg
                        width="1.5rem"
                        height="1.5rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.56945 18.82C9.37945 18.82 9.18945 18.75 9.03945 18.6L2.96945 12.53C2.67945 12.24 2.67945 11.76 2.96945 11.47L9.03945 5.4C9.32945 5.11 9.80945 5.11 10.0995 5.4C10.3895 5.69 10.3895 6.17 10.0995 6.46L4.55945 12L10.0995 17.54C10.3895 17.83 10.3895 18.31 10.0995 18.6C9.95945 18.75 9.75945 18.82 9.56945 18.82Z"
                            fill="white"
                            fillOpacity="0.88"
                        />
                        <path
                            d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                            fill="white"
                            fillOpacity="0.88"
                        />
                    </svg>
                </button>
            )}
            {props.children}
        </Modal>
    );
}
