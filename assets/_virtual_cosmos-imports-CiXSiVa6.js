import { j as jsxRuntimeExports, T as Tooltip, S as Space, a as Typography, r as reactExports, u as useHover, M as Modal, b as useMemoizedFn, B as Button, c as useBoolean, R as RefIcon, I as Input, D as Divider, d as Row } from "./vendors-CdAMihPU.js";
function CusTooltip(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tooltip,
    {
      overlayInnerStyle: {
        background: "white",
        borderRadius: "0.625rem",
        padding: "0.625rem",
        fontSize: "0.75rem",
        fontWeight: 500,
        lineHeight: "1.25rem",
        color: "black",
        letterSpacing: "0.025rem"
      },
      color: "white",
      destroyTooltipOnHide: true,
      ...props
    }
  );
}
const index_fixture$6 = /* @__PURE__ */ jsxRuntimeExports.jsx(Space, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CusTooltip, { title: "Lorem ipsum dolor.", open: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography.Title, { style: { color: "white" }, children: "tooltip" }) }) });
const fixture0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_fixture$6
}, Symbol.toStringTag, { value: "Module" }));
const fontSize = {
  b1: 1,
  b2: 0.875
};
const lineHeight = {
  b1: 1.5,
  b2: 1.375
};
const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};
function CusText({
  children,
  style = {},
  size = "b1",
  outline = "regular"
}) {
  const ref = reactExports.useRef(null);
  const isHovering = useHover(ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      ref,
      style: {
        fontSize: fontSize[size] + "rem",
        lineHeight: lineHeight[size],
        color: "#FFFFFFE0",
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontStyle: "normal",
        fontWeight: fontWeights[outline],
        textDecoration: isHovering ? "underline" : "none",
        cursor: "pointer",
        ...style
      },
      children
    }
  );
}
const index_fixture$5 = /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { direction: "vertical", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CusText, { size: "b1", children: "size=b1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CusText, { size: "b2", children: "size=b2" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CusText, { outline: "regular", children: "outline=regular" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CusText, { outline: "medium", children: "outline=medium" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CusText, { outline: "semibold", children: "outline=semibold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CusText, { outline: "bold", children: "outline=bold" })
  ] })
] });
const fixture1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_fixture$5
}, Symbol.toStringTag, { value: "Module" }));
function CusModal(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Modal,
    {
      footer: null,
      width: "min(36.75rem,calc(100vw - 9.25rem))",
      centered: true,
      maskClosable: props.closable === false,
      closable: false,
      styles: {
        mask: {
          backdropFilter: "blur(22.5px)"
        },
        content: {
          borderRadius: "1.5rem",
          padding: "0",
          backgroundColor: "#ffffff1f",
          backdropFilter: "blur(100px)",
          border: "1px solid #ffffff3e"
        }
      },
      ...props,
      children: [
        props.closable !== false && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: props.onCancel,
            style: {
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
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                width: "1.5rem",
                height: "1.5rem",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M4.92825 19.0711C4.49434 18.6372 4.49434 17.9336 4.92825 17.4997L17.499 4.92894C17.933 4.49502 18.6365 4.49502 19.0704 4.92894C19.5043 5.36286 19.5043 6.06637 19.0704 6.50029L6.4996 19.0711C6.06568 19.505 5.36217 19.505 4.92825 19.0711Z",
                      fill: "white",
                      fillOpacity: "0.88"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M4.92825 4.92893C5.36217 4.49501 6.06568 4.49501 6.4996 4.92893L19.0704 17.4997C19.5043 17.9336 19.5043 18.6371 19.0704 19.0711C18.6365 19.505 17.933 19.505 17.499 19.0711L4.92825 6.50027C4.49434 6.06636 4.49434 5.36284 4.92825 4.92893Z",
                      fill: "white",
                      "fill-opacity": "0.88"
                    }
                  )
                ]
              }
            )
          }
        ),
        props.onBack && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: props.onBack,
            style: {
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
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                width: "1.5rem",
                height: "1.5rem",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M9.56945 18.82C9.37945 18.82 9.18945 18.75 9.03945 18.6L2.96945 12.53C2.67945 12.24 2.67945 11.76 2.96945 11.47L9.03945 5.4C9.32945 5.11 9.80945 5.11 10.0995 5.4C10.3895 5.69 10.3895 6.17 10.0995 6.46L4.55945 12L10.0995 17.54C10.3895 17.83 10.3895 18.31 10.0995 18.6C9.95945 18.75 9.75945 18.82 9.56945 18.82Z",
                      fill: "white",
                      fillOpacity: "0.88"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z",
                      fill: "white",
                      fillOpacity: "0.88"
                    }
                  )
                ]
              }
            )
          }
        ),
        props.children
      ]
    }
  );
}
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
  rightIcon,
  originProps = {}
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
        filter: disabled ? "brightness(0.6)" : "none",
        ...style
      },
      className: importantClassName,
      disabled,
      block,
      onClick,
      ...originProps,
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
function CusModalFixture() {
  const [open, setOpen] = useBoolean(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { onClick: setOpen.setTrue, children: "modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CusModal, { open, onCancel: setOpen.setFalse, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          padding: 32,
          color: "#fff"
        },
        children: "Modal Component"
      }
    ) })
  ] });
}
const fixture2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CusModalFixture
}, Symbol.toStringTag, { value: "Module" }));
function CusMenu({
  options,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "com-list-click" + (className ? ` ${className}` : ""), children: options.map((item, index) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "item", onClick: item.onClick, children: [
      item.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item-icon", children: item.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item-text", children: item.label })
    ] }, index);
  }) });
}
const testPng = "" + new URL("test-BmZeV98H.png", import.meta.url).href;
function index_fixture$4() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        padding: "1rem",
        backgroundColor: "#ffffff1f"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CusMenu,
        {
          options: [
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: testPng,
                  alt: "",
                  style: { width: "100%" }
                }
              ),
              label: "one",
              onClick: () => {
                alert("one");
              }
            },
            {
              label: "two",
              onClick: () => {
                alert("two");
              }
            }
          ]
        }
      )
    }
  );
}
const fixture3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_fixture$4
}, Symbol.toStringTag, { value: "Module" }));
function CusListSelect({
  options,
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "com-list-select" + (className ? ` ${className}` : ""), children: options.map((item) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "item",
        onClick: () => {
          onChange(item.value);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item-label", children: item.label }),
          value === item.value && /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon, { className: "item-icon" })
        ]
      },
      item.value
    );
  }) });
}
function index_fixture$3() {
  const [value, setValue] = reactExports.useState("one");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        padding: "1rem",
        backgroundColor: "#ffffff"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Space, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CusListSelect,
        {
          options: [
            { label: "one", value: "one" },
            { label: "two", value: "two" }
          ],
          value,
          onChange: setValue
        }
      ) })
    }
  );
}
const fixture4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_fixture$3
}, Symbol.toStringTag, { value: "Module" }));
const SuccessIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGrSURBVHgBvZRPSwJBGMaf0WkzyTqYhSCUhy6RENilToGg0UFSsC/ire8QfRAhwwIrELp1qVN+gA6BkC1FSrXb7r7NCP7ZXWtdiJ7D7DLs+5tn3n1mgD8W8/qg8JiJYhpRMqb0ACftJHbZ8g0sNdcULCVTjJnrRAJnL+hYBlos+HlbWbzuegKL7VycM5Z1gsYUdnQDN6fxi4cfgfut3ZUpjix8yASdjbYh0H8pPe3MKhxb8KkgsVyJRIucQDJDmwRE4FcMCp6TKRcwwBGfpJ4CLCEex6LH0eGkaQfKHzGJOwljFpVF4xuMQR11WXjLRAfAEA8qtkKwsBgPCBQeBxOLnzsXUzQMgR+G5o4Iw4YYyxLqBZP64tPaAAhtxH6PRe/C5ZHY1oyEesF6Mkx9AKwmGqoo1mxQgtqHesFkyPtZ5P1JIqsp+GknVIyHhN9lAe5gY2H+3ulyEvWOIJQ7F7DCKrpBdAWfkue5Fqt1Rhawq/iyt8wNa9srl3I30oDzOht7feXb+YgCPS3suwIvQbLf3ddgs75ad7XI84KVpwgi+CSzqs2p1URVxX/qGzLBr6KVxVUcAAAAAElFTkSuQmCC";
const WarningIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGCSURBVHgBvZQ/S8NAGMaf91LTVuzULh1EN6FUUCqCroW6OPsVRBRXv4gggg6uXXXqF+hiQbAUBQe3LhaxETWhufPuSkNNcsRQ8YH8fd/87s17zx3wx6KkBHG6WYSNInzPA7Nc2u/0UwNFs2LjLbcKzqsQLBuKOhCiD+7d0mHvPREozmtlwG9EQZFMBW7Twd2zESjO1pZBrIE0IrqebgMLYM3KggxuIa242NEtCgMxsDfkcIXYjwi78lw3xGy8yH5HgERlmFWUx6IxSvgJHE+EobrfSFap7TUBwuI2ZpY7BeRzWcyqHHPVJaMfvOEAmXlzsqAb+Vt56Ttzjs+8oEI6ehiAuGtMJq5+p2SmCWfiRTY1Qtf8AatDaOsYeCIwdiZ4Wfq6x6tdjV1yvrgac2NpDoafnWDoyQ3t9WQPrBZiC8SHPuKra9PJoxNwIvGL9SWMsJ3oS91zqxXezuK3r8uVArx8bbx6QmAFUv0eDbt0/BSZyOQNVq0iZXzlVWkv7Yj/1DdPPoQiUMo/1AAAAABJRU5ErkJggg==";
const ErrorIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgBvZTBasJAEIZnY01V6smTp/YmhBbUFME+gL3U1+oL6amnnlqQCkJFtHjozVMuWtAEzHRmYxbNbhpSSn/QTbKbb2cm/yzAH0tkLcBOp0ZDDYIggELBF+PxKjcQHceGUukGwvAaLOv8dBI39FvRBm9iNvvKBKLr1mG/72kgbaEEv4rJ5DMViM3mFYF6kEdCDI7LYCmY41zQZBfyCvFeligJBNu+JWAV8iuqtwYUoq4tFeKR/vtH9/3Ds6QU8ExGzR8CsWoAvkggIl/zkwe6HhiANttLjEaeBJI97MMLpwrDIX0kgDjKCDYEk3yf/epFKReL6RZBPN4pvREsy+chinC99qBS0RdxzeI040g5fYCBARjIQb43n3uUnm/Yt6vS5PTJc0ZrkcljL6oUsN12aXDhNwrDD+qYZxWh1G73nhLlz+IW3G7H8a0CUqPzafIEecX9vFhsFEebb7UuabjL7BrOhgJIHmfm46vRqEK57MruSYIZZFlTcsZULJdaibIPWO4iNj57lewlHfGf+gYtg5+X4Gz5RQAAAABJRU5ErkJggg==";
const themeColor = {
  default: "#FFFFFF",
  success: "#55EB47",
  warning: "#FF9933",
  error: "#FF3333"
};
const feedbackIcon = {
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon
};
const feedbackIconSize = {
  el: 1.25,
  l: 1.125,
  m: 1
};
const feedbackGap = {
  el: 0.5,
  l: 0.44,
  m: 0.38
};
function CusInput({
  size = "m",
  placeholder,
  style = {},
  inputStyle = {},
  label,
  tip,
  feedback,
  type = "text",
  leftIcon,
  rightIcon,
  state = "default",
  originProps = {}
}) {
  const ref = reactExports.useRef(null);
  const isHovering = useHover(ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      style: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: `${borderRadius[size]}rem`,
        boxShadow: isHovering ? `0px 0px 0px 1px ${themeColor[state]}66` : "none",
        padding: `${paddings[size]}rem`,
        backgroundColor: `${themeColor[state]}1F`,
        ...style
      },
      children: [
        label && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: `-${paddings[size] * 1.25 + 0.5}rem`,
              left: "0.5rem",
              fontSize: `${fontSizes[size] * 0.625}rem`,
              lineHeight: `${paddings[size] * 1.25}rem`,
              fontWeight: 500,
              color: `${themeColor[state]}E0`
            },
            children: label
          }
        ),
        tip && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: `-${paddings[size] * 1.25 + 0.5}rem`,
              right: "0rem",
              fontSize: `${fontSizes[size] * 0.625}rem`,
              lineHeight: `${paddings[size] * 1.25}rem`,
              fontWeight: 500,
              color: `${themeColor[state]}E0`
            },
            children: tip
          }
        ),
        feedback && state !== "default" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              bottom: `-${paddings[size] * 1.25 + 0.5}rem`,
              left: "0.5rem",
              fontSize: `${fontSizes[size] * 0.625}rem`,
              lineHeight: `${paddings[size] * 1.25}rem`,
              fontWeight: 500,
              color: `${themeColor[state]}E0`,
              display: "flex",
              alignItems: "center",
              gap: `${feedbackGap[size]}rem`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: feedbackIcon[state],
                  alt: "",
                  style: {
                    width: `${feedbackIconSize[size]}rem`,
                    height: `${feedbackIconSize[size]}rem`
                  }
                }
              ),
              feedback
            ]
          }
        ),
        !!leftIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(
          CusComIcon,
          {
            control: isHovering,
            size,
            position: "left",
            animation: state === "default" ? "width" : "default",
            ...leftIcon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type,
            style: {
              padding: "0rem",
              fontSize: `${fontSizes[size]}rem`,
              lineHeight: `${lineHeights[size]}rem`,
              fontFamily: "$regular",
              fontWeight: 500,
              color: `${themeColor[state]}E0`,
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
              ...inputStyle
            },
            placeholder,
            ...originProps
          }
        ),
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
function CusTextArea({
  size = "m",
  placeholder,
  style = {},
  originProps = {}
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Input.TextArea,
    {
      style: {
        borderRadius: `${borderRadius[size]}rem`,
        padding: `${paddings[size]}rem`,
        fontSize: `${fontSizes[size]}rem`,
        lineHeight: `${lineHeights[size]}rem`,
        fontFamily: "$regular",
        fontWeight: 500,
        color: "#FFFFFFE0",
        resize: "none",
        ...style
      },
      placeholder,
      rows: 3,
      ...originProps
    }
  );
}
function index_fixture$2() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        padding: "1rem",
        backgroundColor: "#ffffff1f"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { direction: "vertical", size: "large", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { size: "el", placeholder: "size=el" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { size: "l", placeholder: "size=l" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { size: "m", placeholder: "size=m" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { state: "default", placeholder: "state=default" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { state: "success", placeholder: "state=success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { state: "warning", placeholder: "state=warning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { state: "error", placeholder: "state=error" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CusInput,
            {
              leftIcon: { src: testPng },
              placeholder: "leftIcon"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CusInput,
            {
              rightIcon: { src: testPng },
              placeholder: "rightIcon"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Space, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { type: "email", placeholder: "type=email" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { label: "label", placeholder: "label" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CusInput,
            {
              feedback: "feedback",
              state: "warning",
              placeholder: "feedback"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CusInput, { tip: "tip", placeholder: "tip" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Space, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CusTextArea, { placeholder: "textArea" }) })
      ] })
    }
  );
}
const fixture5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_fixture$2
}, Symbol.toStringTag, { value: "Module" }));
function CusIconButton({
  icon,
  onClick,
  size = "m",
  type = "solid",
  disabled,
  style = {},
  importantClassName,
  originProps = {}
}) {
  const ref = reactExports.useRef(null);
  const isHovering = useHover(ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      ref,
      style: {
        padding: `${paddings[size]}rem`,
        borderRadius: `${borderRadius[size]}rem`,
        border: !!onClick ? "inherit" : "none",
        borderColor: isHovering ? borderColorsOnHover[type] : borderColors[type],
        background: backgrounds[type],
        filter: !!disabled ? "brightness(0.6)" : "none",
        height: "unset",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style
      },
      className: importantClassName,
      disabled,
      onClick,
      ...originProps,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CusComIcon,
        {
          control: isHovering,
          size,
          animation: "rotate",
          style: {
            cursor: "pointer"
          },
          ...icon
        }
      )
    }
  );
}
function index_fixture$1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CusIconButton, { icon: { src: testPng } });
}
const fixture6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_fixture$1
}, Symbol.toStringTag, { value: "Module" }));
const index_fixture = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { direction: "vertical", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "el", children: "size=el" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "l", children: "size=l" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "m", children: "size=m" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "s", children: "size=s" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { size: "es", children: "size=es" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { type: "solid", children: "type=solid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { type: "outline", children: "type=outline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { type: "text", children: "type=text" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { disabled: true, children: "disabled" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CusButton, { block: true, children: "block" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Space, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CusButton,
        {
          leftIcon: {
            src: testPng
          },
          children: "leftIcon"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CusButton,
        {
          leftIcon: {
            src: testPng,
            animation: "width"
          },
          children: "HoverAnimation"
        }
      )
    ] }) })
  ] });
};
const fixture7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_fixture
}, Symbol.toStringTag, { value: "Module" }));
const rendererConfig = {
  "playgroundUrl": "http://localhost:5000",
  "containerQuerySelector": null
};
const fixtures = {
  "src/CusTooltip/index.fixture.tsx": { module: fixture0 },
  "src/CusTextButton/index.fixture.tsx": { module: fixture1 },
  "src/CusModal/index.fixture.tsx": { module: fixture2 },
  "src/CusMenu/index.fixture.tsx": { module: fixture3 },
  "src/CusListSelect/index.fixture.tsx": { module: fixture4 },
  "src/CusInput/index.fixture.tsx": { module: fixture5 },
  "src/CusIcon/index.fixture.tsx": { module: fixture6 },
  "src/CusButton/index.fixture.tsx": { module: fixture7 }
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
