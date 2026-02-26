<template>
  <header>
    <template v-if="isMobile">
      <div
          class="flex justify-end items-center bg--additional-white h-5 max-h-5 text-sm"
      >
        <Popover :type="EPopovers.HOVER" class="px-2">
          <template #trigger-element>
            <div class="flex items-center gap-2 pt-0.5">
              {{ bar?.title }}
              <Icon title="material-symbols:keyboard-arrow-down"/>
            </div>
          </template>
          <template #popover-content>
            <div
                class="bg-white border rounded--border-radius-lg"
            >
              <Dropdown
                  style="border: none"
                  v-bind="mobileTopBarLinkProps"
                  @click:dropdown-item="handleTopBarLinkClick"
              />
              <div
                  class="px-5 pb-2 font-extralight text-tiny leading-none"
              >
                <Link
                    v-for="link in topBarSubMenuItems"
                    :key="link.url ?? link.path"
                    v-bind="link"
                    @click:dropdown-item="handleTopBarDropdownItemClick"
                />
              </div>
            </div>
          </template>
        </Popover>
      </div>
      <div
          :class="{ 'justify-between': items, 'justify-end': !items }"
          class="shadow--shadow-dropped-bottom-right flex items-center bg--additional-white pl-4 border-t border-t--additional-grey-light h-14"
      >
        <div
            class="place-content-end border-b-4 border-b--brand-primary h-full"
        >
          {{ activeNavHeader?.title }}
        </div>
        <Popover
            :type="popoverType"
            class="flex items-center bg--additional-grey-lightest px-3 h-full"
        >
          <template #trigger-element>
            <Avatar
                :avatar="avatar?.avatar"
                :initials="avatar?.initials"
                :type="avatar?.type"
                class="pl-3"
                title=""
            />
          </template>
          <template #popover-content>
            <div
                class="bg-white border rounded--border-radius-lg"
            >
              <Dropdown
                  style="border: none"
                  v-bind="dropdown"
                  @click:dropdown-item="handleNavDropdownItemClick"
              />
              <div
                  class="flex flex-col gap-y-2 px-5 pb-2 font-extralight text-tiny leading-none"
              >
                <Link
                    v-for="link in navItemsToLinkItems"
                    :key="link.url ?? link.path"
                    v-bind="link"
                    @click:dropdown-item="handleNavItemClick"
                />
              </div>
            </div>
          </template>
        </Popover>
      </div>
    </template>
    <template v-else>
      <div
          v-if="type === ENavigations.WITH_BAR || type === ENavigations.BAR_ONLY"
          class="flex justify-between items-center bg--additional-white px-4 py-0.5 h-5 text-sm"
      >
        <span
            :aria-label="bar?.title"
            class="pt-[1px] text--additional-grey-dark leading-none"
        >
          {{ bar?.title }}
        </span>
        <div
            class="flex justify-between items-center gap-4 pb-0.5"
        >
          <Link
              v-for="link in bar?.links"
              :key="link.url ?? link.path"
              :label="link.label"
              v-bind="link"
              @click:dropdown-item="handleTopBarDropdownItemClick"
              @click:link="handleTopBarLinkClick"
          />
        </div>
      </div>
      <div
          v-if="type === ENavigations.DEFAULT || type === ENavigations.WITH_BAR"
          class="shadow--shadow-dropped-bottom-right flex justify-between items-center bg--additional-white px-4 border-t border-t--additional-grey-light h-14"
      >
        <div
            class="flex justify-center items-center h-full"
        >
          <template v-if="logo?.type === EMedia.SVG">
            <a
                :href="logo.url"
                class="cursor-pointer shrink-0"
                @click="handleNavItemClick(logo, $event)"
            >
              <div
                  :style="`width: ${logo.width}px; height: ${logo.height}px;`"
                  class="mx-2"
                  v-html="logo.source"
              />
            </a>
          </template>
          <template
              v-else-if="
              logo?.type === EMedia.PNG
                || logo?.type === EMedia.JPG
                || logo?.type === EMedia.JPEG
            "
          >
            <a
                :href="logo.url"
                class="mr-2 cursor-pointer shrink-0"
                @click="handleNavItemClick(logo, $event)"
            >
              <img
                  :alt="logo.alt"
                  :src="logo.source"
                  :style="`width: ${logo.width}px; height: ${logo.height}px;`"
                  class="overflow-hidden"
              >
            </a>
          </template>
          <div class="flex items-end h-full">
            <Breadcrumb :items="items" @click:nav-item="handleNavItemClick"/>
          </div>
        </div>
        <Popover
            :type="popoverType"
            class="flex items-center bg--additional-grey-lightest px-5 h-full hover:cursor-pointer"
        >
          <template #trigger-element>
            <div class="flex items-center gap-2">
              <Avatar class="text-sm" v-bind="avatar"/>
              <div class="flex hover:text--additional-grey">
                <Icon
                    class="text--additional-grey"
                    custom-style="font-size: 1.2rem;"
                    title="material-symbols:keyboard-arrow-down"
                />
              </div>
            </div>
          </template>
          <template #popover-content>
            <Dropdown
                v-bind="dropdown"
                @click:dropdown-item="handleNavDropdownItemClick"
            />
          </template>
        </Popover>
      </div>
    </template>
  </header>
