import { Billboard, ContactShadows, Float, Text } from '@react-three/drei'
import { EXPERIENCES, PROJECTS, SOCIALS, TECH_STACKS, TRAINING } from '../data/content'
import { Clay, ClayPlate, Hotspot, ProjectSushi, StackSushi } from './ClaySushi'
import {
  CONTACT,
  experiencePosition,
  KAITEN,
  KITCHEN,
  PORTAL,
  RECIPE,
  projectPosition,
  stackPosition,
} from './zones'

function MaybeFloat({ reducedMotion, children }) {
  if (reducedMotion) return children
  return (
    <Float speed={0.8} rotationIntensity={0.03} floatIntensity={0.07} floatingRange={[-0.02, 0.04]}>
      {children}
    </Float>
  )
}

function ZoneTitle({ position, children }) {
  return (
    <Billboard follow position={position}>
      <Text
        fontSize={0.34}
        color="#3f372f"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.014}
        outlineColor="#f7efe4"
      >
        {children}
      </Text>
    </Billboard>
  )
}

function Ground() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[28, 64]} />
        <Clay color="#cbb59a" roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.012, 0]}>
        <ringGeometry args={[26, 28, 64]} />
        <Clay color="#b89d82" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.018, KAITEN.z]}>
        <circleGeometry args={[7.1, 48]} />
        <Clay color="#e2d0bb" roughness={0.98} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[KITCHEN.x, 0.02, KITCHEN.z]}>
        <circleGeometry args={[4.2, 36]} />
        <Clay color="#dcc9b3" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[RECIPE.x, 0.02, RECIPE.z]}>
        <circleGeometry args={[4.4, 36]} />
        <Clay color="#dcc9b3" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[CONTACT.x, 0.02, CONTACT.z]}>
        <circleGeometry args={[3.4, 36]} />
        <Clay color="#dcc9b3" />
      </mesh>
    </group>
  )
}

function PortalArch({ onEnter }) {
  return (
    <group position={[PORTAL.x, 0, PORTAL.z]}>
      <mesh position={[-1.7, 1.1, 0]}>
        <cylinderGeometry args={[0.28, 0.32, 2.2, 12]} />
        <Clay color="#c37d64" roughness={0.92} />
      </mesh>
      <mesh position={[1.7, 1.1, 0]}>
        <cylinderGeometry args={[0.28, 0.32, 2.2, 12]} />
        <Clay color="#c37d64" roughness={0.92} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 2.18, 0]}>
        <torusGeometry args={[1.7, 0.28, 10, 22, Math.PI]} />
        <Clay color="#d08b70" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.1, -0.35]}>
        <boxGeometry args={[2.4, 2.1, 0.08]} />
        <meshStandardMaterial color="#f4dcc4" transparent opacity={0.4} roughness={0.45} />
      </mesh>
      <ZoneTitle position={[0, 3.05, 0.12]}>sushi universe</ZoneTitle>
      <Hotspot radius={1.5} height={2.4} onSelect={onEnter} />
    </group>
  )
}

function KaitenBelt() {
  return (
    <group position={[0, 0, KAITEN.z]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.18, 0]}>
        <torusGeometry args={[KAITEN.radius, 0.4, 14, 72]} />
        <Clay color="#b08968" roughness={0.86} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.26, 0]}>
        <torusGeometry args={[KAITEN.radius, 0.16, 10, 64]} />
        <Clay color="#9a7354" roughness={0.8} />
      </mesh>
    </group>
  )
}

