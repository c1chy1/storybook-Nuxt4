import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {fn} from '@storybook/test'
import {Button} from '../../components/artifact'
import {EButtons, ECorners, EPositions, ESizes} from '../../../types/src'

const meta: Meta<typeof Button> = {
    argTypes: {
        block: {
            control: {type: 'boolean'},
            description: 'Defines whether the button should expand over its container',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean | undefined'},
            },
        },
        click: {
            description: 'Function to call when the button is clicked',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'function | undefined'},
            },
        },
        corners: {
            control: {type: 'select'},
            description: 'Sets the corners of the button',
            options: [ECorners.NONE, ECorners.DEFAULT, ECorners.LARGE_ROUNDED],
            table: {
                defaultValue: {summary: 'ECorners.DEFAULT'},
                type: {summary: 'ECorners | undefined'},
            },
        },
        customTextStyle: {
            control: {type: 'text'},
            description: 'Allows custom text button styles',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'string | undefined'},
            },
        },
        disabled: {
            control: {type: 'boolean'},
            description: 'Defines whether the button should be disabled',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'boolean | undefined'},
            },
        },
        icon: {
            control: {type: 'object'},
            description: 'Sets an icon to be used within the button',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'IMedia | undefined'},
            },
        },
        iconPosition: {
            options: Object.values(EPositions).filter(pos =>
                [EPositions.NONE, EPositions.RIGHT, EPositions.LEFT].includes(pos),
            ),
            control: {type: 'select'},
            description: 'Sets the icon position',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'EPositions | undefined'},
            },
        },
        label: {
            control: {type: 'text'},
            description: 'Sets the label of the button',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'string | undefined'},
            },
        },
        outline: {
            control: {type: 'boolean'},
            description: 'Defines whether the button should be outlined',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'boolean | undefined'},
            },
        },
        size: {
            control: {type: 'select'},
            description: 'Sets the size of the button',
            options: [ESizes.SMALL, ESizes.DEFAULT, ESizes.BIG],
            table: {
                defaultValue: {summary: 'ESizes.DEFAULT'},
                type: {summary: 'ESizes | undefined'},
            },
        },
        type: {
            control: {type: 'select'},
            description: 'Type of the button',
            options: Object.values(EButtons),
            table: {
                defaultValue: {summary: 'EButtons.PRIMARY'},
                type: {summary: 'EActions | EColors | EButtons | undefined'},
            },
        },
    },
    args: {
        label: 'Button',
        // Storybook 10: use spy instead of addon-actions `action()`
        click: fn(),
    },
    component: Button,
    parameters: {
        docs: {
            description: {
                component: 'The `<PzButton>` component is used to trigger an action when clicked.',
            },
        },
    },
    title: 'components/Artifact/Button',
} as Meta<typeof Button>

const Default: StoryFn<typeof Button> = args => ({
    components: {Button},
    setup() {
        // Keep a dedicated handler for the emitted @click as well (separate from props.click)
        const onClick = fn<(event: MouseEvent) => void>()

        return {
            args,
            onClick,
        }
    },
    template: `
      <Button
          v-bind="args"
          @click="onClick($event)"
      />
    `,
})

Default.parameters = {
    docs: {
        canvas: {sourceState: 'hidden'},
        description: {
            story: 'This is the default view of the button component.',
        },
    },
}

const Icon = Default.bind({})
Icon.parameters = {
    docs: {
        canvas: {sourceState: 'hidden'},
        description: {
            story:
                'The button component has an icon version, in which the icon is displayed before or after the label.',
        },
    },
}
Icon.args = {
    ...Default.args,
    icon: {title: 'material-symbols:label'},
    label: 'Button',
}

const Outlined = Default.bind({})
Outlined.parameters = {
    docs: {
        canvas: {sourceState: 'hidden'},
        description: {
            story: 'The button component has an outlined version, in which the button is displayed with a border.',
        },
    },
}
Outlined.args = {
    ...Default.args,
    outline: true,
}

const Ghost = Default.bind({})
Ghost.parameters = {
    docs: {
        canvas: {sourceState: 'hidden'},
        description: {
            story:
                'The button component has a ghost version, in which the button is displayed without a background or border.',
        },
    },
}
Ghost.args = {
    ...Default.args,
    icon: {title: 'material-symbols:add'},
    type: EButtons.GHOST,
}

const Action = Default.bind({})
Action.parameters = {
    docs: {
        canvas: {sourceState: 'hidden'},
        description: {
            story:
                "If the type is set to `EButtons.ACTION`, the button will only show the icon and will be themed in the brand's primary colors.",
        },
    },
}
Action.args = {
    ...Default.args,
    icon: {title: 'material-symbols:mail'},
    type: EButtons.ACTION,
}

const Styled = Default.bind({})
Styled.parameters = {
    docs: {
        canvas: {sourceState: 'hidden'},
        description: {
            story: 'The button can be styled through various properties, here is an example:',
        },
    },
}
Styled.args = {
    ...Default.args,
    block: true,
    disabled: false,
    icon: {title: 'material-symbols:exclamation'},
    iconPosition: EPositions.LEFT,
    label: 'Button',
    outline: true,
    size: ESizes.DEFAULT,
    type: EButtons.ERROR,
    corners: ECorners.DEFAULT,
}

const information = `
### IPropsButton
See above for the full interface definition.

### Events
The following events will be emitted from the component:
- \`@click => event: MouseEvent\` Triggered when the button is clicked

### Further Information
- \`none\`
`

const Information: StoryFn = () => ({})
Information.decorators = [
    () => ({
        data() {
            return {showInfo: false}
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
        description: {story: information},
    },
}

export default meta
export {Default, Action, Ghost, Icon, Outlined, Styled, Information}