<script lang="ts">
    import { research as allResearch } from "../stores/readResearch";
    import type { ResearchRecord } from "../stores/readResearch";
    import { filteredResearch as research } from "../stores/derivedResearch";
    const link2href = (link: string): string => {
        if (link.startsWith("doi:")) {
            return "https://dx.doi.org/" + link.slice(4);
        } else {
            return link;
        }
    };

    let selectedRec: ResearchRecord;
    let modalActive = "";
    const showModal = (rec: ResearchRecord): boolean => {
        console.log("Row clicked\n" + selectedRec);
        selectedRec = rec;
        modalActive = "is-active";
        return false;
    };
    const handleKeydown = (event) => {
        if (event.keyCode === 27) {
            modalActive = "";
        }
    };
</script>

<svelte:window on:keydown={handleKeydown}/>

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
                </tr>
            </thead>
            <tbody>
                {#each $research as rec (rec.title)}
                    <tr on:click="{() => showModal(rec)}">
                        <td><a href="{link2href(rec.link)}" target="_NEW">{rec.title}</a></td>
                        <td>{rec.year}</td>
                        <td>{rec.authors.join(", ")}</td>
                        <td>{rec.abstract.slice(0, 100)}&hellip;</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <p>Error fetching data</p>
    {/if}

    <div class="modal {modalActive}" id="recordCard">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <p class="title"><a href="{link2href(selectedRec ? selectedRec.link : "")}" target="_NEW">{selectedRec ? selectedRec.title : ""}</a></p>
            <p class="year">{selectedRec ? selectedRec.year : ""}, {selectedRec ? selectedRec.authors.join(", ") : ""}</p>
            <p class="abstract">{selectedRec ? selectedRec.abstract : ""}</p>
            <p class="added">Added {selectedRec ? (new Date(selectedRec.dateAdded)).toISOString().slice(0, 10) : ""}</p>
            <button class="button is-success" on:click="{() => modalActive = ""}">Close</button>
          </div>
        </div>
    </div>
</section>

<style>
    p.recCount {
        font-size: smaller;
    }

    #recordCard p.title {
        font-size: larger;
        font-weight: bolder;
    }

    #recordCard p.added {
        font-size: smaller;
        font-weight: lighter;
    }
</style>
