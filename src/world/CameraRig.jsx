import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import { getView } from './zones'

export default function CameraRig({ zone, selection, reducedMotion, controlsEnabled }) {
  const controls = useRef(null)
  const invalidate = useThree((state) => state.invalidate)

  useEffect(() => {
    const cameraControls = controls.current
    if (!cameraControls) return
    const { eye, target } = getView(zone, selection)
    cameraControls.setLookAt(
      eye[0],
      eye[1],
      eye[2],
      target[0],
      target[1],
      target[2],
      !reducedMotion,
    )
    invalidate()
  }, [zone, selection, reducedMotion, invalidate])

  return (
    <CameraControls
      ref={controls}
      minPolarAngle={0.34}
      maxPolarAngle={Math.PI / 2.08}
      minDistance={4.2}
      maxDistance={26}
      makeDefault
      smoothTime={reducedMotion ? 0.01 : 0.72}
      maxSmoothTime={1.1}
      truckSpeed={0.35}
      draggingSmoothTime={reducedMotion ? 0 : 0.12}
      enabled={controlsEnabled}
    />
  )
}
