import { Float, Text, ContactShadows } from '@react-three/drei'
import { EXPERIENCES, PROJECTS, SOCIALS, TECH_STACKS, TRAINING } from '../data/content'
import {
  ClayPlate,
  Clay,
  Hotspot,
  ProjectSushi,
  StackSushi,
} from './ClaySushi'
import { experiencePosition, KAITEN, projectPosition, stackPosition } from './zones'

const LABEL = {
  fontSize: 0.26,
  color: '#3f372f',
  anchorX: 'center',
  anchorY: 'middle',
  outlineWidth: 0.012,
  outlineColor: '#f7efe4',
}

function MaybeFloat({ reducedMotion, children }) {
  if (reducedMotion) return children
  return (
    <Float speed={1.05} rotationIntensity={0.05} floatIntensity={0.12} floatingRange={[-0.04, 0.06]}>
      {children}
    </Float>
  )
}

function Ground() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[24, 64]} />
        <Clay color="#d9c4ae" roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[22.2, 24, 64]} />
        <Clay color="#c9b09a" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, 1.1]}>
        <circleGeometry args={[7.4, 48]} />
        <Clay color="#e4d2bf" roughness={0.98} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-12.1, 0.02, -3]}>
        <circleGeometry args={[4.4, 36]} />
        <Clay color="#e0cdb8" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[11.7, 0.02, -2.7]}>
        <circleGeometry args={[4.6, 36]} />
        <Clay color="#e0cdb8" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -13.4]}>
        <circleGeometry args={[3.6, 36]} />
        <Clay color="#e0cdb8" />
      </mesh>
    </group>
  )
}

function PortalArch({ onEnter }) {
  return (
    <group position={[0, 0, 15.2]}>
      <mesh position={[-1.85, 1.15, 0]}>
        <cylinderGeometry args={[0.3, 0.34, 2.3, 12]} />
        <Clay color="#c98972" roughness={0.92} />
      </mesh>
      <mesh position={[1.85, 1.15, 0]}>
        <cylinderGeometry args={[0.3, 0.34, 2.3, 12]} />
        <Clay color="#c98972" roughness={0.92} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 2.28, 0]}>
        <torusGeometry args={[1.85, 0.3, 10, 22, Math.PI]} />
        <Clay color="#d59b82" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.15, -0.4]}>
        <boxGeometry args={[2.6, 2.2, 0.08]} />
        <meshStandardMaterial color="#f7e7d4" transparent opacity={0.35} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.08, 1.4]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.1, 24]} />
        <Clay color="#cbb59c" />
      </mesh>
      <Text position={[0, 3.05, 0.1]} fontSize={0.32} color="#3f372f" anchorX="center">
        sushi universe
      </Text>
      <Text position={[0, 2.68, 0.1]} fontSize={0.18} color="#7a6e62" anchorX="center">
        product engineer
      </Text>
      <Hotspot radius={1.8} onSelect={onEnter} />
    </group>
  )
}

function KaitenBelt() {
  return (
    <group position={[0, 0, KAITEN.z]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.2, 0]}>
        <torusGeometry args={[KAITEN.radius, 0.46, 14, 72]} />
        <Clay color="#c4a484" roughness={0.86} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.28, 0]}>
        <torusGeometry args={[KAITEN.radius, 0.18, 10, 64]} />
        <Clay color="#b08968" roughness={0.8} />
      </mesh>
    </group>
  )
}

function ProjectStop({ project, selected, onSelect, reducedMotion }) {
  const position = projectPosition(project.id)

  return (
    <group position={position}>
      <MaybeFloat reducedMotion={reducedMotion}>
        <ClayPlate>
          <ProjectSushi cut={project.cut} />
        </ClayPlate>
      </MaybeFloat>
      <Text {...LABEL} position={[0, 1.32, 0]} fontSize={0.28}>
        {project.title}
      </Text>
      <Text position={[0, 1.04, 0]} fontSize={0.14} color="#7a6e62" anchorX="center" maxWidth={2.4} textAlign="center">
        {project.role}
      </Text>
      <Hotspot radius={1.05} active={selected} onSelect={() => onSelect({ type: 'project', id: project.id })} />
    </group>
  )
}

