import type { Ref } from 'vue'
import useToggle from '../useToggle'

export interface UseBooleanActions {
  set: (v: boolean) => void
  toggle: () => void
  setFalse: () => void
  setTrue: () => void
}

export type UseBooleanResult = [Readonly<Ref<boolean>>, UseBooleanActions]

const useBoolean = (defaultValue: boolean = false): UseBooleanResult => {
  const [state, { toggle, set: setValue }] = useToggle(defaultValue)
  const set = (v: boolean) => {
    setValue(v)
  }
  const setFalse = () => {
    set(false)
  }
  const setTrue = () => {
    set(true)
  }
  return [
    state,
    {
      toggle,
      set,
      setFalse,
      setTrue,
    }]
}

export default useBoolean
