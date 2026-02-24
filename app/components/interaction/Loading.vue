<template>
  <div class="loading relative">
    <slot/>
    <div v-if="loading" class="loading-overlay">
      <div
          class="loading-pulse rounded-border-radius-lg h-full w-full pulse-effect"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {IPropsLoading} from '../../../types/src'

/* Props ----------- */
withDefaults(defineProps<IPropsLoading>(), {
  loading: false,
})

/* Locals ---------- */
/* Reactives ------- */
/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
