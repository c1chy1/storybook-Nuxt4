<template>
  <div class="w-full">
    <label
        v-if="label?.length"
        :for="id?.toString() ?? ''"
        class="mb-1 text-tiny"
    >
      <span>
        {{ label }}
      </span>
    </label>

    <div
        :class="{
          'cursor-pointer': openInNewTab || download,
          'relative flex items-center justify-center border-2 roundedborder-radius-lg borderadditional-grey-light overflow-hidden':
            fullscreen,
        }"
        :style="
          isExpanded
            ? `width: 100%; height: 100%`
            : `width: ${width ?? '200'}px; height: ${height ?? '200'}px;`
        "
        class="w-full h-full"
        tabindex="0"
        v-bind="$attrs"
        @click="handleImageClick"
    >
      <img
          :id="id?.toString() ?? ''"
          :alt="alt"
          :aria-description="alt"
          :aria-label="label"
          :src="(source || blobUrl) ?? ''"
          :style="`object-fit: ${fit ?? EFittings.COVER}; ${customStyle}`"
          class="w-full h-full"
      >
      <div
          v-if="fullscreen"
          class="right-1.5 bottom-1.5 absolute flex justify-center items-center bg-white shadow-shadow-even-sm rounded-border-radius-sm w-5 h-5 cursor-pointer"
          tabindex="0"
          @click.stop="handleResizeClick"
          @keydown.space.prevent="handleResizeClick"
      >
        <Icon
            :title="
              isExpanded
                ? 'material-symbols:collapse-content'
                : 'material-symbols:expand-content'
            "
            custom-style="font-size: 0.85rem;"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {IPropsImage} from '../../../types/src'
import {EFittings} from '../../../types/src'
import {ref, watch} from 'vue'
import {Icon} from '../artifact'

defineOptions({
  inheritAttrs: false,
})


function getWindow(): Window | undefined {
  return typeof window !== 'undefined' ? window : undefined
}

function getDocument(): Document | undefined {
  return typeof document !== 'undefined' ? document : undefined
}


/* Props ----------- */
const props = withDefaults(defineProps<IPropsImage>(), {})

/* Locals ---------- */
/* Reactives ------- */
const isExpanded = ref(props.expanded ?? false)
const blobUrl = ref<string | undefined>(
    typeof props.blob === 'string'
        ? props.blob
        : props.blob instanceof Blob
            ? URL.createObjectURL(props.blob)
            : undefined,
)

/* Watcher --------- */
watch(
    () => props.expanded,
    value => (isExpanded.value = value),
)

/* Methods --------- */
const handleResizeClick = () => (isExpanded.value = !isExpanded.value)

function handleImageClick() {
  if (props.source || props.blob) {
    const isExternal
        = /https?/.test(props.source || '') || /https?/.test(blobUrl.value || '')

    if (props.download && !isExternal && getDocument()) {
      const link = getDocument()!.createElement('a')
      link.href = (props.source || blobUrl.value) ?? ''
      link.download = ''

      link.click()
    }
    if (props.openInNewTab && getWindow()) {
      getWindow()!.open(props.source || blobUrl.value, '_blank')
    }

    emitImageClick()
  }
}

/* Emits ----------- */
const emits = defineEmits<{
  (e: 'click:image', props: IPropsImage): void
}>()

const emitImageClick = () => emits('click:image', props)

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>