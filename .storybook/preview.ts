import '../app/assets/css/tailwind.css'
import {setup} from '@storybook/vue3-vite'

setup((app) => {
    // Nuxt-only components used in app.vue
    app.component('NuxtWelcome', {
        template: '<div style="padding:12px;border:1px dashed #999">NuxtWelcome (stub)</div>'
    })

    app.component('NuxtRouteAnnouncer', {
        template: '<div style="display:none" />'
    })

    // optional but often handy in real components:
    app.component('NuxtLink', {
        props: {to: {type: [String, Object], default: '#'}},
        template: '<a :href="typeof to === \'string\' ? to : \'#\'"><slot /></a>'
    })
})