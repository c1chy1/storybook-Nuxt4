<template>
  <div
      :style="{
      display: inline ? 'inline-block' : 'block',
      position: 'relative',
    }"
      class="chip chip-wrapper"
  >
    <slot/>
    <div
        v-if="show"
        ref="chipElement"
        :class="chipClasses"
        :style="chipStyles"
        class="chip__content"
    >
      <span
          v-if="label && !label.startsWith('<svg')"
          ref="textElement"
          :style="textStyles"
          class="chip__text"
      >
        {{ label }}
      </span>
      <div
          v-else-if="label && label.startsWith('<svg')"
          class="chip__icon"
          v-html="label"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {IPropsChip} from '../../../types/src'
import {EPositions} from '../../../types/src'

import {computed, nextTick, onMounted, ref, watch} from 'vue'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsChip>(), {
  backgroundColor: '#003CC1',
  color: '#fff',
  position: EPositions.TOP_RIGHT,
  show: true,
  size: 30,
  inline: false,
})

/* Locals ---------- */
/* Reactives ------- */
const chipElement = ref<HTMLElement>()
const textElement = ref<HTMLElement>()

const chipSize = computed(() => {
  return typeof props.size === 'string'
      ? Number.parseInt(props.size)
      : props.size
})

const chipClasses = computed(() => {
  return [`chip--${props.position}`]
})

const chipStyles = computed(() => {
  const baseStyles = {
    height: `${chipSize.value}px`,
    width: `${chipSize.value}px`,
    borderRadius: `${chipSize.value}px`,
    backgroundColor: props.backgroundColor,
  }

  if (props.customStyles) {
    return {
      ...baseStyles,
      ...parseCustomStyles(props.customStyles),
    }
  }

  return baseStyles
})

const textStyles = computed(() => {
  return {
    color: props.color,
  }
})

/* Watcher --------- */
watch(
    () => [props.label, props.size],
    async () => {
      if (props.label && !props.label.startsWith('<svg')) {
        await nextTick()
        adjustTextSize()
      }
    },
)

/* Methods --------- */
function parseCustomStyles(customStyles: string) {
  const styles: Record<string, string> = {}
  const declarations = customStyles.split(';')

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':').map(s => s.trim())
    if (property && value) {
      const camelCaseProperty = property.replace(/-([a-z])/g, (_, letter) =>
          letter.toUpperCase())
      styles[camelCaseProperty] = value
    }
  })

  return styles
}

function adjustTextSize() {
  if (!textElement.value || !chipElement.value)
    return

  const maxWidth = chipElement.value.clientWidth - 2
  let maxFontSize = 14
  const minFontSize = 6

  textElement.value.style.fontSize = `${maxFontSize}px`

  while (
      textElement.value.scrollWidth > maxWidth
      && maxFontSize > minFontSize
      ) {
    maxFontSize -= 1
    textElement.value.style.fontSize = `${maxFontSize}px`
  }

  textElement.value.style.fontSize = `${Math.max(maxFontSize, minFontSize)}px`
}

/* Emits ----------- */
/* Lifecycle ------- */
onMounted(async () => {
  if (props.label && !props.label.startsWith('<svg')) {
    await nextTick()
    adjustTextSize()
  }
})

/* Exposings ------- */
/* Others ---------- */
</script>
