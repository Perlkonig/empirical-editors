<script lang="ts">
    import { research } from "../stores/researchStore";
</script>

<main>
    <section class="section id-medium content" id="introText">
        <p>This is a list of empirical research related to topics of interest to editors.</p>

        <p>Some of editing is purely arbitrary (style), but most of it is rooted in not just grammar but what we have learned about how readers receive different types of material. When defending what might feel to an author as an arbitrary call, it can be helpful to have robust, defensible research to back you up. Hopefully this will help.</p>

        <p>It's trivial to find websites and style guides that advocate various approaches, but finding real evidence—primary sources—can be challenging. This list tries to only provide such sources. It is provided as is. Some of these studies may contradict each other or contradict some pet practice. Some are quite old. Perhaps some have been debunked. As always, use science responsibly.</p>

        <hr>
    </section>
    <section class="section id-medium content">
        {#if $research != null}
            <p>{$research.length} records found.</p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Authors</th>
                        <th>Abstract</th>
                        <th>Date added</th>
                    </tr>
                </thead>
                <tbody>
                    {#each $research as rec (rec.title)}
                        <tr>
                            <td>{rec.title}</td>
                            <td>{rec.year}</td>
                            <td>&nbsp;</td>
                            <td>&nbsp</td>
                            <td>{rec.dateAdded}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {:else}
            <p>Error fetching data</p>
        {/if}

    </section>
</main>

<style>
</style>