function KitchenZone({ selection, onSelect, reducedMotion }) {
  return (
    <group position={[-12.1, 0, -3.05]}>
      <mesh position={[0, 0.42, 0]}>
        <boxGeometry args={[6.2, 0.84, 2.3]} />
        <Clay color="#b08968" roughness={0.88} />
      </mesh>
      <mesh position={[0, 0.88, 0]}>
        <boxGeometry args={[6.05, 0.1, 2.15]} />
        <Clay color="#c9ae94" />
      </mesh>
      <mesh position={[0, 1.55, -0.95]}>
        <boxGeometry args={[6.2, 1.4, 0.18]} />
        <Clay color="#d7b39a" />
      </mesh>
      <Text position={[0, 2.45, -0.8]} fontSize={0.28} color="#3f372f" anchorX="center">
        kitchen · tech stack
      </Text>
      {TECH_STACKS.map((stack, index) => {
        const local = [stackPosition(index)[0] + 12.1, 0, stackPosition(index)[2] + 3.05]
        const selected = selection?.type === 'stack' && selection.id === stack.id
        return (
          <group key={stack.id} position={[local[0], 0.95, local[2]]}>
            <MaybeFloat reducedMotion={reducedMotion}>
              <ClayPlate color="#efe6d8">
                <StackSushi id={stack.id} />
              </ClayPlate>
            </MaybeFloat>
            <Text {...LABEL} position={[0, 1.18, 0]} fontSize={0.22}>
              {stack.name}
            </Text>
            <Hotspot
              radius={0.92}
              active={selected}
              onSelect={() => onSelect({ type: 'stack', id: stack.id })}
            />
          </group>
        )
      })}
    </group>
  )
}

function RecipeTablet({ experience, index, selected, onSelect }) {
  return (
    <group
      position={experiencePosition(index)}
      rotation={[0, index % 2 === 0 ? -0.12 : 0.1, 0]}
    >
      <mesh>
        <boxGeometry args={[1.18, 1.46, 0.1]} />
        <Clay color={selected ? '#f7efe0' : '#efe4d4'} roughness={0.84} />
      </mesh>
      <mesh position={[0, 0.48, 0.06]}>
        <boxGeometry args={[0.36, 0.22, 0.04]} />
        <Clay color="#c45c55" />
      </mesh>
      <Text position={[0, 0.48, 0.1]} fontSize={0.12} color="#f7efe4" anchorX="center">
        {experience.course}
      </Text>
      <Text
        position={[0, 0.08, 0.08]}
        fontSize={0.13}
        color="#3f372f"
        anchorX="center"
        maxWidth={1}
        textAlign="center"
        lineHeight={1.15}
      >
        {experience.org}
      </Text>
      <Hotspot radius={0.95} active={selected} onSelect={() => onSelect({ type: 'experience', index })} />
    </group>
  )
}

function RecipeZone({ selection, onSelect }) {
  return (
    <group>
      <mesh position={[11.7, 0.38, -2.75]}>
        <boxGeometry args={[4.8, 0.76, 3.6]} />
        <Clay color="#b08968" />
      </mesh>
      <mesh position={[11.7, 0.8, -2.75]}>
        <boxGeometry args={[4.55, 0.08, 3.35]} />
        <Clay color="#e8d5bf" />
      </mesh>
      <Text position={[11.7, 2.55, -1.4]} fontSize={0.28} color="#3f372f" anchorX="center">
        chef recipe
      </Text>
      {EXPERIENCES.map((experience, index) => (
        <RecipeTablet
          key={experience.course}
          experience={experience}
          index={index}
          selected={selection?.type === 'experience' && selection.index === index}
          onSelect={onSelect}
        />
      ))}
      <Text position={[11.7, 1.35, -4.35]} fontSize={0.16} color="#7a6e62" anchorX="center">
        training
      </Text>
      {TRAINING.map((line, index) => (
        <group key={line} position={[10.4 + index * 1.3, 1.12, -4.35]}>
          <mesh>
            <sphereGeometry args={[0.28, 12, 10]} />
            <Clay color={['#e88972', '#e6c056', '#8faf5a'][index] ?? '#e88972'} />
          </mesh>
          <Hotspot radius={0.55} onSelect={() => onSelect({ type: 'training', index })} />
        </group>
      ))}
    </group>
  )
}

