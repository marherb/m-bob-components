import "./style.scss";
import { Modal, ModalProps, Spin } from "antd";

/**自定义modal框
 */
export default function CusModal(props: {
    open?: boolean;
    onCancel?: () => void;
    loading?: boolean; //内容是否使用loading包裹
    loadingText?: React.ReactNode; //loading内容 在loading为true时使用
    children?: React.ReactNode;
    title?: string | null; //标题
    icon?: string; //图标
    iconClick?: () => void; //图标点击事件
    modalProps?: ModalProps;
}) {
    return (
        <Modal
            closable={false}
            footer={null}
            className="com-cusmodal"
            wrapClassName="com-cusmodal-warp"
            width="36.75rem"
            centered={true}
            maskClosable={!props.loading}
            open={props.open}
            onCancel={props.onCancel}
            {...(props.modalProps || {})}
        >
            <Spin spinning={props.loading || false} tip={props.loadingText}>
                <div className="com-cusmodal-content">{props.children}</div>
            </Spin>
        </Modal>
    );
}
