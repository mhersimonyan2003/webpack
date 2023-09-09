export enum ButtonTypes {
  outline = "outline",
  filled = "filled",
  text = "text",
}

export enum ButtonVariants {
  oval = "oval",
  rectangular = "rectangular",
}

export enum ButtonSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ButtonBackgroundColor {
  default = "default",
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
}

export enum ButtonTextColor {
  default = "default",
  white = "white",
  primary = "primary",
}

export interface ButtonProps {
  text: string
  isDisabled: boolean
  buttonType: keyof typeof ButtonTypes
  size: keyof typeof ButtonSizes
  variant: keyof typeof ButtonVariants
  backgroundColor: keyof typeof ButtonBackgroundColor
  textColor: keyof typeof ButtonTextColor
  onClick: () => void
  shadow: boolean
  startIcon: boolean
  endIcon: boolean
}
