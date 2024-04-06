import { browser } from '$app/environment'
import {_, init, register} from 'svelte-i18n'
import de from './locales/de.json'
import en from './locales/en.json'

const defaultLocale = 'en'

register('en', async () => en)
register('de', async () => de)

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale,
})

export const t=_;