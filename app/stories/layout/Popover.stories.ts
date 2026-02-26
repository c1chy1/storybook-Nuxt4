import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {Dropdown, Popover} from '../../components/'
import {EPopovers} from '../../../types/src'

const meta: Meta<typeof Popover> = {
    argTypes: {
        open: {
            control: {
                type: 'boolean',
            },
            description: 'Toggles the visibility of the popover',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                type: {
                    summary: 'boolean | undefined',
                },
            },
        },
        type: {
            control: {
                type: 'select',
            },
            description: 'Sets the type of the popover',
            options: Object.values(EPopovers),
            table: {
                defaultValue: {
                    summary: 'EPopovers.NONE',
                },
                type: {
                    summary: 'EPopovers | undefined',
                },
            },
        },
    },
    args: {
        open: false,
        type: EPopovers.HOVER,
    },
    component: Popover,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Popover>` component is used to show a popover when hovering over or clicking on an element.',
            },
        },
    },
    title: 'components/layout/Popover',
} as Meta<typeof Popover>

const Default: StoryFn<typeof Popover> = args => ({
    components: {
        Popover,
        Dropdown,
    },
    setup() {
        return {
            args,
        }
    },
    template: `
      <Popover
          :open="args.open"
          :type="args.type"
          class="flex justify-end"
      >
        <template #trigger-element>
          <div class="font-normal">Hover me!</div>
        </template>
        <template #popover-content>
          <Dropdown
              :dividers="true"
              :final-divider="false"
              :items="[
                 {
                     action: {},
                     media: {title: 'material-symbols:label'},
                     title: 'Company profile',
                     url: ''
                 },
                 {
                     action: {},
                     media: {title: 'material-symbols:label'},
                     title: 'User profile',
                     url: ''
                 }
              ]"
          />
        </template>
      </Popover>
    `,
})

const information = `
### IPropsPopover
See above for the full interface definition.

### Events
The following events will be emitted from the component:
- \`none\`

### Further Information
- \`none\`
`
const Information: StoryFn = () => ({})
Information.decorators = [
    () => ({
        data() {
            return {
                showInfo: false,
            }
        },
        template: `
          <div>
            <button @click="showInfo = !showInfo">Toggle Info</button>
            <pre v-if="showInfo" style="font-size: 0.5rem">${information}</pre>
          </div>
        `,
    }),
]
Information.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: information,
        },
    },
}

export default meta
export {Default, Information}
