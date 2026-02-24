import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {Headline} from '../../components/prose'
import {EHeadlines} from '../../../types/src'

const meta: Meta<typeof Headline> = {
    argTypes: {
        classification: {
            control: {
                type: 'select',
            },
            description:
                'Defines which HTML class tag the component should be rendered in',
            options: Object.values(EHeadlines),
            table: {
                defaultValue: {
                    summary: 'EHeadlines.H1',
                },
                type: {
                    summary: 'EHeadlines | undefined',
                },
            },
        },
        format: {
            control: {
                type: 'select',
            },
            description:
                'Defines which HTML class tag the component should be shown as',
            options: Object.values(EHeadlines),
            table: {
                defaultValue: {
                    summary: 'EHeadlines.H1',
                },
                type: {
                    summary: 'EHeadlines | undefined',
                },
            },
        },
        title: {
            control: {
                type: 'text',
            },
            description: 'Sets the title of the headline',
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
    args: {},
    component: Headline,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Headline>` component is used to display a headline with a specific format and classification.',
            },
        },
    },
    title: 'components/Prose/Headline',
} as Meta<typeof Headline>

const Default: StoryFn<typeof Headline> = args => ({
    components: {
        Headline,
    },
    setup() {
        return {
            args,
        }
    },
    template: `
      <Headline v-bind="args"/>`,
})
Default.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'This is the view of the headline component with H1 classification and format.',
        },
    },
}
Default.args = {
    classification: EHeadlines.H1,
    format: EHeadlines.H1,
    title: 'Headline',
}

const H2 = Default.bind({})
H2.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'This is the view of the headline component with H2 classification and format.',
        },
    },
}
H2.args = {
    classification: EHeadlines.H2,
    format: EHeadlines.H2,
    title: 'Headline',
}

const H3 = Default.bind({})
H3.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'This is the view of the headline component with H3 classification and format.',
        },
    },
}
H3.args = {
    classification: EHeadlines.H3,
    format: EHeadlines.H3,
    title: 'Headline',
}

const H4 = Default.bind({})
H4.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'This is the view of the headline component with H4 classification and format.',
        },
    },
}
H4.args = {
    classification: EHeadlines.H4,
    format: EHeadlines.H4,
    title: 'Headline',
}

const H5 = Default.bind({})
H5.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'This is the view of the headline component with H5 classification and format.',
        },
    },
}
H5.args = {
    classification: EHeadlines.H5,
    format: EHeadlines.H5,
    title: 'Headline',
}

const H6 = Default.bind({})
H6.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'This is the view of the headline component with H6 classification and format.',
        },
    },
}
H6.args = {
    classification: EHeadlines.H6,
    format: EHeadlines.H6,
    title: 'Headline',
}

const information = `
### IPropsHeadline
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
export {Default, H2, H3, H4, H5, H6, Information}
