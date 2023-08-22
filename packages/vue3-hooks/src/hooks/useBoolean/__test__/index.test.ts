import { describe, expect, it } from 'vitest'
import useBoolean from '..'

describe('useBoolean', () => {
  it('show be defined', () => {
    expect(useBoolean).toBeDefined()
  })

  it('show default to be false', async () => {
    const [state] = useBoolean()
    expect(state.value).toBe(false)
  })

  it('should work', async () => {
    const [state, { toggle, setTrue, setFalse, set }] = useBoolean(true)
    expect(state.value).toBe(true)

    toggle()
    expect(state.value).toBeFalsy()

    set(true)
    expect(state.value).toBeTruthy()

    setFalse()
    expect(state.value).toBeFalsy()

    setTrue()
    expect(state.value).toBeTruthy()
  })
})
