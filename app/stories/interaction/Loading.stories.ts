import type {Meta, StoryFn} from '@storybook/vue3-vite'
import {Button, Loading, Toggle} from '../../components'
import {ref} from 'vue'

type LoadingComponent = typeof Loading

const meta: Meta<LoadingComponent> = {
    component: Loading,
    argTypes: {
        loading: {
            control: {
                type: 'boolean',
            },
            description: 'Controls the loading state',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                type: {
                    summary: 'boolean',
                },
            },
        },
    },
    args: {
        loading: false,
    },
    parameters: {
        docs: {
            description: {
                component:
                    'The `<Loading>` component displays a loading overlay with a pulse animation when content is being loaded.',
            },
        },
    },
    title: 'Components/Interaction/Loading',
} as Meta<LoadingComponent>

const Default: StoryFn<LoadingComponent> = args => ({
    components: {Loading, Toggle},
    setup() {
        const isLoading = ref(args.loading)
        return {
            args,
            isLoading,
        }
    },
    template: `
      <div class="space-y-4">
        <Toggle
            v-model="isLoading"
            label="Toggle loading state"
        />

        <Loading :loading="isLoading">
          <div
              class="h-32 w-full bg-blue-100 rounded-lg p-6 border-2 border-dashed border-blue-300">
            <h3 class="text-lg font-semibold text-blue-800 mb-2">
              Content Area
            </h3>
            <p class="text-blue-600">
              This content is visible when loading is false and hidden behind the loading overlay when loading is true.
            </p>
          </div>
        </Loading>
      </div>
    `,
})
Default.parameters = {
    docs: {
        description: {
            story: 'Toggle the switch to see the loading state in action.',
        },
    },
}

const AlwaysLoading: StoryFn<LoadingComponent> = () => ({
    components: {Loading},
    template: `
      <Loading :loading="true">
        <div class="h-40 w-full bg-green-100 rounded-lg p-6 border-2 border-green-300">
          <h3 class="text-lg font-semibold text-green-800 mb-2">
            Loading Content
          </h3>
          <p class="text-green-600 mb-4">
            This content is always in a loading state.
          </p>
          <div class="space-y-2">
            <div class="h-3 bg-green-200 rounded"></div>
            <div class="h-3 bg-green-200 rounded w-3/4"></div>
            <div class="h-3 bg-green-200 rounded w-1/2"></div>
          </div>
        </div>
      </Loading>
    `,
})
AlwaysLoading.parameters = {
    docs: {
        description: {
            story: 'This story shows a permanently loading state.',
        },
    },
}

const WithCards: StoryFn<LoadingComponent> = () => ({
    components: {Loading, Button},
    setup() {
        const loadingStates = ref({
            card1: false,
            card2: true,
            card3: false,
        })

        type CardKey = keyof typeof loadingStates.value

        const toggleLoading = (card: CardKey) => {
            loadingStates.value[card] = !loadingStates.value[card]
        }

        return {
            loadingStates,
            toggleLoading,
        }
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="space-y-4">
          <Button
              label="Toggle Card 1 Loading"
              @click="toggleLoading('card1')"
              class="w-full"
          />
          <Loading :loading="loadingStates.card1">
            <div class="bg-white rounded-lg shadow-md p-6 border">
              <h3 class="text-lg font-semibold mb-3">Card 1</h3>
              <p class="text-gray-600 mb-4">
                This is some content that can be in a loading state.
              </p>
              <div class="h-20 bg-gray-100 rounded"></div>
            </div>
          </Loading>
        </div>

        <div class="space-y-4">
          <Button
              label="Toggle Card 2 Loading"
              @click="toggleLoading('card2')"
              class="w-full"
          />
          <Loading :loading="loadingStates.card2">
            <div class="bg-white rounded-lg shadow-md p-6 border">
              <h3 class="text-lg font-semibold mb-3">Card 2</h3>
              <p class="text-gray-600 mb-4">
                Another piece of content with loading capability.
              </p>
              <div class="h-20 bg-gray-100 rounded"></div>
            </div>
          </Loading>
        </div>

        <div class="space-y-4">
          <Button
              label="Toggle Card 3 Loading"
              @click="toggleLoading('card3')"
              class="w-full"
          />
          <Loading :loading="loadingStates.card3">
            <div class="bg-white rounded-lg shadow-md p-6 border">
              <h3 class="text-lg font-semibold mb-3">Card 3</h3>
              <p class="text-gray-600 mb-4">
                Third card demonstrating independent loading states.
              </p>
              <div class="h-20 bg-gray-100 rounded"></div>
            </div>
          </Loading>
        </div>
      </div>
    `,
})
WithCards.parameters = {
    docs: {
        description: {
            story: 'This story shows multiple cards with independent loading states.',
        },
    },
}

const WithForm: StoryFn<LoadingComponent> = () => ({
    components: {Loading, Button},
    setup() {
        const isSubmitting = ref(false)

        const handleSubmit = () => {
            isSubmitting.value = true
            setTimeout(() => {
                isSubmitting.value = false
            }, 3000)
        }

        return {
            isSubmitting,
            handleSubmit,
        }
    },
    template: `
      <div class="max-w-md mx-auto">
        <Loading :loading="isSubmitting">
          <div class="bg-white rounded-lg shadow-lg p-6 border">
            <h2 class="text-xl font-bold mb-6">Contact Form</h2>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Name</label>
                <input
                    type="text"
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-1">Message</label>
                <textarea
                    class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Enter your message"
                ></textarea>
              </div>

              <Button
                  label="Submit Form"
                  @click="handleSubmit"
                  :disabled="isSubmitting"
                  class="w-full"
              />
            </div>
          </div>
        </Loading>
      </div>
    `,
})
WithForm.parameters = {
    docs: {
        description: {
            story:
                'This story demonstrates using the loading component with a form submission.',
        },
    },
}

export default meta
export {Default, AlwaysLoading, WithCards, WithForm}
