import type {Meta, StoryFn} from '@storybook/vue3-vite'
import type {IDropdownItem} from '../../../types/src'
import {fn} from '@storybook/test'
import {Dropdown} from '../../components/interaction'

const meta: Meta<typeof Dropdown> = {
    argTypes: {
        dividers: {
            control: {
                type: 'boolean',
            },
            description:
                'Defines whether the dropdown items should be seperated with dividers',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                type: {
                    summary: 'boolean | undefined',
                },
            },
        },
        finalDivider: {
            control: {
                type: 'boolean',
            },
            description:
                'Defines whether the last dropdown item should have a divider',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                type: {
                    summary: 'boolean | undefined',
                },
            },
        },
        items: {
            control: {
                type: 'object',
            },
            description: 'Defines the items of the dropdown',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'IDropdownItem[] | undefined',
                },
            },
        },
    },
    args: {},
    component: Dropdown,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Dropdown>` component is used to display a clickable menu of items.',
            },
        },
    },
    title: 'components/Interaction/Dropdown',
} as Meta<typeof Dropdown>

const Default: StoryFn<typeof Dropdown> = args => ({
    components: {
        Dropdown,
    },
    setup() {
        const onDropdownItemClick = fn<(item: IDropdownItem, event: any) => void>()

        return {
            args,
            onDropdownItemClick,
        }
    },
    template: `
      <Dropdown
          v-bind="args"
          @click:dropdown-item="onDropdownItemClick"
      />
    `,
})
Default.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'This is the default view of the dropdown component.',
        },
    },
}
Default.args = {
    items: [
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '1',
            onClick: fn<(item: any) => void>(),
            title: 'Item 1',
        },
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '2',
            onClick: fn<(item: any) => void>(),
            title: 'Item 2',
        },
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '3',
            onClick: fn<(item: any) => void>(),
            title: 'Item 3',
        },
    ],
}

const Dividers = Default.bind({})
Dividers.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'All items are separated by dividers.',
        },
    },
}
Dividers.args = {
    dividers: true,
    items: [
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '1',
            onClick: fn<(item: any) => void>(),
            title: 'Item 1',
        },
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '2',
            onClick: fn<(item: any) => void>(),
            title: 'Item 2',
        },
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '3',
            onClick: fn<(item: any) => void>(),
            title: 'Item 3',
        },
    ],
}

const FinalDivider = Default.bind({})
FinalDivider.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'The last item is separated by a divider.',
        },
    },
}
FinalDivider.args = {
    finalDivider: true,
    items: [
        {
            id: '1',
            onClick: fn<(item: any) => void>(),
            title: 'Item 1',
        },
        {
            id: '2',
            onClick: fn<(item: any) => void>(),
            title: 'Item 2',
        },
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '3',
            onClick: fn<(item: any) => void>(),
            title: 'Item 3',
        },
    ],
}

const ItemUrlSet = Default.bind({})
ItemUrlSet.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'If the url of an item is set, the dropdown item will be rendered as an anchor tag and will navigate to the url when clicked.',
        },
    },
}
ItemUrlSet.args = {
    items: [
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '1',
            title: 'Item 1',
            url: 'https://localhost:8080',
        },
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '2',
            title: 'Item 2',
            url: 'https://localhost:8080',
        },
        {
            icon: {
                title: 'material-symbols:label',
            },
            id: '3',
            title: 'Item 3',
            url: 'https://localhost:8080',
        },
    ],
}

const CustomSvg = Default.bind({})
CustomSvg.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'If the icon of an item is set, it is possible to pass a custom svg icon besides the material design icons.',
        },
    },
}
const gerFlag = `
      <svg width="10" height="10" viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg">
        <rect width="5" height="1" y="0" fill="#000000"/>
        <rect width="5" height="1" y="1" fill="#DD0000"/>
        <rect width="5" height="1" y="2" fill="#FFCE00"/>
      </svg>
    `
const engFlag = `
      <svg width="10" height="10" viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg">
        <rect width="5" height="3" fill="#012169"/>
        <polygon points="0,0 2,0 2,1 3,1 3,0 5,0 5,1 4,1 4,2 5,2 5,3 3,3 3,2 2,2 2,3 0,3 0,2 1,2 1,1 0,1" fill="#FFF"/>
        <polygon points="0,0 1,0 2.5,1 4,0 5,0 5,0.5 3.5,1.5 5,2.5 5,3 4,3 2.5,2 1,3 0,3 0,2.5 1.5,1.5 0,0.5" fill="#C8102E"/>
        <polygon points="2,0 3,0 3,1 5,1 5,2 3,2 3,3 2,3 2,2 0,2 0,1 2,1" fill="#FFF"/>
        <polygon points="2.5,0 2.5,1.5 0,1.5 0,1 2,1 2,0" fill="#C8102E"/>
        <polygon points="2.5,1.5 2.5,3 3,3 3,1.5 5,1.5 5,2 3,2 3,3" fill="#C8102E"/>
      </svg>
    `
CustomSvg.args = {
    items: [
        {
            icon: {
                source: gerFlag,
            },
            id: '1',
            title: 'German',
        },
        {
            icon: {
                source: engFlag,
            },
            id: '2',
            title: 'English',
        },
    ],
}

const information = `
    ### IPropsDropdown
    See above for the full interface definition.

    ### Events
    The following events will be emitted from the component:
    - \`@click:dropdown-item => item: IDropdownItem, event: any\` Triggered when a dropdown item is clicked

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
export {Default, CustomSvg, Dividers, FinalDivider, ItemUrlSet, Information}