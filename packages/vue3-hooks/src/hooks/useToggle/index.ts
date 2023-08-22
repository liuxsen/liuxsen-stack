import type { Ref, UnwrapRef } from 'vue'
import { computed, ref } from 'vue'

export interface TActions<T> {
  toggle: () => void
  setDefaultValue: () => void
  setRevserseValue: () => void
  set: (v: T) => void
}

function useToggle<D = boolean>(): [Ref<D>, TActions<D>]
function useToggle<D = boolean>(defaultValue: D): [Ref<D>, TActions<D>]
function useToggle<D, R>(defaultValue: D, reverseValue: R): [Ref<D | R>, TActions<D>]

/**
 * 两个值之间的toggle
 * @param defaultValue 默认值 默认是 false
 * @param reverseValue 取反值 默认是 true
 * @returns
 */
function useToggle<D, R>(
  defaultValue: D = (false) as unknown as D,
  reverseValue?: R,
) {
  const state = ref<D | R>(defaultValue)
  const computedReverse = computed(() => {
    if (reverseValue === undefined) {
      return !defaultValue
    }
    return reverseValue
  })

  const toggle = () => {
    state.value = state.value === defaultValue ? computedReverse.value as UnwrapRef<R> : defaultValue as UnwrapRef<D>
  }
  const setDefaultValue = () => {
    state.value = defaultValue as UnwrapRef<D>
  }
  const setRevserseValue = () => {
    state.value = computedReverse.value as UnwrapRef<R>
  }
  const set = (v: D | R) => {
    state.value = v as UnwrapRef<D> | UnwrapRef<R>
  }
  return [
    state,
    {
      toggle,
      setDefaultValue,
      setRevserseValue,
      set,
    },
  ] as const
}

export default useToggle
