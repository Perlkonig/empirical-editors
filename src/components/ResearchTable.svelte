<script lang="ts">
    import { research as allResearch } from "../stores/readResearch";
    import { filteredResearch as research } from "../stores/derivedResearch";
    const link2href = (link: string): string => {
        if (link.startsWith("doi:")) {
            return "https://dx.doi.org/" + link.slice(4);
        } else {
            return link;
        }
    };
</script>

<section class="content">
    {#if $research != null}
        <p class="recCount">{$research.length} of {$allResearch.length} records returned</p>
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
                        <td><a href="{link2href(rec.link)}" target="_NEW">{rec.title}</a></td>
                        <td>{rec.year}</td>
                        <td>{rec.authors.join(", ")}</td>
                        <td>{rec.abstract.slice(0, 100)}&hellip;</td>
                        <td>{(new Date(rec.dateAdded)).toISOString().slice(0, 10)}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <p>Error fetching data</p>
    {/if}
</section>

<style>
    p.recCount {
        font-size: smaller;
    }
</style>
