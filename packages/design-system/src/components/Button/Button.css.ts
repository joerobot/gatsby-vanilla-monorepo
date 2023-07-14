import { recipe } from "@vanilla-extract/recipes"
import type { RecipeVariants } from "@vanilla-extract/recipes"
import { createVar, fallbackVar, style } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"
import { tokens as vars } from "../../tokens.css"

export const buttonVars = {
  display: createVar(),
  width: createVar(),
  color: {
    background: createVar(),
    text: createVar(),
    backgroundHover: createVar(),
    backgroundActive: createVar(),
    textHover: createVar(),
    textActive: createVar(),
    borderColor: createVar(),
    borderColorHover: createVar(),
    borderColorActive: createVar(),
    focusRing: createVar(),
    visited: createVar(),
  },
  size: {
    border: createVar(),
    block: createVar(),
    inline: createVar(),
  },
  fontSize: createVar(),
  textDecoration: createVar(),
  textDecorationHover: createVar(),
}

const outline = `inset 0 0 0 ${fallbackVar(buttonVars.size.border, "0")} ${fallbackVar(
  buttonVars.color.borderColor,
  "transparent"
)}`

export const base = style({
  display: fallbackVar(buttonVars.display, "flex"),
  justifyContent: "center",
  alignItems: "center",
  width: fallbackVar(buttonVars.width, "max-content"),
  gap: vars.space.xs,
  position: "relative",
  borderRadius: vars.radius.md,
  textAlign: "center",
  transition: "all 150ms ease-out",
  boxShadow: outline,
  paddingBlock: buttonVars.size.block,
  paddingInline: buttonVars.size.inline,
  backgroundColor: buttonVars.color.background,
  color: buttonVars.color.text,
  textDecoration: fallbackVar(buttonVars.textDecoration, "none"),
  fontSize: buttonVars.fontSize,


  ":hover": {
    vars: {
      [buttonVars.color.borderColor]: buttonVars.color.textHover,
    },
    backgroundColor: buttonVars.color.backgroundHover,
    color: buttonVars.color.textHover,
    textDecoration: buttonVars.textDecorationHover,
    borderRadius: vars.radius.lg,
    cursor: "pointer",
  },

  ":active": {
    vars: {
      [buttonVars.color.borderColor]: buttonVars.color.textActive,
    },
    color: buttonVars.color.textActive,
    borderRadius: vars.radius["2xl"],
    backgroundColor: buttonVars.color.backgroundActive,
    transitionDuration: ".05s",
  },

  ":focus-visible": {
    vars: {
      [buttonVars.color.borderColor]: vars.color.blue[80],
    },
    outline: `1px solid ${buttonVars.color.textHover}`,
    outlineOffset: `calc(${vars.space["2xs"]} * -1)`,
    backgroundColor: buttonVars.color.backgroundHover,
  },

  ":visited": {
    color: fallbackVar(buttonVars.color.visited, buttonVars.color.text),
  },

  selectors: {
    "&[aria-disabled], &:disabled": {
      pointerEvents: "none",
    },
  },
})

