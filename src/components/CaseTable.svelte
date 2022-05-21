<script lang="ts">
    import { casestudies as allCases } from "../stores/readCase";
    import { filteredCase as casestudies } from "../stores/derivedCase";
    const link2href = (link: string): string => {
        if (link.startsWith("doi:")) {
            return "https://dx.doi.org/" + link.slice(4);
        } else {
            return link;
        }
    };
</script>

<section class="content">
    {#if $casestudies != null}
        <p class="recCount">{$casestudies.length} of {$allCases.length} records returned</p>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Notes</th>
                    <th>Date added</th>
                </tr>
            </thead>
            <tbody>
                {#each $casestudies as rec (rec.title)}
                    <tr>
                        <td><a href="{link2href(rec.link)}" target="_NEW">{rec.title}</a></td>
                        <td>{rec.notes}</td>
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