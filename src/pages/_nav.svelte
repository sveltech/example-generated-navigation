<script>
  import { layout, isActive, url, goto, page } from "@sveltech/routify";
  export let node = $layout;
</script>


<nav>
  {#each node.children as node}
    <a href={$url(node.path)} class:active={$isActive(node.path)}>
      {node.title}
    </a>
    {#if node.children.length}
      <svelte:self {node} />
    {/if}
  {/each}
</nav>
