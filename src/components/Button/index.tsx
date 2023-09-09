import React, { useEffect, useState } from "react"

import "./Button.css"

import { ButtonProps } from "./interfaces"

const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    isDisabled,
    buttonType,
    size,
    backgroundColor,
    textColor,
    onClick,
    shadow,
    startIcon,
    endIcon,
  } = props

  const shadows = shadow ? "shadow" : ""
  const disabled = isDisabled ? "disabled" : ""

  const [title, setTitle] = useState("")

  useEffect(() => {
    console.log(title)
    setTitle("asd")
  }, [title])

  return (
    <button
      onClick={onClick}
      className={[
        "button",
        `${size}`,
        `${buttonType}`,
        `${shadows}`,
        `${disabled}`,
        `bg-${backgroundColor}`,
        `text-${textColor}`,
      ].join(" ")}
      disabled={isDisabled}
      {...props}
    >
      {startIcon && (
        <span className="material-icons icon-start">local_grocery_store</span>
      )}
      {text}
      {endIcon && (
        <span className="material-icons icon-end">local_grocery_store</span>
      )}
    </button>
  )
}

export { Button }
