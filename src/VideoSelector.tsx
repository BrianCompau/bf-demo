import { BsX } from 'react-icons/bs';
import Canvas, { Geometry, Frame, Button, FrameOptions } from "better-frames-1"
import styled from 'styled-components';
interface Props {
  canvas: Canvas
  geometry: Geometry
  id: number
  state: any
  setSrc: any
}

//-----------------------------------------------------------------------------------------------
// MovieDemo
//-----------------------------------------------------------------------------------------------
const Green: React.FunctionComponent<Props> = (props) => {
  const {canvas, id, setSrc} = props
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

  const returnSrc = (src: string): void => {
    setSrc(src)
    
    //removeFrame(id)
  }

  //----------------------------------------------------------------------------------------------
  // render
  //----------------------------------------------------------------------------------------------
  return (
    <Frame
      buttons={getButtons()}
      canvas={canvas}
      geometry={geometry}
      onGeometryChange={resize}
      title="Video Selector"
      frameOptions={frameOptions}
    >
      <div>
        <button className='bigbutton darkgreen' onClick={() => {returnSrc('https://media.istockphoto.com/id/1364149381/video/surfer-rides-the-powerful-ocean-wave-at-sunset.mp4?s=mp4-640x640-is&k=20&c=toE_iDWh0xnYq6OwtA_x7mS7JxDAu_Jko4kqIB0Tjng=')}}>Surfing</button>
        <button className='bigbutton darkgreen' onClick={() => {returnSrc('https://media.istockphoto.com/id/2050492785/video/fit-woman-hikes-through-picturesque-mountain-landscapes.mp4?s=mp4-640x640-is&k=20&c=0VAjzOBuu-8viPL9-W3XkqF68qTsjl3O9gfdZIjHHrQ=')}}>Hiking</button>
      </div>
    </Frame>
  )
}

export default Green;