const CONTACT_TOKENS = [
  { label: 'Email', href: `mailto:${SOCIALS.email}`, position: [-1.15, 1.05, -13.2] },
  { label: 'LinkedIn', href: SOCIALS.linkedin, position: [1.15, 1.05, -13.2] },
  { label: 'GitHub', href: SOCIALS.github, position: [-0.7, 1.05, -14.35] },
  { label: 'Medium', href: SOCIALS.medium, position: [0.7, 1.05, -14.35] },
]

function ContactZone({ onSelect }) {
  return (
    <group>
      <mesh position={[0, 0.38, -13.7]}>
        <cylinderGeometry args={[1.7, 1.85, 0.76, 24]} />
        <Clay color="#b08968" />
      </mesh>
      <mesh position={[0, 0.8, -13.7]}>
        <cylinderGeometry args={[1.55, 1.55, 0.08, 24]} />
        <Clay color="#efe4d4" />
      </mesh>
      <mesh position={[0, 1.05, -13.7]} rotation={[0.1, 0.2, 0.08]}>
        <boxGeometry args={[0.7, 0.48, 0.08]} />
        <Clay color="#f6efe4" />
      </mesh>
      <Text position={[0, 2.15, -13.2]} fontSize={0.26} color="#3f372f" anchorX="center">
        say hello
      </Text>
      {CONTACT_TOKENS.map((token) => (
        <group key={token.label} position={token.position}>
          <mesh>
            <sphereGeometry args={[0.28, 14, 12]} />
            <Clay color="#d59b82" />
          </mesh>
          <Text position={[0, 0.48, 0]} fontSize={0.14} color="#3f372f" anchorX="center">
            {token.label}
          </Text>
          <Hotspot
            radius={0.5}
            onSelect={() => onSelect({ type: 'social', label: token.label, href: token.href })}
          />
        </group>
      ))}
    </group>
  )
}

export default function WorldScene({
  reducedMotion,
  selection,
  onSelect,
  onEnter,
}) {
  return (
    <>
      <color attach="background" args={['#f3e4d4']} />
      <fog attach="fog" args={['#f3e4d4', 18, 46]} />
      <ambientLight intensity={0.82} />
      <hemisphereLight color="#fff6ea" groundColor="#c9b49a" intensity={1.05} />
      <directionalLight position={[7, 13, 8]} intensity={1.2} color="#ffe8c8" />
      <directionalLight position={[-9, 5, -5]} intensity={0.28} color="#c9d4ee" />
      <ContactShadows position={[0, 0.02, 0]} opacity={0.38} scale={48} blur={2.3} far={9} />

      <Ground />
      <PortalArch onEnter={onEnter} />
      <KaitenBelt />
      {PROJECTS.map((project) => (
        <ProjectStop
          key={project.id}
          project={project}
          selected={selection?.type === 'project' && selection.id === project.id}
          onSelect={onSelect}
          reducedMotion={reducedMotion}
        />
      ))}
      <KitchenZone selection={selection} onSelect={onSelect} reducedMotion={reducedMotion} />
      <RecipeZone selection={selection} onSelect={onSelect} />
      <ContactZone onSelect={onSelect} />
    </>
  )
}
