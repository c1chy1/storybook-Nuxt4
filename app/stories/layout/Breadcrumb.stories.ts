import type {Meta, StoryFn} from '@storybook/vue3-vite'
import type {IPropsNavItem} from '../../../types/src'
import {fn} from '@storybook/test'
import {Breadcrumb} from '../../components/layout'

const meta: Meta<typeof Breadcrumb> = {
    argTypes: {
        items: {
            control: {
                type: 'object',
            },
            description: 'Defines the items in the breadcrumb',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'INavigation[] | undefined',
                },
            },
        },
        root: {
            control: {
                type: 'object',
            },
            description: 'Sets the information of the root element',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'INavigation | undefined',
                },
            },
        },
    },
    args: {
        items: [
            {
                title: 'Page',
                path: '/page',
            },
            {
                title: 'Subpage',
                url: '/subpage',
            },
        ],
        root: {
            title: 'Home',
            path: '/home',
        },
    },
    component: Breadcrumb,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Breadcrumb>` component is used to display a breadcrumb navigation. It can be used to show the current page location and navigate back to the root page.',
            },
        },
    },
    title: 'components/Layout/Breadcrumb',
} as Meta<typeof Breadcrumb>

const Default: StoryFn<typeof Breadcrumb> = args => ({
    components: {
        Breadcrumb,
    },
    setup() {
        const onClick = fn<(item: IPropsNavItem) => void>()

        return {
            args,
            onClick,
        }
    },
    template: '<Breadcrumb v-bind="args" @click="onClick" />',
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
### IPropsBreadcrumb
See above for the full interface definition.

### Events
The following events will be emitted from the component:
- \`@click => item: IPropsNavItem\` Emitted when a navigation item is clicked

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