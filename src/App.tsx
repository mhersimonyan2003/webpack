import React, { useEffect, useState } from "react"

import "./App.css"
import "./App.scss"
import { Button } from "./components/Button"

interface Props {
  text: string
}

const App: React.FC<Props> = ({ text }) => {
  const [title, setTitle] = useState("")

  useEffect(() => {
    console.log(text)
    console.log(title)
    setTitle(text)
  }, [text, title])

  const buttonClickHandler = () => {
    console.log("Button")
  }

  return (
    <div>
      <h1>Hello world</h1>
      <Button
        text="Default"
        isDisabled={false}
        buttonType="filled"
        size="medium"
        variant="oval"
        backgroundColor="danger"
        textColor="primary"
        shadow
        startIcon={false}
        endIcon={false}
        onClick={buttonClickHandler}
      />
    </div>
  )
}

export default App
