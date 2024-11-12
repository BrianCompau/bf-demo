import { BsX } from 'react-icons/bs';
import Canvas, { Geometry, Frame, Button, FrameOptions } from "better-frames-1"
import styled from 'styled-components';
interface Props {
  canvas: Canvas
  geometry: Geometry
  id: number
  state: any
  src: string
}

//-----------------------------------------------------------------------------------------------
// MovieDemo
//-----------------------------------------------------------------------------------------------
const Green: React.FunctionComponent<Props> = (props) => {
  const {canvas, id, src} = props
  let {geometry} = props
  const {removeFrame} = canvas

  //-----------------------------------------------------------------------------------------------
  // cancel
  //-----------------------------------------------------------------------------------------------
  const cancel = (): void => {
    removeFrame(id)
  }

  //----------------------------------------------------------------------------------------------
  // getButtons
  //----------------------------------------------------------------------------------------------
  const getButtons = (): Button[] => {
    const buttons: Button[] = []

    buttons.push({
      icon: <BsX/>,
      onClick: cancel,
      tip: 'Cancel'
    })

    return buttons
  }
  
  const wrapperStyle = styled(canvas.getWrapperStyle())`
    background-color: lightgreen;
    border: 5px solid darkgreen;
    outline: 2px solid black;
  `
  const headerStyle = styled(canvas.getHeaderStyle())`
    color: lightgreen;
    background-color: darkgreen;
    borderBottom: 1px solid darkgreen;
  `

  const buttonStyle = styled(canvas.getButtonStyle())`
    &:hover {
      background-color: lightgreen;
    }
  `

  const frameOptions: FrameOptions = {
    wrapperStyle: wrapperStyle,
    headerStyle: headerStyle,
    buttonStyle: buttonStyle
  }
  //----------------------------------------------------------------------------------------------
  // resize
  //----------------------------------------------------------------------------------------------
  const resize = (newGeometry: Geometry): void => {
    geometry = JSON.parse(JSON.stringify(newGeometry))
  }

  //----------------------------------------------------------------------------------------------
  // render
  //----------------------------------------------------------------------------------------------
  const iframeStyle = {
    height: '100%',
    width: '100%'
  }
  return (
    <Frame
      buttons={getButtons()}
      canvas={canvas}
      geometry={geometry}
      onGeometryChange={resize}
      title="Video Player"
      frameOptions={frameOptions}
    >
      <iframe width="480" height="345" src="https://thisvid.com/embed/11583090/"></iframe>
    </Frame>
  )
}

export default Green;
