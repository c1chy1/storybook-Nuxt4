<template>
  <template v-if="type === EActions.LABELED">
    <button
        :class="{
        'opacity-50 cursor-not-allowed': disabled,
        'text--additional-grey-darker hover:text--additional-black cursor-pointer':
          theme === EColors.DARK && !disabled,
        'text--additional-white hover:text--additional-black cursor-pointer':
          theme === EColors.LIGHT && !disabled,
      }"
        :disabled="disabled"
        class="inline-flex text-sm leading-none"
        @click="handleAction($event)"
    >
      <span v-if="label" class="text-tiny font-normal">
        {{ label }}
      </span>
    </button>
  </template>
  <template v-else-if="type === EActions.CLICK">
    <button class="cursor-pointer" @click="handleAction($event)">
      <slot/>
    </button>
  </template>
  <template v-else-if="type === EActions.MINI_BUTTON">
    <button
        :class="{
        'cursor-not-allowed': disabled,
        'cursor-pointer': !disabled,
      }"
        :disabled="disabled"
        :style="`background: ${theme};`"
        class="min-h-5 min-w-5 flex items-center justify-center"
        @click="handleAction"
    >
      <Icon v-if="icon" v-bind="icon"/>
    </button>
  </template>
</template>

<script lang="ts" setup>
import type {IPropsAction} from '../../../types/src'
import {EActions, EColors} from '../../../types/src'
import {computed} from 'vue'
import {Icon} from '../artifact'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsAction>(), {
  theme: EColors.GREY,
  type: EActions.NONE,
})

/* Locals ---------- */
/* Reactives ------- */
const theme = computed(() => {
  if (typeof props.theme === 'string')
    return props.theme
  return ''
  // else return getHexByClass(mapStatusToBrandClasses(props.theme, false).color)
})

/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
const emits = defineEmits(['click'])
const handleAction = (event: any) => emits('click', event)

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
