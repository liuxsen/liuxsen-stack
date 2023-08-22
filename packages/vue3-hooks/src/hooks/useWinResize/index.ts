import { nextTick, onBeforeUnmount, onMounted } from 'vue'

const useWinResize = (action: () => void) => {
  const fn = async () => {
    await nextTick()
    action()
  }
  onMounted(() => {
    window.addEventListener('resize', fn, false)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', fn)
  })
  return null
}

export default useWinResize
