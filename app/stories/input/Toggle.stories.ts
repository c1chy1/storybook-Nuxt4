import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {fn} from '@storybook/test'
import {Toggle} from '../../components/input'
import {EColors} from '../../../types/src'
import {ref, watch} from 'vue'

const meta: Meta<typeof Toggle> = {
    argTypes: {
        activeIcon: {
            control: {type: 'object'},
            description: 'Defines the active icon of the toggle',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'IMedia | undefined'},
            },
        },
        defaultIcon: {
            control: {type: 'object'},
            description: 'Defines the default (inactive) icon of the toggle',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'IMedia | undefined'},
            },
        },
        disabled: {
            control: {type: 'boolean'},
            description: 'Defines whether the input toggle is disabled',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean | undefined'},
            },
        },
        error: {
            control: {type: 'boolean'},
            description: 'Defines whether the input toggle has an error',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'boolean | undefined'},
            },
        },
        icon: {
            control: {type: 'boolean'},
            description: 'Toggles the icon visibility',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'boolean | undefined'},
            },
        },
        id: {
            control: {type: 'text'},
            description: 'Sets the unique id',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'string | undefined'},
            },
        },
        label: {
            control: {type: 'text'},
            description: 'Sets the label of the input toggle',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'string | undefined'},
            },
        },
        modelValue: {
            control: {type: 'boolean'},
            description:
                'The model value to be used with v-model, also defines the initial value',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'boolean | undefined'},
            },
        },
        name: {
            control: {type: 'text'},
            description: 'Sets the name attribute',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'string | undefined'},
            },
        },
        required: {
            control: {type: 'boolean'},
            description: 'Defines whether the input toggle is required',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'boolean | undefined'},
            },
        },
        tooltip: {
            control: {type: 'text'},
            description: 'Sets the tooltip text',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'string | undefined'},
            },
        },
        type: {
            control: {type: 'select'},
            options: [EColors.INFO, EColors.SUCCESS, EColors.WARNING, EColors.DANGER],
            description: 'Defines the type of the input toggle',
            table: {
                defaultValue: {summary: 'EColors.SUCCESS'},
                type: {
                    summary:
                        'EColors.INFO | EColors.SUCCESS | EColors.WARNING | EColors.DANGER',
                },
            },
        },
        warning: {
            control: {type: 'boolean'},
            description: 'Defines whether the input toggle has a warning',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'boolean | undefined'},
            },
        },
    },
    args: {
        activeIcon: {title: 'material-symbols:check'},
        defaultIcon: {title: 'material-symbols:close'},
        icon: false,
        label: 'Label',
        modelValue: false,
        required: true,
        tooltip: 'Tooltip',
        type: EColors.SUCCESS,
    },
    component: Toggle,
    parameters: {
        docs: {
            description: {
                component:
                    'The `toggle` component is a toggle input that can be used to switch between two states.',
            },
        },
    },
    title: 'components/Input/Toggle',
} as Meta<typeof Toggle>

const Default: StoryFn<typeof Toggle> = args => ({
    components: {Toggle},
    setup() {
        const vm = ref(args.modelValue)

        watch(vm, value => {
            console.debug('Storybook: modelValue watcher', value)
        })

        // Storybook 10 way: spies instead of deprecated addon-actions `action()`
        const onBlur = fn()
        const onModelValue = fn()

        return {
            args,
            vm,
            onBlur,
            onModelValue,
        }
    },
    template: `
      <Toggle
          v-bind="args"
          v-model="vm"
          @update:model-value="onModelValue"
          @blur:input="onBlur"
      />
    `,
})
Default.parameters = {
    docs: {
        description: {
            story: 'This is the default toggle input.',
        },
    },
}

const Icon = Default.bind({})
Icon.args = {icon: true}
Icon.parameters = {
    docs: {
        description: {
            story: 'If the `icon` prop is set to `true`, the input will display an icon.',
        },
    },
}

const Disabled = Default.bind({})
Disabled.args = {disabled: true}
Disabled.parameters = {
    docs: {
        description: {
            story: 'If the `disabled` prop is set to `true`, the input will be disabled.',
        },
    },
}

const Error = Default.bind({})
Error.args = {
    error: true,
    tooltip: 'This is an optional error message',
}
Error.parameters = {
    docs: {
        description: {
            story: 'If the `error` prop is set to `true`, the input will show an error state.',
        },
    },
}

const Warning = Default.bind({})
Warning.args = {
    warning: true,
    tooltip: 'This is an optional warning message',
}
Warning.parameters = {
    docs: {
        description: {
            story: 'If the `warning` prop is set to `true`, the input will show a warning state.',
        },
    },
}

const information = `
### IPropsToggle
See above for the full interface definition.

### Events
The following events will be emitted from the component:
- \`@update:modelValue => value: boolean\` Emits the model value of the input
- \`@blur:input => value: boolean\` Emits the blur event of the input (when the input loses focus)

### Further Information
- Use the v-model to bind the input value:
\` <Toggle v-model="inputRef" v-bind="args"/>
const inputRef = ref<boolean>(true); // initial value
\`
`

const Information: StoryFn = () => ({})
Information.decorators = [
    () => ({
        data() {
            return {showInfo: false}
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
        canvas: {sourceState: 'hidden'},
        description: {story: information},
    },
}

export default meta
export {Default, Icon, Disabled, Error, Warning, Information}