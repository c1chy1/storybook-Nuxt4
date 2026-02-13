import type {Meta, StoryObj} from '@storybook/vue3'
import App from './app.vue'

const meta: Meta<typeof App> = {
    title: 'App/App',
    component: App
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}