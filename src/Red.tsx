import { BsX } from 'react-icons/bs';
import {FaArrowUp, FaArrowDown } from 'react-icons/fa'
import styled from 'styled-components'
import Canvas, { Frame, Button, FrameOptions } from "better-frames-1"
type Props = {
  canvas: Canvas
  geometry: any
  id: number
  message: any
  state: any
}
var counter = 0
const Red: React.FunctionComponent<Props> = (props) => {
  const { canvas, geometry, id } = props;
  const close = () => {
    counter = 0
    canvas.removeFrame(id);
  }

  const up = () => {
    counter++
    canvas.root.render(canvas.getElements())
  }

  const down = () => {
    counter--
    canvas.root.render(canvas.getElements())
  }

  const buttons: Button[] = [
    {
      icon: <FaArrowUp />,
      onClick: up,
      tip: 'counter',
    },
    {
      icon: <FaArrowDown />,
      onClick: down,
      tip: 'counter',
    },
    {
      icon: <BsX/>,
      onClick: close,
      tip: 'close',
    }
  ]

  const wrapperStyle = styled(canvas.getWrapperStyle())`
    background-color: lightcoral;
  `

  const frameOptions: FrameOptions = {
    wrapperStyle: wrapperStyle
  }

  return (
      <Frame
          buttons={buttons}
          canvas={canvas}
          geometry={geometry}
          onGeometryChange={() => {}}
          title={"Button Counter"}
          frameOptions={frameOptions}
      >
        <>
          <h1>{counter}</h1>
        </>
      </Frame>
  )
}

export default Red;
