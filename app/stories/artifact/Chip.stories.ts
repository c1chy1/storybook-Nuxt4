import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {Button, Card, Chip} from '../../components/'
import {EPositions} from '../../../types/src'
import {ref} from 'vue'

type ChipComponent = typeof Chip

const meta: Meta<ChipComponent> = {
    component: Chip,
    argTypes: {
        backgroundColor: {
            control: {
                type: 'color',
            },
            description: 'Background color of the chip',
            table: {
                defaultValue: {
                    summary: '#003CC1',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        color: {
            control: {
                type: 'color',
            },
            description: 'Text color of the chip',
            table: {
                defaultValue: {
                    summary: '#fff',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        customStyles: {
            control: {
                type: 'text',
            },
            description: 'Custom CSS styles to apply to the chip',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        label: {
            control: {
                type: 'text',
            },
            description: 'Text or SVG content to display in the chip',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        position: {
            control: {
                type: 'select',
            },
            description: 'Position of the chip relative to the parent element',
            options: Object.values(EPositions),
            table: {
                defaultValue: {
                    summary: EPositions.TOP_RIGHT,
                },
                type: {
                    summary: 'EPositions',
                },
            },
        },
        show: {
            control: {
                type: 'boolean',
            },
            description: 'Controls the visibility of the chip',
            table: {
                defaultValue: {
                    summary: 'true',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
        size: {
            control: {
                type: 'number',
            },
            description: 'Size of the chip in pixels',
            table: {
                defaultValue: {
                    summary: '30',
                },
                type: {
                    summary: 'string | number',
                },
            },
        },
    },
    args: {
        backgroundColor: '#003CC1',
        color: '#fff',
        customStyles: '',
        label: '5',
        position: EPositions.TOP_RIGHT,
        show: true,
        size: 30,
    },
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Chip>` component displays a small circular badge that can be positioned relative to its parent element. It is commonly used for notifications, counts, or status indicators.',
            },
        },
    },
    title: 'Components/Artifact/Chip',
} as Meta<ChipComponent>

const Default: StoryFn<ChipComponent> = args => ({
    components: {Chip, Button},
    setup() {
        return {
            args,
        }
    },
    template: `
      <div class="flex justify-center items-center h-64">
        <Chip v-bind="args">
          <Button
              label="Button with Chip"
              class="px-6 py-3"
          />
        </Chip>
      </div>
    `,
})
Default.parameters = {
    docs: {
        description: {
            story: 'The default chip component positioned on a button.',
        },
    },
}

const AllPositions: StoryFn<ChipComponent> = args => ({
    components: {Chip, Card},
    setup() {
        return {
            args,
            EPositions,
        }
    },
    template: `
      <div class="grid grid-cols-2 gap-8 p-8">
        <div class="flex justify-center items-center">
          <Chip
              :label="args.label"
              :position="EPositions.TOP_LEFT"
              :show="args.show"
              :size="args.size"
              :background-color="'#ef4444'"
          >
            <div class="bg-white p-6 rounded-lg shadow-md border">
              <h3 class="font-semibold">Top Left</h3>
              <p class="text-gray-600">Chip positioned at top-left corner</p>
            </div>
          </Chip>
        </div>

        <div class="flex justify-center items-center">
          <Chip
              :label="args.label"
              :position="EPositions.TOP_RIGHT"
              :show="args.show"
              :size="args.size"
              :background-color="'#10b981'"
          >
            <div class="bg-white p-6 rounded-lg shadow-md border">
              <h3 class="font-semibold">Top Right</h3>
              <p class="text-gray-600">Chip positioned at top-right corner</p>
            </div>
          </Chip>
        </div>

        <div class="flex justify-center items-center">
          <Chip
              :label="args.label"
              :position="EPositions.BOTTOM_LEFT"
              :show="args.show"
              :size="args.size"
              :background-color="'#f59e0b'"
          >
            <div class="bg-white p-6 rounded-lg shadow-md border">
              <h3 class="font-semibold">Bottom Left</h3>
              <p class="text-gray-600">Chip positioned at bottom-left corner</p>
            </div>
          </Chip>
        </div>

        <div class="flex justify-center items-center">
          <Chip
              :label="args.label"
              :position="EPositions.BOTTOM_RIGHT"
              :show="args.show"
              :size="args.size"
              :background-color="'#8b5cf6'"
          >
            <div class="bg-white p-6 rounded-lg shadow-md border">
              <h3 class="font-semibold">Bottom Right</h3>
              <p class="text-gray-600">Chip positioned at bottom-right corner</p>
            </div>
          </Chip>
        </div>
      </div>
    `,
})
AllPositions.parameters = {
    docs: {
        description: {
            story:
                'This story shows all available chip positions on different colored cards.',
        },
    },
}

const DifferentSizes: StoryFn<ChipComponent> = args => ({
    components: {Chip, Button},
    setup() {
        return {
            args,
        }
    },
    template: `
      <div class="flex justify-center items-center gap-8 h-64">
        <Chip
            label="1"
            :position="args.position"
            :show="args.show"
            :size="20"
            :background-color="args.backgroundColor"
            :color="args.color"
        >
          <Button label="Small"/>
        </Chip>

        <Chip
            label="42"
            :position="args.position"
            :show="args.show"
            :size="30"
            :background-color="args.backgroundColor"
            :color="args.color"
        >
          <Button label="Medium"/>
        </Chip>

        <Chip
            label="999"
            :position="args.position"
            :show="args.show"
            :size="40"
            :background-color="args.backgroundColor"
            :color="args.color"
        >
          <Button label="Large"/>
        </Chip>

        <Chip
            label="∞"
            :position="args.position"
            :show="args.show"
            :size="50"
            :background-color="args.backgroundColor"
            :color="args.color"
        >
          <Button label="Extra Large"/>
        </Chip>
      </div>
    `,
})
DifferentSizes.parameters = {
    docs: {
        description: {
            story:
                'This story demonstrates chips of different sizes with various label content.',
        },
    },
}

const WithSVGIcons: StoryFn<ChipComponent> = args => ({
    components: {Chip, Button},
    setup() {
        const heartIcon
            = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
        const starIcon
            = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
        const checkIcon
            = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'

        return {
            args,
            heartIcon,
            starIcon,
            checkIcon,
        }
    },
    template: `
      <div class="flex justify-center items-center gap-8 h-64">
        <Chip
            :label="heartIcon"
            :position="args.position"
            :show="args.show"
            :size="32"
            background-color="#ef4444"
            color="#fff"
        >
          <Button label="Favorites"/>
        </Chip>

        <Chip
            :label="starIcon"
            :position="args.position"
            :show="args.show"
            :size="32"
            background-color="#f59e0b"
            color="#fff"
        >
          <Button label="Starred"/>
        </Chip>

        <Chip
            :label="checkIcon"
            :position="args.position"
            :show="args.show"
            :size="32"
            background-color="#10b981"
            color="#fff"
        >
          <Button label="Completed"/>
        </Chip>
      </div>
    `,
})
WithSVGIcons.parameters = {
    docs: {
        description: {
            story: 'This story shows chips with SVG icons instead of text labels.',
        },
    },
}

const NotificationExample: StoryFn<ChipComponent> = () => ({
    components: {Chip, Button},
    setup() {
        const notifications = ref(3)
        const messages = ref(12)
        const alerts = ref(0)

        const incrementNotifications = () => {
            notifications.value++
        }

        const clearNotifications = () => {
            notifications.value = 0
        }

        const incrementMessages = () => {
            messages.value++
        }

        const clearMessages = () => {
            messages.value = 0
        }

        return {
            notifications,
            messages,
            alerts,
            incrementNotifications,
            clearNotifications,
            incrementMessages,
            clearMessages,
        }
    },
    template: `
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-semibold mb-4">Notification System Example</h3>
          <p class="text-gray-600 mb-6">Click buttons to simulate notifications</p>
        </div>

        <div class="flex justify-center items-center gap-6">
          <div class="text-center">
            <Chip
                :label="notifications.toString()"
                :position="EPositions.TOP_RIGHT"
                :show="notifications > 0"
                :size="24"
                background-color="#ef4444"
                color="#fff"
            >
              <Button
                  label="Notifications"
                  @click="incrementNotifications"
                  class="mb-2"
              />
            </Chip>
            <br>
            <button
                @click="clearNotifications"
                class="text-xs text-blue-600 hover:underline"
            >
              Clear
            </button>
          </div>

          <div class="text-center">
            <Chip
                :label="messages.toString()"
                :position="EPositions.TOP_RIGHT"
                :show="messages > 0"
                :size="24"
                background-color="#10b981"
                color="#fff"
            >
              <Button
                  label="Messages"
                  @click="incrementMessages"
                  class="mb-2"
              />
            </Chip>
            <br>
            <button
                @click="clearMessages"
                class="text-xs text-blue-600 hover:underline"
            >
              Clear
            </button>
          </div>

          <div class="text-center">
            <Chip
                :label="alerts.toString()"
                :position="EPositions.TOP_RIGHT"
                :show="alerts > 0"
                :size="24"
                background-color="#f59e0b"
                color="#fff"
            >
              <Button
                  label="Alerts"
                  class="mb-2"
              />
            </Chip>
            <br>
            <span class="text-xs text-gray-400">No alerts</span>
          </div>
        </div>
      </div>
    `,
})
NotificationExample.parameters = {
    docs: {
        description: {
            story:
                'This story demonstrates a practical notification system using chips that show/hide based on count.',
        },
    },
}

const WithCustomStyles: StoryFn<ChipComponent> = args => ({
    components: {Chip, Button},
    setup() {
        return {
            args,
        }
    },
    template: `
      <div class="flex justify-center items-center gap-8 h-64">
        <Chip
            label="!"
            :position="args.position"
            :show="args.show"
            :size="30"
            background-color="#ef4444"
            color="#fff"
            custom-styles="animation: pulse 1s infinite; box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);"
        >
          <Button label="Pulsing Alert"/>
        </Chip>

        <Chip
            label="NEW"
            :position="args.position"
            :show="args.show"
            :size="24"
            background-color="linear-gradient(45deg, #ff6b6b, #ee5a52)"
            color="#fff"
            custom-styles="border: 2px solid #fff; font-size: 10px; font-weight: 900;"
        >
          <Button label="Gradient Chip"/>
        </Chip>

        <Chip
            label="★"
            :position="args.position"
            :show="args.show"
            :size="35"
            background-color="#ffd700"
            color="#000"
            custom-styles="border: 3px solid #ffed4a; box-shadow: 0 2px 8px rgba(255, 215, 0, 0.4);"
        >
          <Button label="Gold Star"/>
        </Chip>
      </div>
    `,
})
WithCustomStyles.parameters = {
    docs: {
        description: {
            story:
                'This story shows how to use custom styles to create special visual effects.',
        },
    },
}

export default meta
export {Default, AllPositions, DifferentSizes, WithSVGIcons, NotificationExample, WithCustomStyles}
