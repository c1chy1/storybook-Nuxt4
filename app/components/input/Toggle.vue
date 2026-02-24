<template>
  <div class="relative">
    <Label
        v-if="label"
        :id="id"
        :disabled="disabled"
        :error="error"
        :label="label"
        :required="required"
        :tooltip="tooltip"
        :warning="warning"
        class="mb-1"
    />
    <div
        :id="id"
        :aria-checked="isToggled ? 'true' : 'false'"
        :aria-description="tooltip"
        :aria-disabled="disabled ? 'true' : 'false'"
        :aria-label="label"
        :aria-required="required ? 'true' : 'false'"
        :class="{
        'border-additional-grey-darker bg-additional-grey-lighter':
          !isToggled,
        [getStatusType(type)]: isToggled,
        'opacity-50 cursor-not-allowed': disabled,
        'cursor-pointer': !disabled,
      }"
        class="rounded-2xl border-2 relative h-7 w-12"
        @blur="handleInputBlur"
        @click="toggle"
    >
      <div
          :class="{
          'left-1': !isToggled,
          'left-7': isToggled,
        }"
          class="absolute top-1/2 -translate-y-1/2 rounded-border-radius-full transition-all duration-300"
      >
        <button
            :class="{
            'bg-additional-grey-darker': !isToggled,
            'bg-additional-white': isToggled,
          }"
            :disabled="disabled"
            class="flex justify-center items-center h-5 rounded-border-radius-full w-5"
        >
          <Icon
              v-if="icon && !isToggled"
              class="hover:text-inherit"
              v-bind="defaultIcon"
          />
          <Icon
              v-if="icon && isToggled"
              class="hover:text-inherit"
              v-bind="activeIcon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {IPropsToggle} from '../../../types/src'
import {EColors} from '../../../types/src'
import {generateId} from '../../utils'
import {computed, ref, watch} from 'vue'
import {Icon, Label} from '../artifact'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsToggle>(), {
  type: EColors.SUCCESS,
})

/* Locals ---------- */
const statusType = {
  info: 'bg-additional-info border-additional-info',
  success: 'bg-additional-success border-additional-success',
  warning: 'bg-additional-warning border-additional-warning',
  danger: 'bg-additional-danger border-additional-danger',
}

/* Reactives ------- */
const isToggled = ref(props.modelValue)
const id = computed(() => props.id ?? `id-${generateId()}`)

/* Watcher --------- */
watch(
    () => props.modelValue,
    value => (isToggled.value = value),
)

/* Methods --------- */
function getStatusType(type: string) {
  switch (type) {
    case EColors.INFO:
      return statusType.info
    case EColors.SUCCESS:
      return statusType.success
    case EColors.WARNING:
      return statusType.warning
    case EColors.DANGER:
      return statusType.danger
    default:
      return statusType.success
  }
}

/* Emits ----------- */
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'blur:input', value: boolean): void
}>()

function toggle() {
  if (!props.disabled) {
    isToggled.value = !isToggled.value

    emits('update:modelValue', isToggled.value)
  }
}

const handleInputBlur = () => emits('blur:input', isToggled.value)

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
