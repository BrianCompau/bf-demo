import React from 'react'
import { BsX } from 'react-icons/bs';
import Canvas, { Frame, Geometry, Button, FrameOptions } from "better-frames-1"

type Props = {
  canvas: Canvas
  geometry: any
  id: number
  message: any
  state: any
  onGeometryChange: (_geometry: Geometry) => void
}

const TestComponent: React.FunctionComponent<Props> = (props) => {
  const { canvas, id, onGeometryChange } = props;
  let { geometry } = props
  const close = () => {
    canvas.removeFrame(id);
  }

  const buttons: Button[] = [
    {
      icon: <BsX/>,
      onClick: close,
      tip: 'close',
    }
  ]
  
  return (
    <Frame
        buttons={buttons}
        canvas={canvas}
        geometry={geometry}
        onGeometryChange={onGeometryChange}
        title={"pink"}
    >
      <div></div>
    </Frame>
  )
}
export default TestComponent;
