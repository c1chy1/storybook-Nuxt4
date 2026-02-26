import type {Meta, StoryFn} from '@storybook/vue3-vite'
import type {INavigation} from '../../../types/src'
import {EAvatars, ELinks, EMedia, ENavigations, EPopovers, EPositions} from '../../../types/src'
import {fn} from '@storybook/test'
import {BasicPage} from '../../components/compositions'

const meta: Meta<typeof BasicPage> = {
    argTypes: {
        footerProps: {
            control: {
                type: 'object',
            },
            description: 'Defines the props of the footer',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'IPropsFooter | undefined',
                },
            },
        },
        headerProps: {
            control: {
                type: 'object',
            },
            description: 'Defines the props of the header',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'IPropsHeader | undefined',
                },
            },
        },
    },
    args: {
        headerProps: {
            avatar: {
                avatar: {
                    source:
                        '/images/storybook/example.jpg',
                },
                title: 'max.mustermann@gmail.com',
                initials: 'MM',
                type: EAvatars.AVATAR,
            },
            bar: {
                title: 'Willkommen',
                links: [
                    {
                        icon: {
                            position: EPositions.LEFT,
                            title: 'material-symbols:home',
                        },
                        label: 'International',
                        path: '/home',
                        type: ELinks.DEFAULT,
                    },
                    {
                        label: 'Kontakt',
                        icon: {
                            position: EPositions.LEFT,
                            title: 'material-symbols:mail',
                        },
                        path: '/contact',
                        type: ELinks.DEFAULT,
                    },
                    {
                        dropdown: {
                            dividers: true,
                            items: [
                                {
                                    icon: {
                                        title: 'material-symbols:label',
                                    },
                                    title: 'First Item',
                                },
                            ],
                        },
                        label: 'Deutschland',
                        icon: {
                            position: EPositions.LEFT,
                            source: `<svg width="16" height="16" viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg"><rect width="5" height="1" y="0" fill="#000000"/>
                            <rect width="5" height="1" y="1" fill="#DD0000"/>
                            <rect width="5" height="1" y="2" fill="#FFCE00"/>
                         </svg>`,
                        },
                        popoverType: EPopovers.HOVER,
                        type: ELinks.DROPDOWN,
                        url: '',
                    },
                ],
            },
            dropdown: {
                dividers: false,
                finalDivider: false,
                items: [
                    {
                        icon: {
                            title: 'material-symbols:label',
                        },
                        onClick: (item: INavigation) =>
                            console.debug('Dropdown item clicked', item),
                        title: 'Company profile',
                    },
                    {
                        icon: {
                            title: 'material-symbols:label',
                        },
                        onClick: (item: INavigation) =>
                            console.debug('Dropdown item clicked', item),
                        title: 'User profile',
                    },
                    {
                        icon: {
                            title: 'material-symbols:label',
                        },
                        onClick: (item: INavigation) =>
                            console.debug('Dropdown item clicked', item),
                        title: 'User management',
                    },
                ],
            },
            items: [
                {
                    children: [
                        {
                            path: '/no-url',
                            title: 'Service 1',
                            url: '',
                        },
                        {
                            title: 'Service 2',
                            url: '',
                        },
                    ],
                    active: true,
                    path: '/services',
                    title: 'Services',
                    url: '',
                },
                {
                    title: 'Contact',
                    url: '',
                },
                {
                    title: 'About us',
                    url: '',
                    children: [
                        {
                            title: 'Our mission',
                            url: '',
                            children: [
                                {
                                    title: 'Social resp.',
                                    url: '',
                                },
                                {
                                    title: 'Saving the planet',
                                    url: '',
                                },
                            ],
                        },
                        {
                            title: 'Team',
                            url: '',
                            children: [
                                {
                                    title: 'Our team',
                                    url: '',
                                },
                                {
                                    title: 'Your career',
                                    url: '',
                                    children: [
                                        {
                                            title: 'Job vacancies',
                                            url: '',
                                        },
                                        {
                                            title: 'Internship',
                                            url: '',
                                            children: [{
                                                title: 'Unsolicited application',
                                                url: '',
                                            }],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Header-Logo',
                path: '/home',
                source: '',
                type: EMedia.PNG,
                url: '',
            },
            popoverType: EPopovers.HOVER,
            type: ENavigations.WITH_BAR,
        },
        footerProps: {
            bar: {
                links: [
                    {
                        label: 'Über uns',
                        url: 'https://c1chy.de',
                        type: ELinks.INVERTED,
                    },
                    {
                        label: 'Impressum',
                        url: '/imprint',
                        type: ELinks.INVERTED,
                    },
                    {
                        label: 'Datenschutz',
                        url: '/privacy',
                        type: ELinks.INVERTED,
                    },
                    {
                        label: 'Compliance',
                        url: '',
                        type: ELinks.INVERTED,
                    },
                    {
                        label: 'Lieferkette',
                        url: '',
                        type: ELinks.INVERTED,
                    },
                    {
                        label: 'Kontakt',
                        url: '',
                        type: ELinks.INVERTED,
                    },
                ],
            },
            items: [
                {
                    items: [
                        {
                            title: 'Recycling',
                            url: 'http://localhost',
                        },
                        {
                            title: 'Dual',
                            url: 'http://localhost',
                        },
                        {
                            title: 'Waste Management',
                            url: 'http://localhost',
                        },
                    ],
                    title: 'Services',
                },
                {
                    items: [
                        {
                            title: 'Job Summary',
                            url: 'http://localhost',
                        },
                        {
                            title: 'Locations',
                            url: 'http://localhost',
                        },
                        {
                            title: 'Sustainability',
                            url: 'http://localhost',
                        },
                        {
                            title: 'Help & Contact',
                            url: 'http://localhost',
                        },
                        {
                            title: 'Blog',
                            url: 'http://localhost',
                        },
                    ],
                    title: 'Company',
                },
                {
                    items: [
                        {
                            title: 'Privacy policy',
                            url: 'http://localhost',
                        },
                        {
                            title: 'Legal notice',
                            url: 'http://localhost',
                        },
                        {
                            title: 'Compliance',
                            url: 'http://localhost',
                        },
                    ],
                    title: 'Legal',
                },
                {
                    items: [
                        {
                            title: 'facebook',
                            path: '/facebook',
                            url: '',
                        },
                        {
                            highlight: true,
                            title: 'instagram',
                            path: '/instagram',
                            url: '',
                        },
                        {
                            title: 'linkedIn',
                            path: '/linkedIn',
                            url: '',
                        },
                        {
                            title: 'x/twitter',
                            path: '/twitter',
                            url: '',
                        },
                        {
                            title: 'youtube',
                        },
                    ],
                    title: 'Social Media',
                },
                {
                    items: [
                        {
                            title:
                                'Do you have any questions or comments about our website, products or services?',
                        },
                        {
                            highlight: true,
                            title: 'info@c1chy.com',
                        },
                        {
                            highlight: true,
                            title: '0511 959023212',
                        },
                    ],
                    title: 'Contact',
                },
            ],
            logo: {
                alt: '',
                source: '/images/storybook/example.jpg',
            },
            type: ENavigations.WITH_BAR,
        },
    },
    component: BasicPage,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<BasicPage>` composition component is a base component providing a basic layout with a header and footer.',
            },
        },
    },
    title: 'compositions/BasicPage',
} as Meta<typeof BasicPage>

const Default: StoryFn<typeof BasicPage> = (args: any) => ({
    components: {
        BasicPage,
    },
    setup() {
        const onHeaderBarItemClickSpy = fn<(item: INavigation, event: Event) => void>()
        const onHeaderBarDropdownItemClickSpy = fn<(item: INavigation, event: Event) => void>()
        const onHeaderNavItemClickSpy = fn<(item: INavigation, event: Event) => void>()
        const onHeaderNavDropdownItemClickSpy = fn<(item: INavigation, event: Event) => void>()
        const onFooterBarItemClickSpy = fn<(item: INavigation, event: Event) => void>()
        const onFooterBarDropdownItemClickSpy = fn<(item: INavigation, event: Event) => void>()
        const onFooterNavItemClickSpy = fn<(item: INavigation, event: Event) => void>()
        const onFooterNavDropdownItemClickSpy = fn<(item: INavigation, event: Event) => void>()

        return {
            args,
            onHeaderBarItemClickSpy,
            onHeaderBarDropdownItemClickSpy,
            onHeaderNavItemClickSpy,
            onHeaderNavDropdownItemClickSpy,
            onFooterBarItemClickSpy,
            onFooterBarDropdownItemClickSpy,
            onFooterNavItemClickSpy,
            onFooterNavDropdownItemClickSpy,
        }
    },
    methods: {
        onHeaderBarItemClick(this: any, item: INavigation, event: Event) {
            console.debug('header bar item clicked', item, event)
            this.onHeaderBarItemClickSpy(item, event)
        },
        onHeaderBarDropdownItemClick(this: any, item: INavigation, event: Event) {
            console.debug('header bar dropdown item clicked', item, event)
            this.onHeaderBarDropdownItemClickSpy(item, event)
        },
        onHeaderNavItemClick(this: any, item: INavigation, event: Event) {
            console.debug('header nav item clicked', item, event)
            this.onHeaderNavItemClickSpy(item, event)
        },
        onHeaderNavDropdownItemClick(this: any, item: INavigation, event: Event) {
            console.debug('header nav dropdown item clicked', item, event)
            this.onHeaderNavDropdownItemClickSpy(item, event)
        },
        onFooterBarItemClick(this: any, item: INavigation, event: Event) {
            console.debug('footer bar item clicked', item, event)
            this.onFooterBarItemClickSpy(item, event)
        },
        onFooterBarDropdownItemClick(this: any, item: INavigation, event: Event) {
            console.debug('footer bar dropdown item clicked', item, event)
            this.onFooterBarDropdownItemClickSpy(item, event)
        },
        onFooterNavItemClick(this: any, item: INavigation, event: Event) {
            console.debug('footer nav item clicked', item, event)
            this.onFooterNavItemClickSpy(item, event)
        },
        onFooterNavDropdownItemClick(this: any, item: INavigation, event: Event) {
            console.debug('footer nav dropdown item clicked', item, event)
            this.onFooterNavDropdownItemClickSpy(item, event)
        },
    },
    template: `
      <div class="h-screen">
        <BasicPage
            v-bind="args"
            @click:header-bar-item="onHeaderBarItemClick"
            @click:header-bar-dropdown-item="onHeaderBarDropdownItemClick"
            @click:header-nav-item="onHeaderNavItemClick"
            @click:header-nav-dropdown-item="onHeaderNavDropdownItemClick"
            @click:footer-bar-item="onFooterBarItemClick"
            @click:footer-bar-dropdown-item="onFooterBarDropdownItemClick"
            @click:footer-nav-item="onFooterNavItemClick"
            @click:footer-nav-dropdown-item="onFooterNavDropdownItemClick"
        >
          <div class="h-40"></div>
        </BasicPage>
      </div>
    `,
})
Default.parameters = {
    docs: {
        description: {
            story: 'This shows an example of a basic page.',
        },
    },
}

const information = `
### IPropsBasicPage
See above for the full interface definition.

### Events
The following events will be emitted from the component:
- \`@click:header-bar-item => item: INavigation, event: Event\` Emitted when a header bar item is clicked
- \`@click:header-bar-dropdown-item => item: INavigation, event: Event\` Emitted when a header bar dropdown item is clicked
- \`@click:header-nav-item => item: INavigation, event: Event\` Emitted when a header navigation item is clicked
- \`@click:header-nav-dropdown-item => item: INavigation, event: Event\` Emitted when a header navigation dropdown item is clicked
- \`@click:footer-bar-item => item: INavigation, event: Event\` Emitted when a footer bar item is clicked
- \`@click:footer-bar-dropdown-item => item: INavigation, event: Event\` Emitted when a footer bar dropdown item is clicked
- \`@click:footer-nav-item => item: INavigation, event: Event\` Emitted when a footer navigation item is clicked
- \`@click:footer-nav-dropdown-item => item: INavigation, event: Event\` Emitted when a footer navigation dropdown item is clicked

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
