import { BsX } from 'react-icons/bs';
import Canvas, { Geometry, Frame, Button, FrameOptions } from "better-frames-1"
import styled from 'styled-components';
import VideoSelector from './VideoSelector'
import { useReducer } from 'react';
interface Props {
  canvas: Canvas
  geometry: Geometry
  id: number
  state: any
}
let src = ''
//-----------------------------------------------------------------------------------------------
// MovieDemo
//-----------------------------------------------------------------------------------------------
const Green: React.FunctionComponent<Props> = (props) => {
  const {canvas, id} = props
  let {geometry} = props
  const {removeFrame} = canvas
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  //-----------------------------------------------------------------------------------------------
  // cancel
  //-----------------------------------------------------------------------------------------------
  const cancel = (): void => {
    src = ''
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
      color: darkgreen;
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
    console.log(src)
  }

  const setSrc = (newSrc: string): void => {
    src = newSrc
  }

  const clearSrc = (): void => {
    src = ''
    forceUpdate()
  }

  const playVideo = (): void => {
    canvas.addFrame(VideoSelector, { canvas, height: 200, width: 200, setSrc: setSrc })
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
      title="Video Player"
      frameOptions={frameOptions}
    >
      <div className='centered'>
        <button className='button darkgreen' onClick={playVideo}>Select Video</button>
        <button className='button darkgreen' onClick={clearSrc}>Clear Video</button>
        <iframe height='200px' width='356px' src={src}></iframe> <br/><br/>
      </div>
    </Frame>
  )
}
//        <iframe src={src}></iframe> <br/><br/>
export default Green;
