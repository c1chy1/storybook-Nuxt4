import type {StorybookConfig} from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'


const config: StorybookConfig = {
    framework: {
        name: '@storybook/vue3-vite',
        options: {}
    },
    stories: [
        '../app/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        /*
                '../components/!**!/!*.stories.@(js|jsx|ts|tsx|mdx)'
        */
    ],
    addons: [],
    async viteFinal(config) {
        config.plugins = [...(config.plugins || []), tailwindcss(), vue()]
        return config
    },
}

export default config