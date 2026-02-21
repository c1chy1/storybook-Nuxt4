import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {Spinner} from '../../components/artifact'

const meta: Meta<typeof Spinner> = {
    component: Spinner,
    parameters: {
        docs: {
            description: {
                component: 'The `<Spinner>` component is used to display a spinner.',
            },
        },
    },
    title: 'components/Artifact/Spinner',
} as Meta<typeof Spinner>

const Default: StoryFn<typeof Spinner> = args => ({
    components: {
        Spinner,
    },
    setup() {
        return {
            args,
        }
    },
    template: '<Spinner v-bind="args"/>',
})
Default.parameters = {
    docs: {
        description: {
            story: 'This is the default spinner component.',
        },
    },
}

const information = `
### None
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