export const button = recipe({
  base: {},
  variants: {
    variant: {
      ["solid"]: {},
      ["outline"]: {
        vars: {
          [buttonVars.size.border]: "1px",
          [buttonVars.color.text]: vars.color.grey[80],
          [buttonVars.color.borderColor]: vars.color.grey[80],
          [buttonVars.color.background]: "transparent",
          [buttonVars.color.textHover]: vars.color.blue[70],
          [buttonVars.color.textActive]: vars.color.blue[60],
        },
      },
      ["transparent"]: {
        vars: {
          [buttonVars.color.text]: vars.color.grey[80],
          [buttonVars.color.textHover]: vars.color.blue[90],
          [buttonVars.color.backgroundHover]: vars.color.blue[20],
        },
      },
      ["text"]: {
        vars: {
          [buttonVars.display]: "inline-block",
          [buttonVars.color.background]: "transparent",
          [buttonVars.textDecorationHover]: "underline",
          [buttonVars.color.text]: vars.color.grey[80],
          [buttonVars.color.textHover]: vars.color.grey[80],
          [buttonVars.color.textActive]: vars.color.blue[60],
        },
      },
    },
    colorModes: {
      ["light"]: {
        vars: {
          [buttonVars.color.focusRing]: vars.color.white,
          [buttonVars.color.text]: vars.color.black,
        },
      },
      ["dark"]: {
        vars: {
          [buttonVars.color.focusRing]: vars.color.white,
          [buttonVars.color.text]: vars.color.white,
        },
      },
    },
    size: {
      ["normal"]: {
        vars: {
          [buttonVars.size.block]: vars.space.md,
          [buttonVars.size.inline]: vars.space.md,
          [buttonVars.fontSize]: vars.fontSize.md,
        },
      },
      ["compact"]: {
        vars: {
          [buttonVars.size.block]: vars.space.sm,
          [buttonVars.size.inline]: vars.space.sm,
          [buttonVars.fontSize]: vars.fontSize.sm,
        },
      },
      ["full"]: {
        vars: {
          [buttonVars.size.block]: vars.space.md,
          [buttonVars.size.inline]: vars.space.md,
          [buttonVars.fontSize]: vars.fontSize.md,
          [buttonVars.width]: "100%",
        },
      },
      ["fullCompact"]: {
        vars: {
          [buttonVars.size.block]: vars.space.sm,
          [buttonVars.size.inline]: vars.space.sm,
          [buttonVars.fontSize]: vars.fontSize.sm,
          [buttonVars.width]: "100%",
        },
      },
    },
    width: {
      full: {
        width: "100%",
      },
    },
    icon: {
      before: {},
      after: {},
    },
    disabled: {
      true: {},
    },
  },
  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        variant: "solid",
        colorModes: "light",
      },
      style: {
        vars: {
          [buttonVars.color.background]: vars.color.grey[90],
          [buttonVars.color.text]: vars.color.white,
          [buttonVars.color.backgroundHover]: vars.color.blue[80],
          [buttonVars.color.textHover]: vars.color.white,
          [buttonVars.color.backgroundActive]: vars.color.blue[70],
          [buttonVars.color.textActive]: vars.color.white,
        },
      },
    },

    {
      variants: {
        variant: "solid",
        size: "compact",
      },
      style: {
        vars: {
          [buttonVars.size.block]: vars.space.sm,
          [buttonVars.size.inline]: vars.space.sm,
          [buttonVars.fontSize]: vars.fontSize.sm,
        },
      },
    },
    {
      variants: {
        variant: "solid",
        colorModes: "dark",
      },
      style: {
        vars: {
          [buttonVars.color.background]: vars.color.green[20],
          [buttonVars.color.text]: vars.color.grey[90],
          [buttonVars.color.backgroundHover]: vars.color.green[30],
          [buttonVars.color.backgroundActive]: vars.color.green[40],
          [buttonVars.color.textHover]: vars.color.green[90],
        },
      },
    },
    {
      variants: {
        variant: "solid",
        disabled: true,
      },
      style: {
        vars: {
          [buttonVars.color.background]: vars.color.grey[20],
          [buttonVars.color.text]: vars.color.grey[80],
          [buttonVars.color.backgroundHover]: vars.color.grey[40],
          [buttonVars.color.textHover]: vars.color.grey[90],
        },
      },
    },
    {
      variants: {
        variant: "outline",
        colorModes: "dark",
      },
      style: {
        vars: {
          [buttonVars.color.background]: "transparent",
          [buttonVars.color.text]: vars.color.green[20],
          [buttonVars.color.borderColor]: vars.color.green[20],
          [buttonVars.color.textHover]: vars.color.green[30],
          [buttonVars.color.textActive]: vars.color.green[40],
        },
      },
    },
    {
      variants: {
        variant: "outline",
        disabled: true,
      },
      style: {
        vars: {
          [buttonVars.color.text]: vars.color.grey[80],
          [buttonVars.color.backgroundHover]: vars.color.grey[10],
          [buttonVars.color.textHover]: vars.color.grey[80],
          [buttonVars.color.borderColor]: vars.color.grey[40],
        },
      },
    },
    {
      variants: {
        variant: "text",
        size: "normal",
      },
      style: {
        vars: {
          [buttonVars.size.inline]: vars.space.sm,
        },
      },
    },
    {
      variants: {
        variant: "text",
        size: "compact",
      },
      style: {
        vars: {
          [buttonVars.size.inline]: vars.space["2xs"],
        },
      },
    },

    {
      variants: {
        variant: "transparent",
        disabled: true,
      },
      style: {
        vars: {
          [buttonVars.color.text]: vars.color.grey[70],
          [buttonVars.color.textHover]: vars.color.grey[80],
          [buttonVars.color.backgroundHover]: vars.color.grey[40],
        },
      },
    },
    {
      variants: {
        width: "full",
        icon: "before",
      },
      style: {
        paddingInlineEnd: calc.add(buttonVars.size.inline, "1.25em", vars.space.xs),
      },
    },
    {
      variants: {
        width: "full",
        icon: "after",
      },
      style: {
        paddingInlineStart: calc.add(buttonVars.size.inline, "1.25em", vars.space.xs),
      },
    },
  ],
})


export type ButtonVariants = RecipeVariants<typeof button>

