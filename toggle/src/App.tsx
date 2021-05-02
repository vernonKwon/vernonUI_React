import "./App.css"
import "./app.scss"
import Styled, { keyframes } from "styled-components"
import { useCallback, useEffect, useState } from "react"
import { IoFastFoodSharp } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"

const Circle = Styled.div`
  border-radius: 50%;
  background: #ffee00;
  height: 30px;
  width: 30px;
  display: flex;
  /* transition: "0.25s all"; */\
`

interface BackgroundProps {
  onClickListener: () => void
  isCheck: boolean
  children: React.ReactNode
}

const moveCircle = keyframes`
  from {
    justify-content : flex-start;
  }
  to {
    justify-content : flex-end;
  }
`

const Background = ({
  onClickListener,
  isCheck,
  children,
}: BackgroundProps) => {
  const Parent = Styled.div`
    position: absolute;
    display: flex;
    width: 70px;
    transition: flex 1s;
    align-items: center;
    background: #ff0000;
    flex-flow: end;
`

  console.log(isCheck)
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "70px",
          height: "30px",
          borderRadius: "50px",
          position: "absolute",
          display: "flex",
          backgroundColor: "#2f2fb1",
          justifyContent: "space-between",
        }}
      >
        <IoFastFoodSharp
          style={{
            margin: "auto",
            color: isCheck ? "yellow" : "#000000",
            transition: "0.25s all",
          }}
        />

        <GiFoodTruck
          style={{ margin: "auto", color: isCheck ? "#000000" : "yellow" }}
        />
      </div>
      <Parent
        style={{
          justifyContent: isCheck ? "flex-start" : "flex-end",
        }}
        onClick={onClickListener}
      >
        {children}
      </Parent>
    </div>
  )
}

function App() {
  const [isCheck, setCheck] = useState<boolean>(true)

  const onChange = useCallback(() => {
    setCheck(!isCheck)
  }, [isCheck])

  return (
    <div>
      <Background onClickListener={onChange} isCheck={isCheck}>
        <Circle />
      </Background>

      <div>{JSON.stringify(isCheck)}</div>
    </div>
  )
}

// {
//   isCheck ? (
//     <GiFoodTruck
//       style={{
//         margin: "auto",
//         color: isCheck ? "#000000" : "yello",
//         transition: "0.25s all",
//       }}
//     />
//   ) : (
//     <IoFastFoodSharp
//       style={{
//         margin: "auto",
//         color: isCheck ? "yellow" : "#000000",
//         transition: "0.25s all",
//       }}
//     />
//   )
// }

export default App
