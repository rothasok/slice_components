
import { createI18n } from 'vue-i18n'

const messages={
    en:{
        home:'home',
        change_lan:'ខ្មែរ',
    },
    khm:{
        home:'ទំព័រដើម',
        change_lan:'En',

    }
}
const i18n=createI18n({
    locale:'en',
    fallbackLocale:'en',
    messages,
})

export default i18n