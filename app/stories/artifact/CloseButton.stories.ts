import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {fn} from '@storybook/test'
import {CloseButton} from '../../components/artifact'
import {EColors} from '../../../types/src'

const meta: Meta<typeof CloseButton> = {
    components: {
        CloseButton,
    },
    argTypes: {
        disabled: {
            control: {type: 'boolean'},
            description: 'Defines whether the button should be disabled',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'boolean | undefined'},
            },
        },
        onClick: {
            description: 'Function to call when the button is clicked',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'function | undefined'},
            },
        },
        theme: {
            control: {type: 'select'},
            description: 'Sets the theme of the close button',
            options: Object.values(EColors),
            table: {
                defaultValue: {summary: 'EColors.DARK'},
                type: {summary: 'EColors | undefined'},
            },
        },
    },
    args: {
        onClick: fn(),
        theme: EColors.DARK,
    },
    component: CloseButton,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<CloseButton>` component is used to display a close button. It can be used to close a modal or dismiss a notification.',
            },
        },
    },
    title: 'components/Artifact/CloseButton',
} as Meta<typeof CloseButton>

const Default: StoryFn<typeof CloseButton> = args => ({
    components: {
        CloseButton,
    },
    setup() {
        const onDismiss = fn<() => void>()

        return {
            args,
            onDismiss,
        }
    },
    template: `
      <CloseButton
          v-bind="args"
          @click:dismiss="onDismiss"
      />
    `,
})
Default.parameters = {
    docs: {
        canvas: {sourceState: 'hidden'},
        description: {
            story: 'This is the default view of the close button component.',
        },
    },
}

const Light: StoryFn<typeof CloseButton> = args => ({
    components: {
        CloseButton,
    },
    setup() {
        const onDismiss = fn<() => void>()

        return {
            args,
            onDismiss,
        }
    },
    template: `
      <div class="bg-additional-black rounded-lg">
        <CloseButton
            v-bind="args"
            @click:dismiss="onDismiss"
        />
      </div>
    `,
})
Light.args = {
    theme: EColors.LIGHT,
}
Light.parameters = {
    docs: {
        canvas: {sourceState: 'shown'},
        description: {
            story: 'This is the light version of the close button component.',
        },
    },
}

const information = `
### IPropsCloseButton
See above for the full interface definition.

### Events
The following events will be emitted from the component:
- \`@click:dismiss\` Emitted when the close button is clicked

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
        canvas: {sourceState: 'hidden'},
        description: {
            story: information,
        },
    },
}

export default meta
export {Default, Light, Information}