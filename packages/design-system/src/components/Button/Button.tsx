import React from "react"
import type { ReactNode } from "react"
import * as styles from "./Button.css"

const defaultIconProps = {
  width: "1.25em",
  height: "1.25em",
  color: "currentColor",
}

type IconProps = typeof defaultIconProps

type RenderIconFunc = {
  (iconProps: IconProps): ReactNode
}

type ButtonProps = {
  url?: string
  onClick?: any
  children: ReactNode
  variant?: "solid" | "outline" | "transparent" | "text"
  colorModes?: "dark" | "light"
  size?: "normal" | "compact" | "full" | "fullCompact"
  loading?: boolean
  full?: boolean
  renderIconBefore?: RenderIconFunc
  renderIconAfter?: RenderIconFunc
  className?: string
  disabled?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    {
      url,
      onClick,
      children,
      variant = "solid",
      colorModes = "light",
      size = "normal",
      renderIconBefore,
      renderIconAfter,
      loading,
      disabled = false,
      full,
      className,
      ...rest
    },
    ref
  ) => {
    const Element = url ? "a" : "button"

    const width = full ? "full" : undefined

    const hasIcon = !!renderIconBefore || !!renderIconAfter
    const icon = hasIcon && !!renderIconBefore ? "before" : "after"

    const buttonVariantClass = styles.button({
      variant,
      colorModes,
      size,
      width,
      icon: hasIcon ? icon : undefined,
      disabled,
    })

    const classNames = [styles.base, buttonVariantClass, className].join(" ")

    return (
      <Element
        href={url || undefined}
        onClick={onClick || undefined}
        className={classNames}
        ref={ref}
        disabled={disabled}
        {...rest}
      >
            {renderIconBefore ? renderIconBefore(defaultIconProps) : null}
            {children}
            {renderIconAfter ? renderIconAfter(defaultIconProps) : null}
      </Element>
    )
  }
)
