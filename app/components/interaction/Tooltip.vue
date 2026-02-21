<template>
  <div
      class="tooltip"
      @blur="hideTooltip"
      @focus="showTooltip"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
  >
    <slot/>
    <div
        v-show="isVisible"
        :class="tooltipClasses"
        class="tooltip__content"
        role="tooltip"
    >
      {{ tooltip }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {IPropsTooltip} from '../../../types/src'
import {ETooltipPositions, ETooltipThemes} from '../../../types/src'
import {computed, ref} from 'vue'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsTooltip>(), {
  tooltip: '',
  position: ETooltipPositions.TOP,
  theme: ETooltipThemes.DEFAULT,
})

/* Locals ---------- */
/* Reactives ------- */
const isVisible = ref(false)

/* Watcher --------- */
/* Methods --------- */
const tooltipClasses = computed(() => {
  return [`tooltip--${props.position}`, `tooltip--${props.theme}`]
})

function showTooltip() {
  if (props.tooltip) {
    isVisible.value = true
  }
}

function hideTooltip() {
  isVisible.value = false
}

/* Emits ----------- */
/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
