import { type ComponentPublicInstance, type Ref, isRef } from 'vue'
import isBrowser from './isBrowser'

type TargetType = HTMLElement | Element | Window | Document | ComponentPublicInstance
type TargetValue<T> = T | undefined | null

export type BasicTarget<T extends TargetType = Element> = TargetValue<T> | Ref<TargetValue<T>> | (() => TargetValue<T>)

/**
 * 获取dom元素
 * @param target 获取元素的对象
 * @param defaultElement 默认dom元素
 * @returns dom
 */
export function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T) {
  if (!isBrowser) {
    return undefined
  }
  if (!target) {
    return defaultElement
  }

  let targetElement: TargetValue<T>
  if (typeof target === 'function') {
    targetElement = target()
  }
  else if (isRef(target)) {
    targetElement = (target.value as ComponentPublicInstance).$el ?? target.value
  }
  else {
    targetElement = target
  }
  return targetElement
}
