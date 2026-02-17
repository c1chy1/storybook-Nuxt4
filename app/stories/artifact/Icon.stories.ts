import type {Meta, StoryFn} from '@storybook/vue3'
import {Icon} from '../../components/artifact'

const meta: Meta<typeof Icon> = {
    argTypes: {
        alt: {
            control: {
                type: 'text',
            },
            description:
                'Sets the alternative text of the icon via the `alt` attribute',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        customStyles: {
            control: {
                type: 'text',
            },
            description: 'Sets the custom style of the icon',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        rotate: {
            control: {
                type: 'boolean',
            },
            description:
                'Animates the element by rotating it clockwise around its center (only iconify icons)',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean | undefined',
                },
            },
        },
        source: {
            control: {
                type: 'text',
            },
            description:
                'Holds the source path to an image, icon or specifies an inline svg-template',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        title: {
            control: {
                type: 'text',
            },
            description: 'Sets the title or iconify icon title',
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
        title: 'material-symbols:label',
    },
    component: Icon,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Icon>` component is used to display an icon element. The icon information can either be given as a `<svg>` template, a source for an `<image>` or via iconify icons.'
                    + '\n\rThis component uses the iconify library to display icons (https://icon-sets.iconify.design/mdi/)',
            },
        },
    },
    title: 'components/Artifact/Icon',
} as Meta<typeof Icon>

const Default: StoryFn<typeof Icon> = args => ({
    components: {
        Icon,
    },
    setup() {
        return {
            args,
        }
    },
    template: '<Icon v-bind="args"/>',
})

Default.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: '',
        },
    },
}

const information = `
### IPropsIcon -> IMedia
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
