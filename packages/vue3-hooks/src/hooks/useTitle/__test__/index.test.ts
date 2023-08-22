import { describe, expect, it } from 'vitest'

import { ref } from 'vue'
import useTitle from '..'
import renderHook from '../../../test-utils/renderHook'

describe('useTitle', () => {
  it('should be defined', async () => {
    expect(useTitle).toBeDefined()
  })
  it('should update document title', () => {
    const titleRef = ref('current title')
    renderHook(() => useTitle(titleRef))
    expect(document.title).toBe('current title')
    titleRef.value = 'other page title'
    renderHook(() => useTitle(titleRef))
    expect(document.title).toBe('other page title')
  })

  it('should restore document title', () => {
    document.title = 'old title'
    const defaultTitle = ref('default Title')
    const [_, app] = renderHook(() => useTitle(defaultTitle, {
      restoreOnUnmount: true,
    }))
    expect(document.title).toBe(defaultTitle.value)
    app.unmount()
    expect(document.title).toBe('old title')
  })

  it('should not restore document title', () => {
    document.title = 'old title'
    const defaultTitle = ref('default Title')
    const [_, app] = renderHook(() => useTitle(defaultTitle, {
      restoreOnUnmount: false,
    }))
    expect(document.title).toBe(defaultTitle.value)
    app.unmount()
    expect(document.title).toBe(defaultTitle.value)
  })
})
