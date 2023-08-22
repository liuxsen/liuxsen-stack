import { describe, expect, it } from 'vitest'
import useToggle from '..'
import renderHook from '../../../test-utils/renderHook'

describe('useToggle', () => {
  it('should be defined', () => {
    expect(useToggle).toBeDefined()
  })
  it('state should be true', () => {
    const [state] = useToggle()
    expect(state.value).toBeFalsy()
  })

  it('test default', async () => {
    const [hook] = renderHook(() => useToggle())
    expect(hook[0].value).toBeFalsy()
    hook[1].toggle()
    expect(hook[0].value).toBeTruthy()
    hook[1].setDefaultValue()
    expect(hook[0].value).toBeFalsy()
    hook[1].setRevserseValue()
    expect(hook[0].value).toBeTruthy()
  })

  it('test default value', async () => {
    const [hook] = renderHook(() => useToggle(true))
    expect(hook[0].value).toBeTruthy()
    hook[1].toggle()
    expect(hook[0].value).toBeFalsy()
    hook[1].setDefaultValue()
    expect(hook[0].value).toBeTruthy()
    hook[1].setRevserseValue()
    expect(hook[0].value).toBeFalsy()
  })

  it('test optional', async () => {
    const [hook] = renderHook(() => useToggle('Hello', 'hello'))
    expect(hook[0].value).toBe('Hello')
    hook[1].toggle()
    expect(hook[0].value).toBe('hello')
    hook[1].setDefaultValue()
    expect(hook[0].value).toBe('Hello')
    hook[1].setRevserseValue()
    expect(hook[0].value).toBe('hello')
    hook[1].set('aa')
    expect(hook[0].value).toBe('aa')
  })
})
