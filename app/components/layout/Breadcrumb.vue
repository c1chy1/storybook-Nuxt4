<template>
  <nav class="text--additional-grey-darker select-none">
    <ul class="flex items-center">
      <li v-if="root" class="leading-none">
        <a
            :href="root.url"
            class="flex items-center hover:text--additional-grey-darker hover:cursor-pointer"
            @click="handleBreadcrumbClick(root, $event)"
        >
          <Icon
              class="text-sm hover:cursor-pointer"
              custom-style="font-size: 1.25rem;"
              title="material-symbols:home"
          />
        </a>
      </li>
      <template v-if="items">
        <li
            v-for="(breadcrumb, index) in items"
            :key="index"
            :aria-description="breadcrumb.description"
            :aria-label="breadcrumb.title"
            :class="{ 'text--brand-primary': index === items.length - 1 }"
            class="flex items-center leading-none"
        >
          <Icon
              v-if="index > 0 || root"
              class="mx-3 text-sm pb-1"
              custom-style="font-size: 1rem;"
              title="material-symbols:chevron-right"
          />
          <a
              :class="{
              'border--brand-primary hover:text--brand-primary':
                index === items.length - 1,
            }"
              :href="breadcrumb.url"
              class="hover:text--additional-black hover:cursor-pointer border-b-4 border-transparent"
              @click="handleBreadcrumbClick(breadcrumb, $event)"
          >
            {{ breadcrumb.title }}
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type {IPropsBreadcrumb, IPropsNavItem} from '../../../types/src'
import {handleNavItemSourceClick} from '../../utils'
import {Icon} from '../'

/* Props ----------- */
withDefaults(defineProps<IPropsBreadcrumb>(), {})

/* Locals ---------- */
/* Reactives ------- */
/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
const emits = defineEmits<{
  (e: 'click', item: IPropsNavItem): void
}>()

function handleBreadcrumbClick(item: IPropsNavItem, event: any) {
  handleNavItemSourceClick(item, event)
  emits('click', item)
}

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
