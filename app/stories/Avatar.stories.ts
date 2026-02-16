import type {Meta, StoryFn} from '@storybook/vue3'
import Avatar from "../components/artifact/Avatar.vue"
import {EAvatars, EFittings} from '../../types/src'

const meta: Meta<typeof Avatar> = {
    argTypes: {
        avatar: {
            control: {
                type: 'object',
            },
            description: 'Sets the avatar image and/or styling via customStyle',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'IMedia | undefined',
                },
            },
        },
        initials: {
            control: {
                type: 'text',
            },
            description: 'Sets the initials of the user',
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
            description: 'Sets the title of the user',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        type: {
            control: {
                type: 'select',
            },
            options: Object.values(EAvatars),
            description: 'Defines the type of the component',
            table: {
                defaultValue: {
                    summary: 'EAvatars.INITIALS',
                },
                type: {
                    summary: 'EAvatars | undefined',
                },
            },
        },
    },
    args: {
        avatar: {
            fit: EFittings.COVER,
            source: '',
        },
        initials: 'MM',
        title: 'Max Mustermann',
        type: EAvatars.AVATAR,
    },
    component: Avatar,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Avatar>` component is used to display a small image or initials with a label of a user.',
            },
        },
    },
    title: 'components/Artifact/Avatar',
} as Meta<typeof Avatar>

const Image: StoryFn<typeof Avatar> = args => ({
    components: {
        Avatar,
    },
    setup() {
        return {
            args,
        }
    },
    template: '<Avatar v-bind="args"/>',
})
Image.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'This is the default view of the avatar component.',
        },
    },
}

const Initials = Image.bind({})
Initials.args = {
    avatar: {
        customStyle: 'background-color: #e00; color: #fff',
    },
    type: EAvatars.INITIALS,
}
Initials.parameters = {
    docs: {
        canvas: {
            sourceState: 'shown',
        },
        description: {
            story: 'If no image is set, the initials will be displayed instead.',
        },
    },
}

const information = `
### IPropsAvatar
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
export {Image, Initials, Information}
