import Canvas from 'better-frames-1'
import Pink from '../Pink'
import Red from '../Red'
import Green from '../Green'
type Props = {
  canvas: Canvas
}

//----------------------------------------------------------------------------------------------
// ButtonRow
//----------------------------------------------------------------------------------------------
const ButtonRow: React.FunctionComponent<Props> = (props) => {
  const { canvas } = props

  const button1clicked = () => {
    canvas.addFrame(Pink, {canvas})
  }
  const button2clicked = () => {
    canvas.addFrame(Red, {canvas})
  }
  const button3clicked = () => {
    canvas.addFrame(Green, {canvas})
  }

  //----------------------------------------------------------------------------------------------
  // render
  //----------------------------------------------------------------------------------------------
  return (
  <div>
    <button className="button" onClick={button1clicked} ></button>
    <button className="button" onClick={button2clicked} ></button>
    <button className="button" onClick={button3clicked} ></button>
  </div>
  )
}

export default ButtonRow
