import { Html, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import Iphone from './Iphone'

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full border-2 border-red-500 absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >

      <ambientLight intensity={0.3}/>

      <PerspectiveCamera makeDefault position={[0,0,4]}/>

      <Lights/>

      <Suspense fallback={<Html><div>Loading...</div></Html>}>
        <Iphone/>

      </Suspense>
    </View>
  )
}

export default ModelView