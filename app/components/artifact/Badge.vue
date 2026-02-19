<template>
  <span
      :aria-label="label"
      :class="[
      badgeClasses,
      {
        'rounded-border-radius-full px-2 pt-[1px] pb-[1px]':
          pill && size === ESizes.SMALL,
        'rounded-border-radius-full px-4 pt-[5px] pb-[3px]':
          pill && size === ESizes.DEFAULT,
        'rounded-border-radius-sm px-2.5 pt-1 pb-[4px]':
          !pill,
      },
    ]"
      class="text-center font-normal inline-flex items-center justify-between"
      @click="handleClick"
  >
    <span class="flex items-center">
      <Icon
          v-if="(icon && iconPosition === EPositions.LEFT) || !iconPosition"
          :class="{ 'mr-1': icon }"
          v-bind="icon"
          @click="handleIconClick"
      />
      <span class="select-none pt-[1px]">
        {{ label }}
      </span>
    </span>
    <span class="flex items-center">
      <Icon
          v-if="icon && iconPosition === EPositions.RIGHT"
          v-bind="icon"
          @click:icon="handleIconClick"
      />
      <CloseButton
          v-if="closeButton && !closeButton.disabled"
          class="-mt-[1px] -mr-2"
          v-bind="closeButton"
          @click:dismiss="handleClose"
      />
    </span>
  </span>
</template>

<script lang="ts" setup>
import type {IMedia, IPropsBadge, IPropsCloseButton} from '../../../types/src'
import {EColors, EPositions, ESizes} from '../../../types/src'
import {computed} from 'vue'
import {CloseButton, Icon} from '../artifact'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsBadge>(), {
  size: ESizes.DEFAULT,
  type: EColors.PRIMARY,
})

/* Locals ---------- */
/* Reactives ------- */
const badgeClasses = computed(
    () => `${getType(props.type)} ${getSize(props.size)}`,
)

/* Watcher --------- */
/* Methods --------- */
function getType(type: any) {
  return type === EColors.PRIMARY
      ? 'bg-brand-primary text-additional-white'
      : type === EColors.SECONDARY
          ? 'bg-brand-secondary text-additional-white'
          : type === EColors.SUCCESS
              ? 'bg-additional-success text-additional-white'
              : type === EColors.DANGER
                  ? 'bg-additional-danger text-additional-white'
                  : type === EColors.WARNING
                      ? 'bg-additional-warning text-additional-white'
                      : type === EColors.INFO
                          ? 'bg-additional-info text-additional-white'
                          : type === EColors.LIGHT
                              ? 'bg-additional-grey-light text-additional-black'
                              : type === EColors.DARK
                                  ? 'bg-additional-black text-additional-white'
                                  : ''
}

function getSize(size: ESizes) {
  return size === ESizes.SMALL
      ? 'text-xs'
      : size === ESizes.DEFAULT
          ? 'text-base'
          : size === ESizes.BIG
              ? 'text-lg'
              : ''
}

/* Emits ----------- */
const emits = defineEmits<{
  (e: 'click:icon', icon?: IMedia): void
  (e: 'click', props: IPropsBadge): void
  (e: 'close', closeButton?: IPropsCloseButton): void
}>()

function handleIconClick(event: any) {
  event.stopPropagation()
  emits('click:icon', props.icon)
}

const handleClick = () => emits('click', props)
const handleClose = () => emits('close', props.closeButton)

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