function ProjectStop({ project, onSelect, reducedMotion }) {
  const position = projectPosition(project.id)

  return (
    <group position={position}>
      <MaybeFloat reducedMotion={reducedMotion}>
        <ClayPlate radius={0.62}>
          <group scale={1.15}>
            <ProjectSushi cut={project.cut} />
          </group>
        </ClayPlate>
      </MaybeFloat>
      <Billboard follow position={[0, 1.28, 0]}>
        <Text fontSize={0.26} color="#3f372f" anchorX="center" outlineWidth={0.01} outlineColor="#f7efe4">
          {project.title}
        </Text>
      </Billboard>
      <Billboard follow position={[0, 1.02, 0]}>
        <Text fontSize={0.13} color="#6d6258" anchorX="center" maxWidth={2.6} textAlign="center">
          {project.role}
        </Text>
      </Billboard>
      <Hotspot radius={0.78} height={1.2} onSelect={() => onSelect({ type: 'project', id: project.id })} />
    </group>
  )
}

function KitchenZone({ onSelect, reducedMotion }) {
  return (
    <group position={[KITCHEN.x, 0, KITCHEN.z]}>
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[7.2, 0.8, 2.2]} />
        <Clay color="#a57b58" roughness={0.88} />
      </mesh>
      <mesh position={[0, 0.84, 0]}>
        <boxGeometry args={[7.0, 0.1, 2.05]} />
        <Clay color="#c9ae94" />
      </mesh>
      <mesh position={[0, 1.5, -0.95]}>
        <boxGeometry args={[7.2, 1.35, 0.16]} />
        <Clay color="#d2b093" />
      </mesh>
      <ZoneTitle position={[0, 2.55, -0.7]}>kitchen</ZoneTitle>
      {TECH_STACKS.map((stack, index) => {
        const localX = stackPosition(index)[0] - KITCHEN.x
        const localZ = stackPosition(index)[2] - KITCHEN.z
        return (
          <group key={stack.id} position={[localX, 0.95, localZ]}>
            <MaybeFloat reducedMotion={reducedMotion}>
              <ClayPlate radius={0.5} color="#efe6d8">
                <StackSushi id={stack.id} />
              </ClayPlate>
            </MaybeFloat>
            <Hotspot radius={0.62} height={1.05} onSelect={() => onSelect({ type: 'stack', id: stack.id })} />
          </group>
        )
      })}
      {TECH_STACKS.map((stack, index) => {
        const localX = stackPosition(index)[0] - KITCHEN.x
        return (
          <Text
            key={`${stack.id}-label`}
            position={[localX, 1.52, -0.84]}
            fontSize={0.17}
            color="#3f372f"
            anchorX="center"
            outlineWidth={0.008}
            outlineColor="#f7efe4"
          >
            {stack.name}
          </Text>
        )
      })}
    </group>
  )
}

function RecipeTablet({ experience, index, onSelect }) {
  return (
    <group position={experiencePosition(index)} rotation={[0, index % 2 === 0 ? -0.08 : 0.08, 0]}>
      <mesh>
        <boxGeometry args={[1.22, 1.42, 0.09]} />
        <Clay color="#f4eadc" roughness={0.84} />
      </mesh>
      <mesh position={[0, 0.48, 0.055]}>
        <boxGeometry args={[0.34, 0.2, 0.03]} />
        <Clay color="#c24b48" />
      </mesh>
      <Text position={[0, 0.48, 0.09]} fontSize={0.11} color="#f7efe4" anchorX="center">
        {experience.course}
      </Text>
      <Text
        position={[0, 0.02, 0.07]}
        fontSize={0.12}
        color="#3f372f"
        anchorX="center"
        maxWidth={1.05}
        textAlign="center"
        lineHeight={1.2}
      >
        {experience.org}
      </Text>
      <Hotspot radius={0.78} height={1.4} onSelect={() => onSelect({ type: 'experience', index })} />
    </group>
  )
}

