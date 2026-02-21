import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {ETooltipPositions, ETooltipThemes} from '../../../types/src'
import {Tooltip} from '../../components/interaction'

type TooltipComponent = typeof Tooltip

const meta: Meta<TooltipComponent> = {
    component: Tooltip,
    argTypes: {
        position: {
            control: {
                type: 'select',
            },
            description: 'Sets the position of the tooltip',
            options: Object.values(ETooltipPositions),
            table: {
                defaultValue: {
                    summary: ETooltipPositions.TOP,
                },
                type: {
                    summary: 'ETooltipPositions',
                },
            },
        },
        theme: {
            control: {
                type: 'select',
            },
            description: 'Sets the theme of the tooltip',
            options: Object.values(ETooltipThemes),
            table: {
                defaultValue: {
                    summary: ETooltipThemes.DEFAULT,
                },
                type: {
                    summary: 'ETooltipThemes',
                },
            },
        },
        text: {
            control: {
                type: 'text',
            },
            description: 'Sets the text of the tooltip',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
    },
    args: {
        position: ETooltipPositions.TOP,
        theme: ETooltipThemes.DEFAULT,
        text: 'Tooltip text',
    },
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Tooltip>` component is used to show a tooltip when hovering over an element.',
            },
        },
    },
    title: 'Components/Interaction/Tooltip',
} as Meta<TooltipComponent>

const Default: StoryFn<TooltipComponent> = args => ({
    components: {Tooltip},
    setup() {
        return {
            args,
        }
    },
    template: `
      <div style="display: flex; justify-content: center; align-items: center; height: 20vh;">
        <Tooltip :tooltip="args.text" :position="args.position" :theme="args.theme">
          <div class="bg-blue-500 text-white p-4 rounded cursor-pointer">
            Hover me!
          </div>
        </Tooltip>
      </div>
    `,
})
Default.parameters = {
    docs: {
        description: {
            story: 'This is the default view of the tooltip.',
        },
    },
}

const AllPositions: StoryFn<TooltipComponent> = args => ({
    components: {Tooltip},
    setup() {
        return {
            args,
            ETooltipPositions,
        }
    },
    template: `
      <div
          style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 100px; padding: 100px; justify-items: center;">
        <Tooltip
            tooltip="Top tooltip"
            :position="ETooltipPositions.TOP"
            :theme="args.theme"
        >
          <div class="bg-green-500 text-white p-4 rounded cursor-pointer">
            Top
          </div>
        </Tooltip>

        <Tooltip
            tooltip="Right tooltip"
            :position="ETooltipPositions.RIGHT"
            :theme="args.theme"
        >
          <div class="bg-blue-500 text-white p-4 rounded cursor-pointer">
            Right
          </div>
        </Tooltip>

        <Tooltip
            tooltip="Bottom tooltip"
            :position="ETooltipPositions.BOTTOM"
            :theme="args.theme"
        >
          <div class="bg-purple-500 text-white p-4 rounded cursor-pointer">
            Bottom
          </div>
        </Tooltip>

        <Tooltip
            tooltip="Left tooltip"
            :position="ETooltipPositions.LEFT"
            :theme="args.theme"
        >
          <div class="bg-red-500 text-white p-4 rounded cursor-pointer">
            Left
          </div>
        </Tooltip>
      </div>
    `,
})
AllPositions.parameters = {
    docs: {
        description: {
            story: 'This story shows all available tooltip positions.',
        },
    },
}

const AllThemes: StoryFn<TooltipComponent> = args => ({
    components: {Tooltip},
    setup() {
        return {
            args,
            ETooltipThemes,
        }
    },
    template: `
      <div style="display: flex; gap: 50px; justify-content: center; align-items: center; height: 20vh;">
        <Tooltip
            tooltip="Default theme tooltip"
            :position="args.position"
            :theme="ETooltipThemes.DEFAULT"
        >
          <div class="bg-gray-500 text-white p-4 rounded cursor-pointer">
            Default
          </div>
        </Tooltip>

        <Tooltip
            tooltip="Error theme tooltip"
            :position="args.position"
            :theme="ETooltipThemes.ERROR"
        >
          <div class="bg-red-500 text-white p-4 rounded cursor-pointer">
            Error
          </div>
        </Tooltip>

        <Tooltip
            tooltip="Warning theme tooltip"
            :position="args.position"
            :theme="ETooltipThemes.WARNING"
        >
          <div class="bg-yellow-500 text-white p-4 rounded cursor-pointer">
            Warning
          </div>
        </Tooltip>
      </div>
    `,
})
AllThemes.parameters = {
    docs: {
        description: {
            story: 'This story shows all available tooltip themes.',
        },
    },
}

const WithButtons: StoryFn<TooltipComponent> = args => ({
    components: {Tooltip},
    setup() {
        return {
            args,
            ETooltipPositions,
            ETooltipThemes,
        }
    },
    template: `
      <div style="display: flex; gap: 20px; justify-content: center; align-items: center; height: 20vh;">
        <Tooltip
            tooltip="Save your work"
            :position="ETooltipPositions.TOP"
            :theme="ETooltipThemes.DEFAULT"
        >
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>
        </Tooltip>

        <Tooltip
            tooltip="This action cannot be undone"
            :position="ETooltipPositions.TOP"
            :theme="ETooltipThemes.ERROR"
        >
          <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Delete
          </button>
        </Tooltip>

        <Tooltip
            tooltip="Make sure to review before proceeding"
            :position="ETooltipPositions.TOP"
            :theme="ETooltipThemes.WARNING"
        >
          <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
            Publish
          </button>
        </Tooltip>
      </div>
    `,
})
WithButtons.parameters = {
    docs: {
        description: {
            story:
                'This story shows tooltips used with buttons for practical UI scenarios.',
        },
    },
}

export default meta
export {Default, AllPositions, AllThemes, WithButtons}
