import React from 'react'
import { BsX } from 'react-icons/bs';
import styled from 'styled-components'
import Canvas, { Geometry, Frame, Button, FrameOptions } from "better-frames-1"
import GeometryValues from './components/GeometryValues'
type Props = {
  canvas: Canvas
  geometry: any
  id: number
  message: any
  state: any
}

const Pink: React.FunctionComponent<Props> = (props) => {
  const { canvas, id } = props;
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

  const wrapperStyle = styled(canvas.getWrapperStyle())`
    background-color: pink;
    border: 5px solid purple;
    outline: 2px solid black;
`
  const headerStyle = styled(canvas.getHeaderStyle())`
    color: pink;
    background-color: purple;
    borderBottom: 1px solid purple;
  `

  const buttonStyle = styled(canvas.getButtonStyle())`
    &:hover {
      color: purple;
      background-color: pink;
    }
  `

  const frameOptions: FrameOptions = {
    wrapperStyle: wrapperStyle,
    headerStyle: headerStyle,
    buttonStyle: buttonStyle
  }

  //----------------------------------------------------------------------------------------------
  // getGeometry
  //----------------------------------------------------------------------------------------------
  const getGeometry = (): Geometry => {
    return geometry
  }

  const onGeometryChange = (newGeometry: Geometry) => {
    geometry = JSON.parse(JSON.stringify(newGeometry))
  }

  return (
    <div>
      <Frame
          buttons={buttons}
          canvas={canvas}
          geometry={geometry}
          onGeometryChange={onGeometryChange}
          title={"Geometry"}
          frameOptions={frameOptions}
      >
        <GeometryValues getGeometry={getGeometry}></GeometryValues>
      </Frame>
    </div>
  )
}

export default Pink;
