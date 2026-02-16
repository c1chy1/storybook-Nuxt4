<template>
  <div
      aria-label="Avatar"
      class="pzui-flex pzui-items-center pzui-justify-start pzui-gap-3 pzui-select-none"
  >
    <div
        :aria-description="title"
        :aria-label="title"
        :class="{ 'pzui-bg-pz-additional-grey': type === EAvatars.INITIALS }"
        :style="avatar?.customStyle"
        class="pzui-h-7 pzui-w-7 pzui-rounded-pz-border-radius-full pzui-shrink-0 pzui-flex pzui-items-center pzui-justify-center pzui-overflow-hidden"
    >
      <!--      <PzImage
                v-if="type === EAvatars.AVATAR && avatar?.source"
                :id="avatar?.id"
                :blob="avatar?.blob"
                :custom-style="avatar?.customStyle"
                :download="false"
                :expanded="true"
                :fit="avatar?.fit"
                :fullscreen="false"
                :open-in-new-tab="false"
                :source="avatar?.source"
                :type="avatar?.type"
            />-->
      <span
          class="pzui-font-normal pzui-text-pz-additional-white pzui-leading-none pzui-mt-[2px]"
          style="font-size: 0.8rem"
      >
        {{ initials }}
      </span>
    </div>
    <span class="pzui-hidden md:!pzui-block">
      {{ title }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import type {IPropsAvatar} from '../../../types/src'
import {EAvatars} from '../../../types/src'

/* Props ----------- */
withDefaults(defineProps<IPropsAvatar>(), {
  type: EAvatars.INITIALS,
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
