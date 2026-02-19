import type {Meta, StoryFn} from '@storybook/vue3-vite'
import type {IMedia, IPropsBadge, IPropsCloseButton} from '../../../types/src'
import {EColors, EPositions, ESizes} from '../../../types/src'
/*import { action } from '@storybook/addon-actions'*/
import {Badge} from '../../components/artifact'

const meta: Meta<typeof Badge> = {
    argTypes: {
        closeButton: {
            control: {
                type: 'object',
            },
            description: 'Sets the close button of the badge',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'IPropsCloseButton | undefined',
                },
            },
        },
        icon: {
            control: {
                type: 'object',
            },
            description: 'Sets the icon of the badge',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'IMedia | undefined',
                },
            },
        },
        iconPosition: {
            control: {
                type: 'select',
            },
            description: 'Sets the position of the icon',
            options: [EPositions.LEFT, EPositions.RIGHT],
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'EPositions | undefined',
                },
            },
        },
        label: {
            control: {
                type: 'text',
            },
            description: 'Sets the label of the badge',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        pill: {
            control: {
                type: 'boolean',
            },
            description: 'Defines whether the badge should be pill-shaped',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean | undefined',
                },
            },
        },
        size: {
            control: {
                type: 'select',
            },
            description: 'Sets the size of the badge',
            options: [ESizes.SMALL, ESizes.DEFAULT, ESizes.BIG],
            table: {
                defaultValue: {
                    summary: 'ESizes.DEFAULT',
                },
                type: {
                    summary: 'ESizes | undefined',
                },
            },
        },
        type: {
            control: {
                type: 'select',
            },
            description: 'Sets the type of the badge',
            options: [
                EColors.PRIMARY,
                EColors.SECONDARY,
                EColors.SUCCESS,
                EColors.DANGER,
                EColors.WARNING,
                EColors.INFO,
                EColors.LIGHT,
                EColors.DARK,
            ],
            table: {
                defaultValue: {
                    summary: 'EColors.PRIMARY',
                },
                type: {
                    summary: 'EColors | undefined',
                },
            },
        },
    },
    args: {
        size: ESizes.DEFAULT,
        type: EColors.PRIMARY,
    },
    component: Badge,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Badge>` component is used to display a small notification with a label, an optional icon and a optional close button.',
            },
        },
    },
    title: 'components/Artifact/Badge',
} as Meta<typeof Badge>

const Default: StoryFn<typeof Badge> = (args: any) => ({
    components: {
        Badge,
    },
    setup() {
        return {
            args,
        }
    },
    methods: {
        onClick(badge: IPropsBadge) {
            console.debug('Storybook: @click - badge clicked', badge)
        },
        onIconClick(icon?: IMedia) {
            console.debug('Storybook: @click:icon - icon clicked', icon)
        },
        onClose(closeButton?: IPropsCloseButton) {
            console.debug('Storybook: @close - close button clicked', closeButton)
        },
    },
    template: `
      <Badge
          v-bind="args"
          @click="onClick"
          @click:icon="onIconClick"
          @close="onClose"
      />
    `,
})
Default.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'This is the default view of the badge component.',
        },
    },
}
Default.args = {
    label: 'Badge',
}

const Pill = Default.bind({})
Pill.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'The badge component has a pill-shaped version, in which the badge is displayed in a rounded shape.',
        },
    },
}
Pill.args = {
    label: 'Badge',
    pill: true,
}

const Icon = Default.bind({})
Icon.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'The badge component has an icon version, in which the badge is displayed with an icon.',
        },
    },
}
Icon.args = {
    ...Default.args,
    icon: {
        title: 'material-symbols:label',
    },
    label: 'Badge',
}

const CloseButton = Default.bind({})
CloseButton.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'The badge component has a close button version, in which the badge is displayed with a close button.',
        },
    },
}
CloseButton.args = {
    ...Default.args,
    closeButton: {
        disabled: false,
        theme: EColors.LIGHT,
    },
}

const Styled = Default.bind({})
Styled.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'The badge component can be styled with different colors and sizes.',
        },
    },
}
Styled.args = {
    ...Default.args,
    size: ESizes.SMALL,
    type: EColors.SUCCESS,
}

const information = `
### IPropsBadge
See above for the full interface definition.

### Events
The following events will be emitted from the component:
- \`@click:icon => icon?: IMedia\` Triggered when the icon is clicked
- \`@click => props: IPropsBadge\` Triggered when the badge is clicked
- \`@close => closeButton?: IPropsCloseButton\` Triggered when the close button is clicked

### Further Information
- The color of the badge can be set with the \`type\` property
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
export {Default, CloseButton, Icon, Pill, Styled, Information}
