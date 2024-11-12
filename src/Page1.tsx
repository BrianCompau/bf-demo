import styled from 'styled-components'
import Canvas from "better-frames-1"
import ButtonRow from './components/ButtonRow'

//-----------------------------------------------------------------------------------------------
// App
//-----------------------------------------------------------------------------------------------
export default function Page1() {
  const canvas = new Canvas()

  //-----------------------------------------------------------------------------------------------
  // divRef
  //-----------------------------------------------------------------------------------------------
  const divRef = (div: any) => {
    if (div !== null) {
      canvas.setDiv(div)
    }
  }

  //-----------------------------------------------------------------------------------------------
  // styles
  //-----------------------------------------------------------------------------------------------
  const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `

  const Container = styled.div`
    background-color: lightblue;
    flex-grow: 1;
    font-size: 1.0em;
    height: 100vh;
    position: relative;
    width: 100vw;
  `

  //-----------------------------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------------------------
  return (
    <Body>
      <ButtonRow canvas={canvas}/>
      <Container ref={divRef} />
    </Body>
  );
}