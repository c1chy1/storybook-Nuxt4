<template>
  <div class="w-full flex justify-between">
    <label
        :class="{ 'opacity-50': disabled }"
        :for="id"
        class="text-xs"
    >
      <span v-html="label"/>
      <span
          v-if="required"
          class="text-xs text-additional-grey-dark"
      >*</span>
    </label>
    <Tooltip
        v-if="tooltip"
        :position="ETooltipPositions.LEFT"
        :theme="
        error
          ? ETooltipThemes.ERROR
          : warning
            ? ETooltipThemes.WARNING
            : ETooltipThemes.DEFAULT
      "
        :tooltip="tooltip"
    >
      <div
          :class="[
          error ? 'tooltip--error' : warning ? 'tooltip--warning' : '',
        ]"
          :data-tooltip-type="error ? 'error' : warning ? 'warning' : 'info'"
          class="inline-flex"
      >
        <Icon
            :class="[
            error
              ? 'text-additional-danger'
              : warning
                ? 'text-additional-warning'
                : 'text-brand-secondary',
          ]"
            :title="
            error
              ? 'material-symbols:dangerous'
              : warning
                ? 'material-symbols:warning'
                : 'material-symbols:info'
          "
            class="focus:outline-none"
            tabindex="-1"
        />
      </div>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import type {IPropsLabel} from '../../../types/src'
import {ETooltipPositions, ETooltipThemes} from '../../../types/src'
import {Icon} from '../artifact'
import {Tooltip} from '../interaction'


/* Props ----------- */
withDefaults(defineProps<IPropsLabel>(), {})

/* Locals ---------- */
/* Reactives ------- */
/* Watcher --------- */
/* Methods --------- */
/* Emits ----------- */
/* Lifecycle ------- */
/* Exposings ------- */
/* Others ---------- */
</script>