</template>

<script lang="ts" setup>
import type {
  IDropdownItem,
  INavigation,
  IPropsDropdown,
  IPropsHeader,
  IPropsLink,
  IPropsNavItem
} from '../../../types/src'
import {ELinks, EMedia, ENavigations, EPopovers} from '../../../types/src'
import {Avatar, Breadcrumb, Dropdown, Icon, Link, Popover} from '../'
import {handleNavItemSourceClick} from '../../utils'
import {computed, ref, watch} from 'vue'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsHeader>(), {
  popoverType: EPopovers.NONE,
  type: ENavigations.WITH_BAR,
})

/* Methods --------- */
/* Emits ----------- */
const emits = defineEmits([
  'click:nav-item',
  'click:nav-dropdown-item',
  'click:bar-item',
  'click:bar-dropdown-item',
])
/* Reactives ------- */
const isMobile = ref(props.mobile)
const topBarSubMenuItems = ref<IPropsLink[]>([])
const topBarLinks = computed(() => {
  return (
      props.bar?.links?.map((link: IPropsLink) => {
        if (Object.hasOwn(link, 'dropdown')) {
          topBarSubMenuItems.value.push(link)
          return undefined
        } else {
          return {
            ...link,
            icon: link.icon,
            id: link.path || link.url,
            onClick: link.onClick,
            path: link.path,
            title: link.label,
            url: link.url,
          } as IDropdownItem
        }
      }) || []
  ).filter((link): link is IDropdownItem => link !== undefined)
})
const mobileTopBarLinkProps = ref<IPropsDropdown>({
  items: topBarLinks.value,
})
const navItemsToLinkItems = computed(() => {
  return props.items?.map((item: IPropsNavItem) => {
    const getChildDropdownItems = () =>
        item.children?.map((childItem: IPropsNavItem) => {
          return {
            ...childItem,
            disabled: childItem.disabled,
            icon: childItem.media || {
              title: 'material-symbols:keyboard-arrow-right',
            },
            id: childItem.path || childItem.url,
            path: childItem.path,
            title: childItem.title,
            url: childItem.url,
          } as IDropdownItem
        }) as IDropdownItem[]

    return {
      ...item,
      dropdown: {
        dividers: true,
        items: getChildDropdownItems(),
      },
      icon: item.media,
      id: item.path || item.url,
      label: item.title,
      path: item.path,
      popoverType: EPopovers.HOVER,
      type: item.children ? ELinks.DROPDOWN : ELinks.DEFAULT,
      url: item.url,
    } as IPropsLink
  })
})
const activeNavHeader = ref<INavigation | undefined>(
    props.items && props.items.length > 0
        ? props.items.find(item => item.active)
        : undefined,
)

/* Locals ---------- */
/* Watcher --------- */
watch(
    () => props.mobile,
    value => (isMobile.value = value),
)

function handleNavItemClick(item: any, event: any) {
  handleNavItemSourceClick(item, event)
  emits('click:nav-item', item, event)
}

function handleNavDropdownItemClick(item: INavigation, event: any) {
  handleNavItemSourceClick(item, event)
  emits('click:nav-dropdown-item', item, event)
}

function handleTopBarLinkClick(item: INavigation, event: any) {
  return emits('click:bar-item', item, event)
}

function handleTopBarDropdownItemClick(item: INavigation, event: any) {
  handleNavItemSourceClick(item, event)
  emits('click:bar-dropdown-item', item, event)
}

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
