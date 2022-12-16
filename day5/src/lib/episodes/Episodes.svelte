<script>
  import { onMount } from "svelte";
  import Episode from "./Episode.svelte";
  import { episodes } from "../../episodesInfo";

  let allEpisodes;

  let lastClickedInput = null;

  const handleCheckboxClick = (e) => {
    const clickedElement = e.currentTarget;

    if (!clickedElement.checked) {
      lastClickedInput = null;
      return;
    }

    if (e.shiftKey && lastClickedInput) {
      let checkIt = false;
      allEpisodes.forEach((episode) => {
        if (checkIt) episode.checked = true;
        if (episode === lastClickedInput || episode === clickedElement)
          checkIt = !checkIt;
      });
    }

    lastClickedInput = clickedElement;
  };

  onMount(() => {
    allEpisodes = document.querySelectorAll("input");
  });
</script>

<section class="episodes">
  <h1>Listen to all the Compressed.fm Episodes</h1>

  <ul>
    {#each episodes as episode, index}
      <li>
        <Episode {...episode} {index} onClick={handleCheckboxClick} />
      </li>
    {/each}
  </ul>
</section>

<style>
  .episodes {
    background: white;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    padding: 60px 80px;
    height: 450px;
    overflow-y: scroll;
  }

  h1 {
    font-weight: bold;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #a7a7a7;
    margin: 0 0 40px 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 24px;
    font-size: 1rem;
  }

  button {
    background: #8c59ff;
    border: none;
    border-radius: 24px;
    text-transform: uppercase;
    font-family: "Nunito Sans", sans-serif;
    font-weight: bold;
    padding: 8px 25px;
    color: white;
    line-height: 1;
    letter-spacing: 2px;
    cursor: pointer;
  }

  button:hover {
    background: #543599;
  }
</style>
