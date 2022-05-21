<script lang="ts">
    let activeTab = "research"
    import ResearchTable from "./ResearchTable.svelte";
    import CaseTable from "./CaseTable.svelte";
</script>

<section class="tabs">
    <ul>
        {#if activeTab === "research"}
            <li class="is-active" on:click="{e => activeTab = "research"}">
                <a href="{"#"}">Research</a>
            </li>
            <li on:click="{e => activeTab = "casestudies"}">
                <a href="{"#"}">Case Studies</a>
            </li>
        {:else}
            <li on:click="{e => activeTab = "research"}">
                <a href="{"#"}">Research</a>
            </li>
            <li class="is-active" on:click="{e => activeTab = "casestudies"}">
                <a href="{"#"}">Case Studies</a>
            </li>
        {/if}
    </ul>
</section>

{#if activeTab === "research"}
    <ResearchTable/>
{:else}
    <CaseTable/>
{/if}
