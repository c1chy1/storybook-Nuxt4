import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {Paragraph} from '../../components/prose'
import {EParagraphs} from '../../../types/src'

const meta: Meta<typeof Paragraph> = {
    argTypes: {
        classification: {
            control: {
                type: 'select',
            },
            description:
                'Defines which HTML class tag the component should be rendered in',
            options: Object.values(EParagraphs),
            table: {
                defaultValue: {
                    summary: 'EParagraphs.BASIC',
                },
                type: {
                    summary: 'EParagraphs | undefined',
                },
            },
        },
        title: {
            control: {
                type: 'text',
            },
            description: 'The title of the paragraph',
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
        classification: EParagraphs.BASIC,
        title: 'Paragraph',
    },
    component: Paragraph,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Paragraph>` component is used to display a paragraph with different classifications.',
            },
        },
    },
    title: 'components/Prose/Paragraph',
} as Meta<typeof Paragraph>

const Default: StoryFn<typeof Paragraph> = args => ({
    components: {
        Paragraph,
    },
    setup() {
        return {
            args,
        }
    },
    template: `
      <Paragraph v-bind="args"/>`,
})
Default.args = {
    classification: EParagraphs.BASIC,
    title: 'Paragraph',
}
Default.parameters = {
    docs: {
        description: {
            story:
                'This is the default paragraph component with a basic classification.',
        },
    },
}

const Small = Default.bind({})
Small.args = {
    classification: EParagraphs.SMALL,
}
Small.parameters = {
    docs: {
        description: {
            story: 'This is a small paragraph.',
        },
    },
}

const Lead = Default.bind({})
Lead.args = {
    classification: EParagraphs.LEAD,
}
Lead.parameters = {
    docs: {
        description: {
            story: 'This is a lead paragraph.',
        },
    },
}

const Tiny = Default.bind({})
Tiny.args = {
    classification: EParagraphs.TINY,
}
Tiny.parameters = {
    docs: {
        description: {
            story: 'This is a tiny paragraph.',
        },
    },
}

const information = `
### IPropsParagraph
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
export {Default, Lead, Small, Tiny, Information}
