<script lang="ts">
	export let appName = "-No Name Given-";
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Main from "./components/Main.svelte";
</script>

<Header siteName={appName}/>

<Main/>

<Footer/>

<style>
</style>