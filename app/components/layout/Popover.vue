<template>
  <div
      aria-label="Popover"
      class="popover relative"
      @click="toggleVisibility"
      @mouseenter="triggerHoverIn"
      @mouseleave="triggerHoverOut"
  >
    <div>
      <slot name="trigger-element"/>
    </div>
    <transition name="popover">
      <div
          v-show="isVisible"
          class="popover__content absolute z-[100] top-full right-0"
          @mouseenter="contentHoverIn"
          @mouseleave="contentHoverOut"
      >
        <slot name="popover-content"/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type {IPropsPopover} from '../../../types/src'
import {EPopovers} from '../../../types/src'
import {ref, watch} from 'vue'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsPopover>(), {
  type: EPopovers.NONE,
})

/* Locals ---------- */
/* Reactives ------- */
const isVisible = ref(props.open)
const isHovering = ref(false)

/* Watcher --------- */
watch(
    () => props.open,
    (newValue: boolean) => (isVisible.value = newValue),
)

/* Methods --------- */
function toggleVisibility() {
  return (isVisible.value
      = props.type === EPopovers.CLICK ? !isVisible.value : isVisible.value)
}

function triggerHoverIn() {
  return (isVisible.value
      = props.type === EPopovers.HOVER ? true : isVisible.value)
}

function triggerHoverOut() {
  return setTimeout(() => {
    if (!isHovering.value && props.type === EPopovers.HOVER)
      isVisible.value = false
  }, 100)
}

const contentHoverIn = () => (isHovering.value = true)

function contentHoverOut() {
  isHovering.value = false
  isVisible.value = props.type === EPopovers.NONE ? isVisible.value : false
}

/* Emits ----------- */
/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
