<template>
  <component
      :is="format"
      :aria-description="title"
      :aria-label="title"
      :class="computedClassTag ?? HEADLINES[format]"
  >
    <slot>
      {{ title }}
    </slot>
  </component>
</template>

<script lang="ts" setup>
import type {IPropsHeadline} from '../../../types/src'
import {EHeadlines} from '../../../types/src'
import {computed} from 'vue'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsHeadline>(), {
  classification: EHeadlines.H1,
  format: EHeadlines.H1,
})

/* Locals ---------- */
const HEADLINES: Record<EHeadlines, string> = {
  [EHeadlines.H1]: 'text-4xl leading-none',
  [EHeadlines.H2]: 'text-3xl leading-none',
  [EHeadlines.H3]: 'text-2xl leading-none',
  [EHeadlines.H4]: 'text-xl leading-none',
  [EHeadlines.H5]: 'text-lg leading-none',
  [EHeadlines.H6]: 'text-base leading-none',
}

/* Reactives ------- */
const computedClassTag = computed(() => HEADLINES[props.classification])

/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
