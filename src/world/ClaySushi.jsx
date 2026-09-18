import { useState } from 'react'
import { useCursor } from '@react-three/drei'

export function Clay({ color, roughness = 0.9, metalness = 0.02 }) {
  return <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
}

export function Hotspot({ radius = 1.05, active, onSelect }) {
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  return (
    <mesh
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
      <sphereGeometry args={[radius, 16, 16]} />
      <meshBasicMaterial
        color="#fff7ee"
        transparent
        opacity={hovered || active ? 0.16 : 0}
        depthWrite={false}
      />
    </mesh>
  )
}

export function ClayPlate({ color = '#efe4d4', children, ...props }) {
  return (
    <group {...props}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.74, 0.8, 0.08, 28]} />
        <Clay color={color} roughness={0.78} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.085, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.03, 24]} />
        <Clay color="#f8f1e6" roughness={0.62} />
      </mesh>
      <group position={[0, 0.12, 0]}>{children}</group>
    </group>
  )
}

export function Nigiri({ fish = '#e88972' }) {
  return (
    <group>
      <mesh scale={[0.3, 0.15, 0.48]} position={[0, 0.1, 0]}>
        <sphereGeometry args={[1, 14, 10]} />
        <Clay color="#f6efe4" roughness={0.95} />
      </mesh>
      <mesh scale={[0.4, 0.11, 0.66]} position={[0, 0.22, 0]} rotation={[0.12, 0, 0]}>
        <sphereGeometry args={[1, 16, 12]} />
        <Clay color={fish} roughness={0.62} />
      </mesh>
    </group>
  )
}

export function Gunkan() {
  const roe = [
    [0.08, 0.34, 0.08],
    [-0.09, 0.33, 0.06],
    [0.02, 0.35, -0.1],
    [-0.05, 0.36, -0.04],
    [0.11, 0.33, -0.04],
    [-0.12, 0.32, -0.08],
    [0, 0.4, 0],
  ]

  return (
    <group>
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.22, 0.24, 0.22, 14]} />
        <Clay color="#f6efe4" />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.28, 16, 1, true]} />
        <Clay color="#3d4a3c" roughness={0.96} />
      </mesh>
      {roe.map((position, index) => (
        <mesh key={index} position={position} scale={index === 6 ? 0.09 : 0.08}>
          <sphereGeometry args={[1, 8, 8]} />
          <Clay color="#e07058" roughness={0.45} />
        </mesh>
      ))}
    </group>
  )
}

export function Temaki() {
  return (
    <group rotation={[0.15, 0.4, 0.35]} position={[0, 0.22, 0]}>
      <mesh rotation={[0.2, 0, 0]}>
        <coneGeometry args={[0.34, 0.92, 8]} />
        <Clay color="#354338" roughness={0.96} />
      </mesh>
      <mesh position={[0, 0.08, 0]} rotation={[0.2, 0, 0]}>
        <coneGeometry args={[0.22, 0.62, 8]} />
        <Clay color="#f6efe4" />
      </mesh>
      <mesh position={[0.02, 0.28, 0.04]} scale={[0.16, 0.1, 0.16]}>
        <sphereGeometry args={[1, 10, 8]} />
        <Clay color="#e07a5f" roughness={0.6} />
      </mesh>
    </group>
  )
}

export function Tamago() {
  return (
    <group>
      <mesh scale={[0.3, 0.15, 0.48]} position={[0, 0.1, 0]}>
        <sphereGeometry args={[1, 14, 10]} />
        <Clay color="#f6efe4" />
      </mesh>
      <mesh position={[0, 0.24, 0]}>
        <boxGeometry args={[0.42, 0.16, 0.58]} />
        <Clay color="#e6c056" roughness={0.7} />
      </mesh>
    </group>
  )
}

export function WasabiMound() {
  return (
    <group>
      <mesh position={[0, 0.14, 0]} scale={[0.28, 0.18, 0.26]}>
        <sphereGeometry args={[1, 12, 10]} />
        <Clay color="#8faf5a" roughness={0.98} />
      </mesh>
      <mesh position={[0.12, 0.1, 0.04]} scale={[0.16, 0.1, 0.14]}>
        <sphereGeometry args={[1, 10, 8]} />
        <Clay color="#7d9b4e" />
      </mesh>
      <mesh position={[-0.1, 0.08, -0.06]} scale={[0.12, 0.08, 0.12]}>
        <sphereGeometry args={[1, 10, 8]} />
        <Clay color="#a3c56a" />
      </mesh>
    </group>
  )
}

export function ProjectSushi({ cut }) {
  if (cut === 'gunkan') return <Gunkan />
  if (cut === 'temaki') return <Temaki />
  if (cut === 'nigiri') return <Nigiri fish="#e88972" />
  return <Nigiri />
}

export function StackSushi({ id }) {
  if (id === 'maguro') return <Nigiri fish="#c45c55" />
  if (id === 'salmon') return <Nigiri fish="#ee8b74" />
  if (id === 'tamago') return <Tamago />
  return <WasabiMound />
}
