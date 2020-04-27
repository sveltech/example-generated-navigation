import HMR from  '@sveltech/routify/hmr'
import App from './App.svelte';
import '../static/global.pcss'

const app = HMR(App, { target: document.body }, 'routify-app')

export default app;
