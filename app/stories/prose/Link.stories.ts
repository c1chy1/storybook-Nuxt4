import type {Meta, StoryFn} from '@storybook/vue3-vite'
import type {IDropdownItem, IPropsLink} from '../../../types/src'
import {ELinks, EPopovers, EPositions} from '../../../types/src'
import {fn} from '@storybook/test'
import {Link} from '../../components/'

const meta: Meta<typeof Link> = {
    argTypes: {
        dropdown: {
            control: {
                type: 'object',
            },
            description: 'Defines the dropdown properties for the link',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'IPropsDropdown | undefined',
                },
            },
        },
        highlight: {
            control: {
                type: 'boolean',
            },
            description: 'Defines if the link should be highlighted',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean | undefined',
                },
            },
        },
        label: {
            control: {
                type: 'text',
            },
            description: 'Sets the label of the link',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        icon: {
            control: {
                type: 'object',
            },
            description: 'Sets the icon or icon of the link',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'IMedia | undefined',
                },
            },
        },
        onClick: {
            action: 'click:link',
            description: 'Defines the click event for the link',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'function | undefined',
                },
            },
        },
        path: {
            control: {
                type: 'text',
            },
            description: 'Sets the path of the link',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        popoverType: {
            control: {
                type: 'select',
            },
            description:
                'Defines the popover type for the link if the type is set to `ELinks.DROPDOWN`',
            options: Object.values(EPopovers),
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'EPopovers | undefined',
                },
            },
        },
        type: {
            control: {
                type: 'select',
            },
            description: 'Defines the type of link',
            options: Object.values(ELinks),
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'ELinks | undefined',
                },
            },
        },
        url: {
            control: {
                type: 'text',
            },
            description: 'Sets the url of the link',
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
    component: Link,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Link>` component is used to display a link with optional types and stylings.',
            },
        },
    },
    title: 'components/Prose/Link',
} as Meta<typeof Link>

const Default: StoryFn<typeof Link> = args => ({
    components: {
        Link,
    },
    setup() {
        const onLinkClick = fn<(link: IPropsLink, event: any) => void>()
        const onDropdownItemClick = fn<(item: IDropdownItem, event: any) => void>()

        return {
            args,
            onLinkClick,
            onDropdownItemClick,
        }
    },
    template: `
      <Link
          v-bind="args"
          @click:link="onLinkClick"
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
            story: 'This is the default view of the link component.',
        },
    },
}
Default.args = {
    label: 'Default link',
    onClick: fn<() => void>(),
    icon: {
        title: 'material-symbols:home',
        position: EPositions.LEFT,
    },
    type: ELinks.DEFAULT,
}

const Dropdown = Default.bind({})
Dropdown.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'This is the view of the link component with a dropdown.',
        },
    },
}
Dropdown.args = {
    dropdown: {
        items: [
            {
                icon: {
                    title: 'material-symbols:label',
                },
                title: 'Item 1',
                onClick: fn<() => void>(),
            },
            {
                icon: {
                    title: 'material-symbols:label',
                },
                title: 'Item 2',
                onClick: fn<() => void>(),
            },
            {
                icon: {
                    title: 'material-symbols:label',
                },
                title: 'Item 3',
                onClick: fn<() => void>(),
            },
        ],
    },
    popoverType: EPopovers.HOVER,
    label: 'This is a dropdown link',
    onClick: fn<() => void>(),
    icon: {
        title: 'material-symbols:label',
        position: EPositions.LEFT,
    },
    type: ELinks.DROPDOWN,
}

const Sublink = Default.bind({})
Sublink.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'This is the view of the link component as a sub-link.',
        },
    },
}
Sublink.args = {
    label: 'This is a sublink',
    onClick: fn<() => void>(),
    type: ELinks.SUBLINK,
}

const Textlink = Default.bind({})
Textlink.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'This is the view of the link component as a text link.',
        },
    },
}
Textlink.args = {
    label: 'This is a text link',
    onClick: fn<() => void>(),
    type: ELinks.TEXTLINK,
}

const Inverted: StoryFn<typeof Link> = args => ({
    components: {
        Link,
    },
    setup() {
        const onLinkClick = fn<(link: IPropsLink, event: any) => void>()

        return {
            args,
            onLinkClick,
        }
    },
    template: `
      <div class="bg-black w-full h-10 flex items-center">
        <Link
            v-bind="args"
            class="mx-2"
            @click:link="onLinkClick"
        />
      </div>
    `,
})
Inverted.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'This is the view of the link component with an inverted style.',
        },
    },
}
Inverted.args = {
    label: 'Inverted link',
    icon: {
        title: 'material-symbols:home',
        position: EPositions.LEFT,
    },
    onClick: fn<() => void>(),
    type: ELinks.INVERTED,
}

const Highlighted = Default.bind({})
Highlighted.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'When highlighted is set to true, the link icon will be highlighted.',
        },
    },
}
Highlighted.args = {
    highlight: true,
    label: 'Highlighted link',
    icon: {
        title: 'material-symbols:home',
        position: EPositions.LEFT,
    },
    onClick: fn<() => void>(),
    type: ELinks.DEFAULT,
}

const information = `
    ### IPropsLink
    See above for the full interface definition.

    ### Events
    The following events will be emitted from the component:
    - \`@click:link => props: IPropsLink, event: any\` Triggered when the link is clicked
    - \`@click:dropdown-item => item: IDropdownItem, event: any\` Triggered when a dropdown item is clicked

    ### Further Information
    - If a \`path\` is set, the link will trigger the click event, else the \`url\` will be used for redirection.
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
export {Default, Dropdown, Highlighted, Inverted, Sublink, Textlink, Information}