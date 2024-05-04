import { gaps, iconSize } from "../config";
import { useMemoizedFn } from "ahooks";
import { CSSProperties, MouseEventHandler } from "react";

export type CusComIconType = {
    src: string; //图标详情
    size?: "xl" | "el" | "l" | "m" | "s" | "es"; //Extra Large， Large， Medium。 Small。 Extra Small
    position?: "default" | "left" | "right" | "center"; //图标所在位置，根据此参数定义图标边距
    onClick?: MouseEventHandler<HTMLImageElement>; //图标点击功能
    animation?: "default" | "none" | "width" | "rotate"; //图标展示方式 default-展示 none-不展示 width-左右折叠动画 rotate-翻转动画
    control?: boolean; //控制图标是否展示 播放 animation 动画
    style?: CSSProperties; //图标样式
};

//组件内图标
export default function CusComIcon({
    src,
    size = "m",
    position = "default",
    onClick,
    animation = "default",
    control = false,
    style = {},
}: CusComIconType) {
    //通过定位获取图标边距样式
    const getMargin = useMemoizedFn((control: boolean) => {
        const gap = control ? gaps[size] : 0;
        if (position === "left") {
            return {
                marginRight: `${gap}rem`,
            };
        }
        if (position === "right") {
            return {
                marginLeft: `${gap}rem`,
            };
        }
        if (position === "center") {
            return {
                margin: `0rem ${gap}rem`,
            };
        }
        return {};
    });
    if (animation === "none") {
        return null;
    }
    if (animation === "default") {
        return (
            <img
                alt=""
                src={src}
                onClick={onClick}
                style={{
                    width: `${iconSize[size]}rem`,
                    height: `${iconSize[size]}rem`,
                    objectFit: "contain",
                    transition: "all 0.3s",
                    cursor: !!onClick ? "pointer" : "default",
                    ...getMargin(true),
                    ...style,
                }}
            />
        );
    }
    if (animation === "width") {
        return (
            <img
                alt=""
                src={src}
                onClick={onClick}
                style={{
                    width: `${control ? iconSize[size] : 0}rem`,
                    height: `${iconSize[size]}rem`,
                    opacity: control ? 1 : 0,
                    objectFit: "contain",
                    transition: "all 0.3s",
                    cursor: !!onClick ? "pointer" : "default",
                    ...getMargin(control),
                    ...style,
                }}
            />
        );
    }
    if (animation === "rotate") {
        return (
            <img
                alt=""
                src={src}
                onClick={onClick}
                style={{
                    width: `${iconSize[size]}rem`,
                    height: `${iconSize[size]}rem`,
                    objectFit: "contain",
                    transform: `rotate3d(0,1,0,${control ? "180deg" : "0deg"})`,
                    transition: "all 0.5s",
                    cursor: !!onClick ? "pointer" : "default",
                    ...getMargin(control),
                    ...style,
                }}
            />
        );
    }

    return null;
}
