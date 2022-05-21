<script lang="ts">
    import SearchForm from "./SearchForm.svelte";
    import DataTabs from "./DataTabs.svelte";
</script>

<main>
    <section class="content" id="introText">
        <p>This is a list of empirical research related to topics of interest to editors. Links are to permanent landing pages wherever possible (DOIs). The full text of many of these articles can be had through your public library or university library.</p>

        <p>It's trivial to find websites and style guides that advocate various approaches, but finding real evidence—primary sources—can be challenging. This list is the result of my own searching for such sources. It is provided as is. Some of these studies may contradict each other or contradict some pet practice. Some are quite old. Perhaps some have been debunked. As always, use science responsibly.</p>

        <p>To submit new material or to make corrections, please contact me via one of the many avenues listed on my blog (<a href="https://www.perlkonig.com/about">https://www.perlkonig.com/about</a>). I'd love to see many more studies, including in areas of graphic design.</p>

        <hr>
    </section>

    <SearchForm/>

    <DataTabs/>

</main>

<style>
</style>
