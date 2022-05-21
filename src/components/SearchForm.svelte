<script lang="ts">
    import { search } from "../stores/writeSearch";
</script>

<section class="content">
    <div class="field">
        <div class="control">
          <label class="radio">
            <input type="radio" bind:group={$search.andor} name="andor" value="or">
            Any of the terms
          </label>
          <label class="radio">
            <input type="radio" bind:group={$search.andor} name="andor" value="and" checked>
            All of the terms
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label" for="searchTerms">Search</label>
        <div class="control">
          <input class="input" type="text" placeholder="Search terms" id="searchTerms" bind:value={$search.terms}>
        </div>
        <p class="help">Search is NOT case sensitive. Use quotation marks to group words in sequence.</p>
      </div>
</section>

<style>
  p.help {
    font-size: smaller;
    font-style: italic;
    color: grey;
  }
</style>