<template>
  <div
      aria-label="Card"
      class="w-full overflow-hidden rounded--border-radius-lg shadow--shadow-even-sm bg-white"
  >
    <div
        :style="`height: ${height ? `${height}px` : 'auto'}`"
        class="flex flex-col pb-4"
    >
      <div class="p-4 shrink-0">
        <Headline
            :classification="EHeadlines.H6"
            :format="EHeadlines.H6"
            :title="title"
            class="font-bold text--brand-primary"
        />
      </div>
      <div v-if="$slots.body" class="px-4 shrink overflow-auto">
        <slot name="body"/>
      </div>
      <div v-if="$slots.footer" class="px-4 pt-4 shrink-0">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {IPropsCard} from '../../../types/src'
import {EHeadlines} from '../../../types/src'
import {Headline} from '../'

/* Props ----------- */
withDefaults(defineProps<IPropsCard>(), {
  title: '',
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