function RecipeZone({ onSelect }) {
  return (
    <group>
      <mesh position={[RECIPE.x, 0.36, RECIPE.z]}>
        <boxGeometry args={[5.4, 0.72, 3.8]} />
        <Clay color="#a57b58" />
      </mesh>
      <mesh position={[RECIPE.x, 0.76, RECIPE.z]}>
        <boxGeometry args={[5.15, 0.08, 3.55]} />
        <Clay color="#e8d5bf" />
      </mesh>
      <ZoneTitle position={[RECIPE.x, 2.85, RECIPE.z + 0.2]}>recipe</ZoneTitle>
      {EXPERIENCES.map((experience, index) => (
        <RecipeTablet key={experience.course} experience={experience} index={index} onSelect={onSelect} />
      ))}
      {TRAINING.map((line, index) => (
        <group key={line} position={[RECIPE.x - 1.4 + index * 1.4, 1.02, RECIPE.z + 1.45]}>
          <mesh>
            <sphereGeometry args={[0.26, 12, 10]} />
            <Clay color={['#e37b63', '#e2b63d', '#7ea24c'][index] ?? '#e37b63'} />
          </mesh>
          <Hotspot radius={0.48} height={0.7} onSelect={() => onSelect({ type: 'training', index })} />
        </group>
      ))}
    </group>
  )
}

const CONTACT_TOKENS = [
  { label: 'Email', href: `mailto:${SOCIALS.email}`, x: -0.95, z: 0.55 },
  { label: 'LinkedIn', href: SOCIALS.linkedin, x: 0.95, z: 0.55 },
  { label: 'GitHub', href: SOCIALS.github, x: -0.95, z: -0.55 },
  { label: 'Medium', href: SOCIALS.medium, x: 0.95, z: -0.55 },
]

function ContactZone({ onSelect }) {
  return (
    <group position={[CONTACT.x, 0, CONTACT.z]}>
      <mesh position={[0, 0.36, 0]}>
        <cylinderGeometry args={[1.65, 1.8, 0.72, 24]} />
        <Clay color="#a57b58" />
      </mesh>
      <mesh position={[0, 0.76, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.08, 24]} />
        <Clay color="#f4eadc" />
      </mesh>
      <mesh position={[0, 1.0, 0]} rotation={[0.08, 0.18, 0.05]}>
        <boxGeometry args={[0.62, 0.42, 0.07]} />
        <Clay color="#fbf6ef" />
      </mesh>
      <ZoneTitle position={[0, 2.35, 0]}>hello</ZoneTitle>
      {CONTACT_TOKENS.map((token) => (
        <group key={token.label} position={[token.x, 1.02, token.z]}>
          <mesh>
            <sphereGeometry args={[0.24, 14, 12]} />
            <Clay color="#c37d64" />
          </mesh>
          <Billboard follow position={[0, 0.46, 0]}>
            <Text fontSize={0.13} color="#3f372f" anchorX="center" outlineWidth={0.006} outlineColor="#f7efe4">
              {token.label}
            </Text>
          </Billboard>
          <Hotspot
            radius={0.42}
            height={0.8}
            onSelect={() => onSelect({ type: 'social', label: token.label, href: token.href })}
          />
        </group>
      ))}
    </group>
  )
}

export default function WorldScene({ reducedMotion, onSelect, onEnter }) {
  return (
    <>
      <color attach="background" args={['#ecd7c0']} />
      <fog attach="fog" args={['#ecd7c0', 26, 58]} />
      <ambientLight intensity={0.58} />
      <hemisphereLight color="#fff4e6" groundColor="#b89d82" intensity={0.95} />
      <directionalLight position={[8, 14, 9]} intensity={1.45} color="#ffe2c2" />
      <directionalLight position={[-10, 5, -6]} intensity={0.32} color="#c5d2ee" />
      <ContactShadows position={[0, 0.02, 0]} opacity={0.42} scale={54} blur={2.1} far={10} />

      <Ground />
      <PortalArch onEnter={onEnter} />
      <KaitenBelt />
      {PROJECTS.map((project) => (
        <ProjectStop key={project.id} project={project} onSelect={onSelect} reducedMotion={reducedMotion} />
      ))}
      <KitchenZone onSelect={onSelect} reducedMotion={reducedMotion} />
      <RecipeZone onSelect={onSelect} />
      <ContactZone onSelect={onSelect} />
    </>
  )
}
