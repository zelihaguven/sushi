import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr } from '@react-three/drei'
import CameraRig from './CameraRig'
import WorldScene from './WorldScene'

export default function SushiUniverse({
  zone,
  selection,
  reducedMotion,
  entered,
  onSelect,
  onEnter,
}) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      camera={{ fov: 42, position: [0, 3.6, 21.5], near: 0.1, far: 90 }}
      frameloop={reducedMotion ? 'demand' : 'always'}
      onPointerMissed={() => onSelect(null)}
      onCreated={({ gl }) => {
        gl.setClearColor('#f3e4d4', 1)
      }}
    >
      <AdaptiveDpr />
      <CameraRig
        zone={zone}
        selection={selection}
        reducedMotion={reducedMotion}
        controlsEnabled={entered}
      />
      <WorldScene
        reducedMotion={reducedMotion}
        selection={selection}
        onSelect={onSelect}
        onEnter={onEnter}
      />
    </Canvas>
  )
}
