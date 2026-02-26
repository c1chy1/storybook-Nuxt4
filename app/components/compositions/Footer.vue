<template>
  <footer>
    <div
        v-if="type === ENavigations.WITH_BAR || type === ENavigations.DEFAULT"
        class="bg--brand-tertiary-darker px-14 pt-12 pb-6 text--additional-white"
    >
      <div
          v-if="columns"
          :class="{
          'grid-cols-2': columns === 2,
          'grid-cols-3': columns === 3,
          'grid-cols-4': columns === 4,
          'grid-cols-5': columns === 5,
        }"
          class="gap-x-4 gap-y-8 grid grid-cols-1"
      >
        <div v-for="column in items" :key="column.title">
          <h4 class="font-thin text-base">
            {{ column.title }}
          </h4>
          <div
              v-for="link in column.items"
              :key="link.title"
              :aria-label="link.title"
              class="mt-2.5 font-thin"
          >
            <a
                :class="{
                'text--brand-secondary': link.highlight,
                'cursor-pointer hover:text--additional-white':
                  (link.url && link.url.length > 0)
                  || (link.path && link.path.length > 0),
              }"
                :href="link.url"
                class="text--additional-grey"
                @click="handleFooterItemClick(link, $event)"
            >
              {{ link.title }}
            </a>
          </div>
        </div>
      </div>
      <template v-if="logo">
        <hr
            class="block mt-9 border--additional-grey-darker"
        >
        <template v-if="logo?.type === EMedia.SVG">
          <a
              :href="logo.url"
              class="cursor-pointer shrink-0"
              @click="handleFooterItemClick(logo, $event)"
          >
            <div
                :style="`width: ${logo.width}px; height: ${logo.height}px;`"
                class="mx-2"
                v-html="logo.source"
            />
          </a>
        </template>
        <template v-else>
          <a
              :href="logo.url"
              class="block mt-5 cursor-pointer shrink-0"
              @click="handleFooterItemClick(logo, $event)"
          >
            <img
                :alt="logo.alt"
                :src="logo.source"
                :style="`width: ${logo.width}px; height: ${logo.height}px;`"
                class="overflow-hidden"
            >
          </a>
        </template>
      </template>
    </div>
    <div
        v-if="type === ENavigations.WITH_BAR || type === ENavigations.BAR_ONLY"
        class="flex justify-between items-center bg--brand-tertiary px-4 pb-0.5 text-sm"
    >
      <span class="text--additional-white leading-none">
        {{ bar?.title }}
      </span>
      <div
          class="flex flex-wrap justify-center gap-4 py-4"
      >
        <Link
            v-for="link in bar?.links"
            :key="link.url"
            v-bind="link"
            @click:dropdown-item="handleBottomBarDropdownItemClick"
            @click:link="handleBottomBarLinkClick"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import type {IDropdownItem, IFooterItem, IPropsFooter, IPropsLink} from '../../../types/src'
import {EMedia, ENavigations} from '../../../types/src'
import {Link} from '../'
import {handleNavItemSourceClick} from '../../utils'
import {ref} from 'vue'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsFooter>(), {
  type: ENavigations.DEFAULT,
})

/* Locals ---------- */
/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
const emits = defineEmits([
  'click:nav-item',
  'click:bar-item',
  'click:bar-dropdown-item',
])
/* Reactives ------- */
const columns = ref(props.items?.slice(0, 5).length)

function handleFooterItemClick(item: IFooterItem, event: any) {
  handleNavItemSourceClick(item, event)
  emits('click:nav-item', item, event)
}

function handleBottomBarLinkClick(item: IPropsLink, event: any) {
  return emits('click:bar-item', item, event)
}

function handleBottomBarDropdownItemClick(item: IDropdownItem, event: any) {
  return emits('click:bar-dropdown-item', item, event)
}

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
