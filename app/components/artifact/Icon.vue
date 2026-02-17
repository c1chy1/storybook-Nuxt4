<template>
  <template v-if="source && source.trim().startsWith('<svg')">
    <div v-html="source"/>
  </template>
  <template v-else-if="source">
    <img :alt="alt" :src="source" :title="title">
  </template>
  <template v-else-if="!source">
    <!--    <iconify-icon
          :aria-label="title"
          :class="{ 'animate-spin': rotate }"
          :icon="title"
          :style="customStyle"
          noobserver
          class="hover:text-inherit"
        />-->
  </template>
</template>

<script lang="ts" setup>
import type {IPropsIcon} from '../../../types/src'
/*import 'iconify-icon'*/

/* Props ----------- */
withDefaults(defineProps<IPropsIcon>(), {})

/* Locals ---------- */
/* Reactives ------- */
/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
