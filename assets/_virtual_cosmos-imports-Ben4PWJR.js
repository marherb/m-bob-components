import { u as useMemoizedFn, j as jsxRuntimeExports, r as reactExports, a as useHover, B as Button, S as Space } from "./vendors-Dre0VOQR.js";
const borderRadius = {
  xl: 1.25,
  el: 1,
  l: 0.875,
  m: 0.75,
  s: 0.625,
  es: 0.5
};
const paddings = {
  xl: 1.25,
  el: 1,
  l: 0.875,
  m: 0.75,
  s: 0.625,
  es: 0.5
};
const gaps = {
  xl: 0.6875,
  el: 0.625,
  l: 0.5625,
  m: 0.5,
  s: 0.4375,
  es: 0.375
};
const iconSize = {
  xl: 2.5,
  el: 2,
  l: 1.75,
  m: 1.5,
  s: 1.25,
  es: 1
};
const fontSizes = {
  xl: 1.6875,
  el: 1.5,
  l: 1.3125,
  m: 1.125,
  s: 0.9375,
  es: 0.75
};
const lineHeights = {
  xl: 2.25,
  el: 2,
  l: 1.75,
  m: 1.5,
  s: 1.25,
  es: 1
};
const backgrounds = {
  solid: "#ffffff",
  outline: "#FFFFFF1F",
  text: "transparent"
};
const borderColors = {
  solid: "transparent",
  outline: "#FFFFFF1F",
  text: "transparent"
};
const borderColorsOnHover = {
  solid: "transparent",
  outline: "#FFFFFF",
  text: "transparent"
};
const color = {
  solid: "#000000E0",
  outline: "#FFFFFFE0",
  text: "#FFFFFFA3"
};
function CusComIcon({
  src,
  size = "m",
  position = "default",
  onClick,
  animation = "default",
  control = false,
  style = {}
}) {
  const getMargin = useMemoizedFn((control2) => {
    const gap = control2 ? gaps[size] : 0;
    if (position === "left") {
      return {
        marginRight: `${gap}rem`
      };
    }
    if (position === "right") {
      return {
        marginLeft: `${gap}rem`
      };
    }
    if (position === "center") {
      return {
        margin: `0rem ${gap}rem`
      };
    }
    return {};
  });
  if (animation === "none") {
    return null;
  }
  if (animation === "default") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        alt: "",
        src,
        onClick,
        style: {
          width: `${iconSize[size]}rem`,
          height: `${iconSize[size]}rem`,
          objectFit: "contain",
          transition: "all 0.3s",
          cursor: !!onClick ? "pointer" : "default",
          ...getMargin(true),
          ...style
        }
      }
    );
  }
  if (animation === "width") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        alt: "",
        src,
        onClick,
        style: {
          width: `${control ? iconSize[size] : 0}rem`,
          height: `${iconSize[size]}rem`,
          opacity: control ? 1 : 0,
          objectFit: "contain",
          transition: "all 0.3s",
          cursor: !!onClick ? "pointer" : "default",
          ...getMargin(control),
          ...style
        }
      }
    );
  }
  if (animation === "rotate") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        alt: "",
        src,
        onClick,
        style: {
          width: `${iconSize[size]}rem`,
          height: `${iconSize[size]}rem`,
          objectFit: "contain",
          transform: `rotate3d(0,1,0,${control ? "180deg" : "0deg"})`,
          transition: "all 0.5s",
          cursor: !!onClick ? "pointer" : "default",
          ...getMargin(control),
          ...style
        }
      }
    );
  }
  return null;
}
function CusButton({
  children,
  size = "m",
  type = "solid",
  disabled,
  block,
  style = {},
  onClick,
  importantClassName,
  leftIcon,
  rightIcon
}) {
  const ref = reactExports.useRef(null);
  const isHovering = useHover(ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      ref,
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins-Medium",
        fontWeight: 500,
        height: "unset",
        padding: `${paddings[size]}rem ${paddings[size] * 2}rem`,
        borderRadius: `${borderRadius[size]}rem`,
        borderColor: isHovering ? borderColorsOnHover[type] : borderColors[type],
        fontSize: `${fontSizes[size]}rem`,
        lineHeight: `${lineHeights[size]}rem`,
        background: backgrounds[type],
        color: color[type],
        filter: !!disabled ? "brightness(0.6)" : "none",
        ...style
      },
      className: importantClassName,
      disabled,
      block,
      onClick,
      children: [
        !!leftIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(
          CusComIcon,
          {
            control: isHovering,
            size,
            position: "left",
            ...leftIcon
          }
        ),
        children,
        !!rightIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(
          CusComIcon,
          {
            control: isHovering,
            size,
            position: "right",
            ...rightIcon
          }
        )
      ]
    }
  );
}
const index_fixture = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { direction: "vertical", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "el", children: "size=el" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "l", children: "size=l" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "m", children: "size=m" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "s", children: "size=s" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "es", children: "size=es" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { type: "solid", children: "type=solid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { type: "outline", children: "type=outline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { type: "text", children: "type=text" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Space, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { disabled: true, children: "disabled" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Space, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { block: true, children: "block" }) })
  ] });
};
const fixture0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_fixture
}, Symbol.toStringTag, { value: "Module" }));
const rendererConfig = {
  "playgroundUrl": "http://localhost:5000",
  "containerQuerySelector": null
};
const fixtures = {
  "src/CusButton/index.fixture.tsx": { module: fixture0 }
};
const decorators = {};
const moduleWrappers = {
  lazy: false,
  fixtures,
  decorators
};
export {
  moduleWrappers,
  rendererConfig
};
