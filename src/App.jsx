import { Component, useCallback, useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'
import SushiUniverse from './world/SushiUniverse'
import Hud from './ui/Hud'
import WebGLFallback from './ui/WebGLFallback'

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (this.state.failed) return <WebGLFallback />
    return this.props.children
  }
}

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export default function App() {
  const reducedMotion = usePrefersReducedMotion()
  const [entered, setEntered] = useState(false)
  const [zone, setZone] = useState('portal')
  const [selection, setSelection] = useState(null)
  const [webgl, setWebgl] = useState(true)

  useEffect(() => {
    setWebgl(hasWebGL())
  }, [])

  const enter = useCallback(() => {
    setEntered(true)
    setZone('plates')
    setSelection(null)
  }, [])

  const goToZone = useCallback((next) => {
    setEntered(true)
    setZone(next)
    setSelection(null)
  }, [])

  const onSelect = useCallback((next) => {
    if (!next) {
      setSelection(null)
      return
    }
    setEntered(true)
    setSelection(next)
    if (next.type === 'project') setZone('plates')
    if (next.type === 'stack') setZone('kitchen')
    if (next.type === 'experience' || next.type === 'training') setZone('recipe')
    if (next.type === 'social') setZone('contact')
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setSelection(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!webgl) return <WebGLFallback />

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-[#ecd7c0]">
      <h1 className="sr-only">Zeliha Ilgın Güven — Product Engineer sushi universe</h1>
      <CanvasErrorBoundary>
        <SushiUniverse
          zone={zone}
          selection={selection}
          reducedMotion={reducedMotion}
          entered={entered}
          onSelect={onSelect}
          onEnter={enter}
        />
      </CanvasErrorBoundary>
      <Hud
        entered={entered}
        zone={zone}
        selection={selection}
        reducedMotion={reducedMotion}
        onEnter={enter}
        onZone={goToZone}
        onClose={() => setSelection(null)}
      />
    </div>
  )
}
