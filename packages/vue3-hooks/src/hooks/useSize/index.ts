import { onMounted, reactive, toRefs } from 'vue'
import { type BasicTarget, getTargetElement } from '../utils/domTarget'
import useWinResize from '../useWinResize'

const useSize = (target: BasicTarget) => {
  const size = reactive({
    width: 0,
    height: 0,
  })
  const getSizeInfo = () => {
    const targetDom = getTargetElement(target)
    size.height = targetDom?.clientHeight || 0
    size.width = targetDom?.clientWidth || 0
  }
  useWinResize(getSizeInfo)
  onMounted(() => {
    setTimeout(() => {
      getSizeInfo()
    }, 20)
  })
  return { ...toRefs(size) }
}

export default useSize
