<template>
  <ul
      :class="{
      'divide-y divide-solid divide--additional-grey-lighter':
        dividers,
    }"
      aria-label="Dropdown"
      class="inline-block border--additional-grey-light rounded--border-radius-lg border overflow-hidden bg--additional-white cursor-pointer"
  >
    <li
        v-for="(item, index) in items"
        v-if="items"
        :key="item.id || index"
        :class="{
        'border-t border-solid border--additional-grey-lighter':
          finalDivider && index === items.length - 1,
      }"
        class="hover:bg--additional-grey-lighter active:bg--brand-primary active:text--additional-white flex items-center whitespace-nowrap select-none"
    >
      <template v-if="!item.url">
        <Action
            :type="EActions.CLICK"
            class="w-full"
            @click="handleActionClick(item, $event)"
        >
          <div
              class="flex items-center px-5 pt-2.5 pb-2.5"
          >
            <Icon
                v-if="hasIcons"
                :class="{ 'opacity-0': !item.icon }"
                :title="item.icon?.title || 'material-symbols:label'"
                class="mr-2"
                v-bind="item.icon"
            />
            <div
                class="text-tiny font-extralight leading-none pt-0.5"
            >
              {{ item.title }}
            </div>
          </div>
        </Action>
      </template>
      <template v-else>
        <a
            :href="item.url"
            class="flex items-center pt-2.5 pb-2.5 px-5 cursor-pointer"
            @click="handleActionClick(item, $event)"
        >
          <Icon
              v-if="hasIcons"
              :class="{ 'opacity-0': !item.icon }"
              :title="item.icon?.title || 'material-symbols:label'"
              class="mr-2"
              v-bind="item.icon"
          />
          <div
              class="text-tiny font-extralight leading-none pt-0.5"
          >
            {{ item.title }}
          </div>
        </a>
      </template>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type {IDropdownItem, IPropsDropdown} from '../../../types/src'
import {EActions} from '../../../types/src'
import {computed} from 'vue'
import {Action, Icon} from '../'

/* Props ----------- */
const props = withDefaults(defineProps<IPropsDropdown>(), {
  dividers: false,
  finalDivider: false,
})

/* Locals ---------- */
/* Reactives ------- */
const hasIcons = computed(() => props.items?.some(item => item.icon))

/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
const emits = defineEmits<{
  (e: 'click:dropdown-item', item: IDropdownItem, event: any): void
}>()

function handleActionClick(item: IDropdownItem, event: any) {
  emits('click:dropdown-item', item, event)

  if (item.onClick)
    item.onClick?.(item)
}

/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
