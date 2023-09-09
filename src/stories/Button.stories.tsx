import React from "react"

import { Button } from "../components/Button/index"
import { ButtonProps } from "../components/Button/interfaces"

export default {
  title: "React/Button",
  argTypes: {
    text: { control: "text" },
    isDisabled: { control: "boolean" },
    shadow: { control: "boolean" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    type: {
      options: ["filled", "outline", "text"],
      control: { type: "select" },
    },
    backgroundColor: {
      options: ["default", "primary", "secondary", "danger"],
      control: { type: "select" },
    },
    textColor: {
      options: ["default", "white", "primary"],
      control: { type: "select" },
    },
  },
}

const Template = (args: ButtonProps) => <Button {...args} />

export const defaultButton = Template.bind({})
defaultButton.args = {
  type: "default",
  text: "Default",
  backgroundColor: "default",
  textColor: "default",
  shadow: true,
  size: "medium",
}

export const defaultDisabledButton = Template.bind({})
defaultDisabledButton.args = {
  text: "Disabled",
  backgroundColor: "default",
  textColor: "default",
  shadow: false,
  isDisabled: true,
}

export const outlineButton = Template.bind({})
outlineButton.args = {
  text: "Default",
  textColor: "primary",
  type: "outline",
}

export const textButton = Template.bind({})
textButton.args = {
  text: "Default",
  backgroundColor: "transparent",
  textColor: "primary",
  shadow: false,
  type: "text",
}

export const textDisabledButton = Template.bind({})
textDisabledButton.args = {
  text: "Disabled",
  shadow: false,
  isDisabled: true,
  textColor: "default",
  type: "text",
}

export const disableShadow = Template.bind({})
disableShadow.args = {
  text: "Default",
  backgroundColor: "primary",
  type: "filled",
  textColor: "white",
  shadow: true,
}

export const startIconButton = Template.bind({})
startIconButton.args = {
  text: "Default",
  backgroundColor: "primary",
  type: "filled",
  startIcon: true,
  textColor: "white",
  shadow: true,
}
export const endIconButton = Template.bind({})
endIconButton.args = {
  text: "Default",
  backgroundColor: "primary",
  type: "filled",
  endIcon: true,
  textColor: "white",
  shadow: true,
}

export const primaryButton = Template.bind({})
primaryButton.args = {
  text: "Default",
  backgroundColor: "primary",
  textColor: "white",
  shadow: true,
}
export const secondaryButton = Template.bind({})
secondaryButton.args = {
  text: "Secondary",
  backgroundColor: "secondary",
  textColor: "white",
  shadow: true,
}

export const dangerButton = Template.bind({})
dangerButton.args = {
  text: "Danger",
  backgroundColor: "danger",
  textColor: "white",
  shadow: true,
}
