<template>
  <div class="flex flex-col min-h-screen bg--brand-primary-background">
    <Header
        v-if="headerProps"
        :mobile="isMobile"
        v-bind="headerProps"
        @click:bar-item="handleHeaderBarItemClick"
        @click:bar-dropdown-item="handleHeaderBarDropdownItemClick"
        @click:nav-item="handleHeaderNavItemClick"
        @click:nav-dropdown-item="handleHeaderNavDropdownItemClick"
    />
    <div class="flex-grow">
      <slot/>
    </div>
    <Footer
        v-if="footerProps"
        v-bind="footerProps"
        @click:bar-item="handleFooterBarItemClick"
        @click:bar-dropdown-item="handleFooterBarDropdownItemClick"
        @click:nav-item="handleFooterNavItemClick"
        @click:nav-dropdown-item="handleFooterNavDropdownItemClick"
    />
  </div>
</template>

<script lang="ts" setup>
import type {INavigation, IPropsBasicPage} from '../../../types/src'
import {tryOnMounted, tryOnUnmounted} from '@vueuse/core'
import {ref} from 'vue'
import Footer from './Footer.vue'
import Header from './Header.vue'

/* Props ----------- */
withDefaults(defineProps<IPropsBasicPage>(), {})

/* Emits ----------- */
const emits = defineEmits<{
  (e: 'click:header-bar-item', item: INavigation, event: any): void
  (e: 'click:header-bar-dropdown-item', item: INavigation, event: any): void
  (e: 'click:header-nav-item', item: INavigation, event: any): void
  (e: 'click:header-nav-dropdown-item', item: INavigation, event: any): void
  (e: 'click:footer-bar-item', item: INavigation, event: any): void
  (e: 'click:footer-bar-dropdown-item', item: INavigation, event: any): void
  (e: 'click:footer-nav-item', item: INavigation, event: any): void
  (e: 'click:footer-nav-dropdown-item', item: INavigation, event: any): void
}>()

/* Reactives ------- */
const windowWidth = ref(getWindow()?.innerWidth ?? 1024)
const isMobile = ref(windowWidth.value < 1024)

/* Locals ---------- */
/* Watcher --------- */
/* Methods --------- */

function getWindow(): Window | undefined {
  return typeof window !== 'undefined' ? window : undefined
}

const handleWindowResize = () => isMobile.value = windowWidth.value < 1024

function handleHeaderBarItemClick(item: INavigation, event: any) {
  return emits('click:header-bar-item', item, event)
}

function handleHeaderBarDropdownItemClick(item: INavigation, event: any) {
  return emits('click:header-bar-dropdown-item', item, event)
}

function handleHeaderNavItemClick(item: INavigation, event: any) {
  return emits('click:header-nav-item', item, event)
}

function handleHeaderNavDropdownItemClick(item: INavigation, event: any) {
  return emits('click:header-nav-dropdown-item', item, event)
}

function handleFooterBarItemClick(item: INavigation, event: any) {
  return emits('click:footer-bar-item', item, event)
}

function handleFooterBarDropdownItemClick(item: INavigation, event: any) {
  return emits('click:footer-bar-dropdown-item', item, event)
}

function handleFooterNavItemClick(item: INavigation, event: any) {
  return emits('click:footer-nav-item', item, event)
}

function handleFooterNavDropdownItemClick(item: INavigation, event: any) {
  return emits('click:footer-nav-dropdown-item', item, event)
}

/* Lifecycle ------- */
tryOnMounted(() =>
    getWindow() ? getWindow()!.addEventListener('resize', () => handleWindowResize()) : undefined,
)

tryOnUnmounted(() =>
    getWindow() ? getWindow()!.removeEventListener('resize', () => handleWindowResize()) : undefined,
)

/* Exposings ------- */
/* Others ---------- */
</script>
