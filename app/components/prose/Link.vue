<template>
  <template v-if="type !== ELinks.DROPDOWN">
    <a
        :aria-label="label"
        :class="{
        'text-additional-black hover:text-brand-primary':
          type === ELinks.DEFAULT,
        'text-additional-grey:darker hover:text-brand-primary text-sm':
          type === ELinks.SUBLINK,
        'text-brand-primary hover:text-additional-black text-sm':
          type === ELinks.TEXTLINK,
        'text-additional-white hover:text-additional-grey':
          type === ELinks.INVERTED,
      }"
        :href="url"
        class="flex items-center leading-none gap-1.5 cursor-pointer"
        @click="handleLinkClick"
    >
      <Icon
          v-if="icon?.position === EPositions.LEFT && icon"
          :class="
          [highlight ? 'text-brand-primary' : 'text-inherit'].join(
            ' ',
          )
        "
          v-bind="icon"
      />
      <span v-if="label" class="pt-0.5 text-inherit select-none">
        {{ label }}
      </span>
      <Icon
          v-if="icon && icon?.position === EPositions.RIGHT"
          :class="
          [highlight ? 'text-brand-primary' : 'text-inherit'].join(
            ' ',
          )
        "
          v-bind="icon"
      />
    </a>
  </template>
  <template v-else>
    <Popover :type="popoverType" class="relative">
      <template #trigger-element>
        <div class="flex items-center leading-none">
          <div
              :aria-label="label"
              class="flex items-center leading-none gap-1.5 cursor-pointer"
          >
            <Icon
                v-if="
                icon && (icon?.position === EPositions.LEFT || !icon?.position)
              "
                :class="
                [
                  highlight
                    ? 'text-brand-primary'
                    : 'text-inherit',
                ].join(' ')
              "
                v-bind="icon"
            />
            <span v-if="label" class="pt-0.5 text-inherit">
              {{ label }}
            </span>
            <Icon
                v-if="icon && icon?.position === EPositions.RIGHT"
                :class="
                [
                  highlight
                    ? 'text-brand-primary'
                    : 'text-inherit',
                ].join(' ')
              "
                v-bind="icon"
            />
            <Icon
                v-if="dropdown && popoverType !== EPopovers.NONE"
                :class="['text-sm pt-[1px]'].join(' ')"
                title="material-symbols:keyboard-arrow-down"
            />
          </div>
        </div>
      </template>
      <template #popover-content>
        <Dropdown
            v-bind="dropdown"
            @click:dropdown-item="handleDropdownItemClick"
        />
      </template>
    </Popover>
  </template>
</template>

<script lang="ts" setup>
import type {IDropdownItem, IPropsLink} from '../../../types/src'
import {ELinks, EPopovers, EPositions} from '../../../types/src'
import {handleNavItemSourceClick} from '../../utils'
import {Dropdown, Icon, Popover} from '../'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsLink>(), {})

/* Locals ---------- */
/* Reactives ------- */
/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
const emits = defineEmits<{
  (e: 'click:link', props: IPropsLink, event: any): void
  (e: 'click:dropdown-item', item: IDropdownItem, event: any): void
}>()

function handleDropdownItemClick(item: IDropdownItem, event: any) {
  handleNavItemSourceClick(item, event)
  emits('click:dropdown-item', item, event)
}

function handleLinkClick(event: any) {
  handleNavItemSourceClick(props, event)

  if (props.onClick && typeof props.onClick === 'function')
    props.onClick()
  else emits('click:link', props, event)
}

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
