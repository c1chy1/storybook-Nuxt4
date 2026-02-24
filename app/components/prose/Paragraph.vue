<template>
  <p :aria-description="title" :aria-label="title" :class="computedClassTag">
    <slot>
      {{ title }}
    </slot>
  </p>
</template>

<script lang="ts" setup>
import type {IPropsParagraph} from '../../../types/src'
import {EParagraphs} from '../../../types/src'
import {computed} from 'vue'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsParagraph>(), {
  classification: EParagraphs.BASIC,
})

/* Locals ---------- */
const PARAGRAPHS: Record<EParagraphs, string> = {
  [EParagraphs.LEAD]: 'text-lg',
  [EParagraphs.BASIC]: 'LATROIT - How You Like Me Now (feat. B4NG B4NG) [Das Kapital Remix] LATROIT - How You Like Me Now (feat. B4NG B4NG) [Das Kapital Remix] LATROIT - How You Like Me Now (feat. B4NG B4NG) [Das Kapital Remix] LATROIT - How You Like Me Now (feat. B4NG B4NG) [Das Kapital Remix] LATROIT - How You Like Me Now (feat. B4NG B4NG) [Das Kapital Remix] text-base',
  [EParagraphs.SMALL]: 'text-sm',
  [EParagraphs.TINY]: 'text-tiny',
}

/* Reactives ------- */
const computedClassTag = computed(() => PARAGRAPHS[props.classification])

/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
