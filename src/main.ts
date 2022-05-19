import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		appName: "Empirical Research for Editors"
	}
});

export default app;