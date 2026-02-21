<template>
  <!-- Default Button -->
  <button
      v-if="type !== EButtons.ACTION && type !== EButtons.GHOST"
      :aria-label="label"
      :class="{
      'rounded-border-radius-lg': corners === ECorners.LARGE_ROUNDED,
      'rounded-border-radius-md': corners === ECorners.MID_ROUNDED,
      'rounded-border-radius-sm': corners === ECorners.DEFAULT,
      'h-14 text-lg': size === ESizes.BIG,
      'h-7.5': size === ESizes.SMALL,
      'h-10.5': size === ESizes.DEFAULT,
      'block w-full': block,
      'border-brand-primary border-solid active:border-brand-primary-darker focus-visible:ring-brand-primary-light':
        type === EButtons.PRIMARY,
      'border-brand-secondary border-solid active:border-brand-secondary-darker focus-visible:ring-brand-secondary-light':
        type === EButtons.SECONDARY,
      'border-additional-danger border-solid active:border-additional-danger-darker focus-visible:ring-additional-danger-light':
        type === EButtons.ERROR,
      'text-brand-primary active:text-brand-primary-darker':
        type === EButtons.PRIMARY && outline,
      'text-brand-secondary active:text-brand-secondary-darker':
        type === EButtons.SECONDARY && outline,
      'text-additional-danger active:text-additional-danger-darker':
        type === EButtons.ERROR && outline,
      'text-additional-white active:text-opacity-50': !outline,
      'bg-brand-primary active:bg-brand-primary-darker':
        type === EButtons.PRIMARY && !outline,
      'bg-brand-secondary active:bg-brand-secondary-darker':
        type === EButtons.SECONDARY && !outline,
      'bg-additional-danger active:bg-additional-danger-darker':
        type === EButtons.ERROR && !outline,
    }"
      :disabled="disabled"
      :style="customTextStyle"
      class="flex items-center font-normal border-2 hover:shadow-lg focus:outline-none focus-visible:ring disabled:opacity-50 disabled:pointer-events-none p-3 py-2 text-tiny leading-none"
      @click="handleButtonClick"
  >
    <Icon
        v-if="icon && (iconPosition === EPositions.LEFT || !iconPosition)"
        :class="`${label?.length ? 'mr-1' : ''}`"
        v-bind="icon"
    />
    <span class="pt-[0.5px] select-none">
      {{ label }}
    </span>
    <Icon
        v-if="icon && iconPosition === EPositions.RIGHT"
        :class="`${label?.length ? 'ml-1' : ''}`"
        v-bind="icon"
    />
  </button>

  <!-- Ghost Button --->
  <button
      v-if="type === EButtons.GHOST"
      :disabled="disabled"
      class="flex items-center font-normal focus:outline-none focus-visible:ring disabled:opacity-50 disabled:pointer-events-none text-tiny leading-none text-brand-primary"
      @click="handleButtonClick"
  >
    <span
        v-if="icon && (iconPosition === EPositions.LEFT || !iconPosition)"
        :class="{ 'mr-1.5': label?.length }"
        class="h-4 w-4 flex text-white bg-brand-primary rounded-full items-center justify-center"
    >
      <Icon v-bind="icon"/>
    </span>
    <span class="pt-0.5 select-none">
      {{ label }}
    </span>
    <span
        v-if="icon && iconPosition === EPositions.RIGHT"
        :class="{ 'ml-1.5': label?.length }"
        class="h-4 w-4 flex text-white bg-brand-primary rounded-full items-center justify-center"
    >
      <Icon v-bind="icon"/>
    </span>
  </button>

  <!-- Action Button -->
  <button
      v-if="type === EButtons.ACTION"
      :disabled="disabled"
      class="bg-brand-primary-lighter text-brand-primary p-2 py-1 rounded-border-radius-lg active:bg-brand-primary-light focus:outline-none focus-visible:ring disabled:opacity-50 disabled:pointer-events-none"
      @click="handleButtonClick"
  >
    <Icon
        :title="icon?.title ?? 'material-symbols:mail'"
        class="pt-[0.3rem]"
        v-bind="icon"
    />
  </button>
</template>

<script lang="ts" setup>
import type {IPropsButton} from '../../../types/src'
import {EButtons, ECorners, EPositions, ESizes} from '../../../types/src'
import {Icon} from '../artifact'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsButton>(), {
  block: false,
  corners: ECorners.DEFAULT,
  size: ESizes.DEFAULT,
  type: EButtons.PRIMARY,
})

/* Locals ---------- */
/* Reactives ------- */
/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function handleButtonClick(event: MouseEvent) {
  if (props.disabled)
    return
  if (props.click && typeof props.click === 'function')
    props.click()
  else emits('click', event)
}

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
