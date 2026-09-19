import { useState } from 'react'
import { useCursor } from '@react-three/drei'

export function Clay({ color, roughness = 0.9, metalness = 0.02 }) {
  return <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
}

export function Hotspot({ radius = 0.72, height = 0.9, onSelect }) {
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  return (
    <mesh
      position={[0, height / 2, 0]}
      onClick={(event) => {
        event.stopPropagation()
        onSelect?.()
      }}
      onPointerOver={(event) => {
        event.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={() => setHovered(false)}
    >
      <cylinderGeometry args={[radius, radius, height, 12]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  )
}

export function ClayPlate({ color = '#f3eadc', radius = 0.56, children, ...props }) {
  return (
    <group {...props}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.035, 0]}>
        <cylinderGeometry args={[radius, radius + 0.05, 0.07, 28]} />
        <Clay color={color} roughness={0.78} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.075, 0]}>
        <cylinderGeometry args={[radius * 0.62, radius * 0.62, 0.025, 24]} />
        <Clay color="#fbf6ef" roughness={0.58} />
      </mesh>
      <group position={[0, 0.1, 0]}>{children}</group>
    </group>
  )
}

export function Nigiri({ fish = '#e37b63' }) {
  return (
    <group>
      <mesh position={[0, 0.08, 0]} scale={[0.28, 0.14, 0.46]}>
        <sphereGeometry args={[1, 16, 12]} />
        <Clay color="#f7f1e6" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.07, 0]}>
        <boxGeometry args={[0.2, 0.055, 0.07]} />
        <Clay color="#2f3c31" roughness={0.96} />
      </mesh>
      <mesh position={[0, 0.175, 0]} rotation={[0.2, 0, 0]} scale={[0.38, 0.09, 0.62]}>
        <sphereGeometry args={[1, 18, 12]} />
        <Clay color={fish} roughness={0.48} />
      </mesh>
    </group>
  )
}

export function Gunkan() {
  const roe = [
    [0.07, 0.32, 0.07],
    [-0.08, 0.31, 0.05],
    [0.02, 0.33, -0.09],
    [-0.05, 0.34, -0.03],
    [0.1, 0.31, -0.03],
    [-0.11, 0.3, -0.07],
    [0, 0.38, 0],
  ]

  return (
    <group>
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 0.18, 14]} />
        <Clay color="#f7f1e6" />
      </mesh>
      <mesh position={[0, 0.18, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.24, 16, 1, true]} />
        <Clay color="#2f3c31" roughness={0.96} />
      </mesh>
      {roe.map((position, index) => (
        <mesh key={index} position={position} scale={index === 6 ? 0.08 : 0.07}>
          <sphereGeometry args={[1, 8, 8]} />
          <Clay color="#d45b45" roughness={0.4} />
        </mesh>
      ))}
    </group>
  )
}

export function Temaki() {
  return (
    <group rotation={[0.2, 0.45, 0.4]} position={[0, 0.2, 0]}>
      <mesh rotation={[0.15, 0, 0]}>
        <coneGeometry args={[0.3, 0.82, 8]} />
        <Clay color="#2a362c" roughness={0.96} />
      </mesh>
      <mesh position={[0, 0.08, 0]} rotation={[0.15, 0, 0]}>
        <coneGeometry args={[0.18, 0.52, 8]} />
        <Clay color="#f7f1e6" />
      </mesh>
      <mesh position={[0.02, 0.26, 0.04]} scale={[0.15, 0.09, 0.15]}>
        <sphereGeometry args={[1, 10, 8]} />
        <Clay color="#e37b63" roughness={0.55} />
      </mesh>
    </group>
  )
}

export function Tamago() {
  return (
    <group>
      <mesh scale={[0.28, 0.14, 0.44]} position={[0, 0.08, 0]}>
        <sphereGeometry args={[1, 14, 10]} />
        <Clay color="#f7f1e6" />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.38, 0.14, 0.5]} />
        <Clay color="#e2b63d" roughness={0.68} />
      </mesh>
    </group>
  )
}

export function WasabiMound() {
  return (
    <group>
      <mesh position={[0, 0.12, 0]} scale={[0.26, 0.16, 0.24]}>
        <sphereGeometry args={[1, 12, 10]} />
        <Clay color="#7ea24c" roughness={0.98} />
      </mesh>
      <mesh position={[0.1, 0.08, 0.04]} scale={[0.14, 0.09, 0.12]}>
        <sphereGeometry args={[1, 10, 8]} />
        <Clay color="#6b8d3e" />
      </mesh>
      <mesh position={[-0.09, 0.07, -0.05]} scale={[0.11, 0.07, 0.11]}>
        <sphereGeometry args={[1, 10, 8]} />
        <Clay color="#97b85c" />
      </mesh>
    </group>
  )
}

export function ProjectSushi({ cut }) {
  if (cut === 'gunkan') return <Gunkan />
  if (cut === 'temaki') return <Temaki />
  if (cut === 'nigiri') return <Nigiri fish="#e37b63" />
  return <Nigiri />
}

export function StackSushi({ id }) {
  if (id === 'maguro') return <Nigiri fish="#c24b48" />
  if (id === 'salmon') return <Nigiri fish="#e37b63" />
  if (id === 'tamago') return <Tamago />
  return <WasabiMound />
}
