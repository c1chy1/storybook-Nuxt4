<template>
  <button
      :class="{ 'opacity-20 cursor-not-allowed': disabled }"
      :disabled="disabled"
      aria-label="CloseButton"
      class="flex"
      @click="handleButtonClick"
  >
    <Icon
        :class="{
        'text-additional-grey-darker active:rounded-border-radius-sm':
          theme === EColors.DARK && !disabled,
        'text-additional-white active:rounded':
          theme === EColors.LIGHT && !disabled,
        'hover:text-additional-black active:border-2 active:border-brand-primary active:border-opacity-30':
          !disabled,
      }"
        class="border-2 border-transparent px-[3px] transition-all"
        title="material-symbols:close"
    />
  </button>
</template>

<script lang="ts" setup>
import type {IPropsCloseButton} from '../../../types/src'
import {EColors} from '../../../types/src'
import {Icon} from '../artifact'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsCloseButton>(), {
  theme: EColors.DARK,
})

/* Locals ---------- */
/* Reactives ------- */
/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
const emits = defineEmits<{
  (e: 'click:dismiss'): void
}>()

function handleButtonClick() {
  if (props.disabled)
    return
  if (props.onClick && typeof props.onClick === 'function')
    props.onClick()

  emits('click:dismiss')
}

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
