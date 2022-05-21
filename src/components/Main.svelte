<script lang="ts">
    import ResearchTable from "./ResearchTable.svelte";
    import SearchForm from "./SearchForm.svelte";
    import DataTabs from "./DataTabs.svelte";
</script>

<main>
    <section class="content" id="introText">
        <p>This is a list of empirical research related to topics of interest to editors.</p>

        <p>Some of editing is purely arbitrary (style), but most of it is rooted in not just grammar but what we have learned about how readers receive different types of material. When defending what might feel to an author as an arbitrary call, it can be helpful to have robust, defensible research to back you up. Hopefully this will help.</p>

        <p>It's trivial to find websites and style guides that advocate various approaches, but finding real evidence—primary sources—can be challenging. This list tries to only provide such sources. It is provided as is. Some of these studies may contradict each other or contradict some pet practice. Some are quite old. Perhaps some have been debunked. As always, use science responsibly.</p>

        <p>Links are to permanent landing pages wherever possible (DOIs). The full text of many of these articles can be had through your public library or university library.</p>

        <hr>
    </section>

    <SearchForm/>

    <DataTabs/>

</main>

<style>
</style>