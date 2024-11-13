import Canvas from 'better-frames-1'
import GeometryDisplay from '../GeometryDisplay'
import ButtonCounter from '../ButtonCounter'
import VideoPlayer from '../VideoPlayer'
import { Geometry } from 'better-frames-1'
type Props = {
  canvas: Canvas
}

//----------------------------------------------------------------------------------------------
// ButtonRow
//----------------------------------------------------------------------------------------------
const ButtonRow: React.FunctionComponent<Props> = (props) => {
  const { canvas } = props

  const button1clicked = () => {
    canvas.addFrame(GeometryDisplay, {canvas, height: 400, width: 400, x: 50, y: 50})
  }
  const button2clicked = () => {
    canvas.addFrame(ButtonCounter, {canvas, height: 400, width: 400, x: 50, y: 50})
  }
  const button3clicked = () => {
    canvas.addFrame(VideoPlayer, {canvas, height: 400, width: 400, x: 50, y: 50})
  }

  //----------------------------------------------------------------------------------------------
  // render
  //----------------------------------------------------------------------------------------------
  return (
  <div>
    <h1></h1>
    <button className="button pink" onClick={button1clicked} >Geometry</button>
    <button className="button red" onClick={button2clicked} >Button Counter</button>
    <button className="button green" onClick={button3clicked} >Video Player</button>
  </div>
  )
}

export default ButtonRow
