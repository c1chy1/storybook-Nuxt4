import type {Meta, StoryFn} from '@storybook/vue3-vite'
import type {IPropsImage} from '../../../types/src'
import {EFittings, EMedia} from '../../../types/src'
import {fn} from '@storybook/test'
import {Image} from '../../components/prose'

const meta: Meta<typeof Image> = {
    argTypes: {
        onClick: {
            action: 'click:image',
            table: {category: 'Events'},
            description: 'Triggered when the image emits click:image',
        },
        alt: {
            control: {
                type: 'text',
            },
            description: 'Sets the alt text of           the image',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        blob: {
            control: {
                type: 'object',
            },
            description: 'Sets the blob data of the image',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | Blob | undefined',
                },
            },
        },
        customStyle: {
            control: {
                type: 'text',
            },
            description: 'Sets the custom style of the image',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        download: {
            control: {
                type: 'boolean',
            },
            description: 'Downloads the image on click',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean | undefined',
                },
            },
        },
        expanded: {
            control: {
                type: 'boolean',
            },
            description: 'If set, the image will be displayed in an expanded view',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean | undefined',
                },
            },
        },
        fit: {
            control: {
                type: 'select',
            },
            description: 'Sets the image fitting in the container',
            options: Object.values(EFittings),
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'EFittings | undefined',
                },
            },
        },
        fullscreen: {
            control: {
                type: 'boolean',
            },
            description:
                'If set, the fullscreen button will be displayed and borders will be drawn',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'boolean | undefined',
                },
            },
        },
        height: {
            control: {
                type: 'number',
            },
            description: 'Sets the height of the image',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'number | undefined',
                },
            },
        },
        id: {
            control: {
                type: 'text',
            },
            description: 'Sets the unique id',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        label: {
            control: {
                type: 'text',
            },
            description: 'Sets the label of the image',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'string | undefined',
                },
            },
        },
        openInNewTab: {
            control: {
                type: 'boolean',
            },
            description: 'Opens the image in a new tab',
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
            description: 'Holds the source path to an image',
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
            description: 'Defines the type represented by a MIME type',
            options: Object.values(EMedia),
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'EMedia | undefined',
                },
            },
        },
        width: {
            control: {
                type: 'number',
            },
            description: 'Sets the width of the image',
            table: {
                defaultValue: {
                    summary: 'undefined',
                },
                type: {
                    summary: 'number | undefined',
                },
            },
        },
    },
    args: {
        alt: 'Image',
        fit: EFittings.CONTAIN,
        height: '200',
        id: 'image',
        label: 'Label',
        source:
            '/public/images/storybook/example.jpg',
        type: EMedia.IMAGE,
        width: '200',
        onClick: fn()
    },
    component: Image,
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Image>` component is used to display an image element with actions.',
            },
        },
    },
    title: 'components/Prose/Image',
} as Meta<typeof Image>

const Default: StoryFn<typeof Image> = (args) => ({
    components: {
        Image,
    },
    methods: {
        onClick(image: IPropsImage) {
            console.debug('Storybook: @click:image - Image clicked', image)
            args.onClick(image)
        },
    },
    setup() {
        return {
            args,
        }
    },
    template: `
      <Image
          v-bind="args"
          @click:image="onClick"
      />
    `,
})
Default.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story: 'This is a settable view of the image component.',
        },
    },
}
Default.args = {
    fullscreen: true,
}

const Expanded = Default.bind({})
Expanded.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'If `expanded` is set to true, the image will be initially displayed in an expanded view.',
        },
    },
}
Expanded.args = {
    expanded: true,
}

const OpenInNewTab = Default.bind({})
OpenInNewTab.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'If `openInNewTab` is set to true, the image will be opened in a new tab.',
        },
    },
}
OpenInNewTab.args = {
    openInNewTab: true,
}

const NoFullscreen = Default.bind({})
NoFullscreen.parameters = {
    docs: {
        canvas: {
            sourceState: 'hidden',
        },
        description: {
            story:
                'If `fullscreen` is not set, the fullscreen button will not be displayed and the image can for example be used in another container.',
        },
    },
}
NoFullscreen.args = {
    fullscreen: false,
    label: '',
}

const information = `
### IPropsImage
See above for the full interface definition.

### Events
The following events will be emitted from the component:
- \`@click:image => props: IPropsImage\` Triggered when the image is clicked

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
export {Default, Expanded, NoFullscreen, OpenInNewTab, Information}
