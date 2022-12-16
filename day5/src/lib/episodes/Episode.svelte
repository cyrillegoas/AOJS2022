<script>
  export let id;
  export let title;
  export let index;
  export let onClick;

  $: inputID = `episode-${id}`;
  $: episode = `${id} || ${title}`;
</script>

<label for={inputID}>
  <input
    type="checkbox"
    name={inputID}
    id={inputID}
    data-index={index}
    on:click={onClick}
  />
  <span>{episode}</span>
</label>

<style>
  input[type="checkbox"] {
    display: none;
  }

  label {
    cursor: pointer;
  }

  input[type="checkbox"] + span {
    background: url("icons/checkbox--unchecked.svg") left top no-repeat;
    background-size: 20px 20px;
    min-height: 20px;
    padding-left: 30px;
  }

  input[type="checkbox"]:checked + span {
    background-image: url("icons/checkbox--checked.svg");
    text-decoration: line-through;
    color: #c9cdd1;
  }
</style>
