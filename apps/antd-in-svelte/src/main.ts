import App from './App.svelte';
import "antd/dist/antd.css"

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;