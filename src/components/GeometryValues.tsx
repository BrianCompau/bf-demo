import React, { useEffect, useState } from 'react'
import { Geometry } from 'better-frames-1'

interface Props {
  getGeometry: () => Geometry
}

//-----------------------------------------------------------------------------------------------
// GeometryValues
//-----------------------------------------------------------------------------------------------
const GeometryValues: React.FunctionComponent<Props> = (props) => {
  const { getGeometry } = props;
  const [ geometry, setGeometry ] = useState<Geometry>(getGeometry())

  //-----------------------------------------------------------------------------------------------
  // sleep
  //-----------------------------------------------------------------------------------------------
  const sleep = (milliseconds: number): Promise<any> =>{
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  //----------------------------------------------------------------------------------------------
  // useEffect
  //----------------------------------------------------------------------------------------------
  const effectAsync = async () => {
    while (true) {
      await sleep(100)
      setGeometry(getGeometry())
    }
  }

  const effectSync = () => {
    effectAsync()
  }

  useEffect(effectSync)

  //----------------------------------------------------------------------------------------------
  // render
  //---------------------------------------------------------------------------------------------
  return (
    <div>{JSON.stringify(geometry, null, 4)}</div>
  )
}

export default GeometryValues