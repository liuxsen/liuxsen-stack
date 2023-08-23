import type { Ref } from 'vue'
import { readonly, ref, unref } from 'vue'

type UseSetStateType<T> = T | (() => T) | Ref<T> | (() => Ref<T>)

const useSetState = <T extends Record<string, any>>(
  initialState: UseSetStateType<T>,
) => {
  const getInitialState = () => unref(initialState)
  const state = ref<UseSetStateType<T>>(getInitialState())

  return [readonly(state)] as const
}

export default useSetState
