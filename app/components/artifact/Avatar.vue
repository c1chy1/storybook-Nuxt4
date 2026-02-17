<template>
  <div
      aria-label="Avatar"
      class="flex items-center justify-start gap-3 select-none"
  >
    <div
        :aria-description="title"
        :aria-label="title"
        :class="{ 'bg-pz-additional-grey': type === EAvatars.INITIALS }"
        :style="avatar?.customStyle"
        class="h-7 w-7 rounded-border-radius-full shrink-0 flex items-center justify-center overflow-hidden"
    >
      <Image
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
      />
      <span
          class="font-normal text-additional-white leading-none mt-[2px]"
          style="font-size: 0.8rem"
      >
        {{ initials }}
      </span>
    </div>
    <span class="hidden md:!block">
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
