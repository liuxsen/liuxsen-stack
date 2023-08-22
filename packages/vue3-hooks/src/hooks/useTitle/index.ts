import { type Ref, isRef, onMounted, onUnmounted, unref, watch } from 'vue'
import isBrowser from '../../utils/isBrowser'

export interface useTitleOption {
  restoreOnUnmount: boolean
}

const useTitle = (title: Ref<string> | string, options: useTitleOption = { restoreOnUnmount: false }) => {
  const oldTitle = isBrowser ? document.title : ''
  if (isRef(title)) {
    watch(title, () => {
      document.title = title.value
    })
  }

  onMounted(() => {
    document.title = unref(title)
  })

  onUnmounted(() => {
    if (options.restoreOnUnmount) {
      document.title = oldTitle
    }
  })
}

export default useTitle
