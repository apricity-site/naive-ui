import {
  ref,
  computed,
  watch
} from 'vue'

export function useFalseUntilTruthy (valueRef) {
  const bindValueRef = ref(!!valueRef.value)
  watch(valueRef, value => {
    if (value) {
      bindValueRef.value = true
    }
  })
  return bindValueRef
}

export function useMergedState (
  controlledStateRef,
  uncontrolledStateRef
) {
  return computed(() => {
    if (controlledStateRef.value === undefined) {
      return uncontrolledStateRef.value
    }
    return controlledStateRef.value
  })
}

export function useCompitable (reactive, keys) {
  return computed(() => {
    for (const key of keys) {
      if (reactive[key] !== undefined) return reactive[key]
    }
  })
}