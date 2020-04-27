<script>
  import Prism from "svelte-prism";
</script>

<h1>Generated navigation example</h1>

<h3>Hidden pages <a href="/nested-pages/page-2">Page 2</a>

<a href="/nested-pages/page-5">Page 5</a></h3>

<hr>
<strong>Folder structure</strong>'
<pre>
├─ nested-pages
|  ├─ _layout.svelte
|  ├─ index.svelte
|  ├─ page-1.svelte
|  ├─ page-2.svelte
|  ├─ page-3.svelte
|  └─ ...
├─ _layout.svelte
├─ _nav.svelte
└─ index.svelte

</pre>

<hr>
<h3>_layout.svelte</h3>
<Prism language="svelte">
{`<`}{`script>
  import Nav from "./_nav.svelte";
</>

<Nav />
<slot />`}</Prism>

<hr>
<h3>_nav.svelte</h3>
<Prism language="svelte">
  {`<`}{`script>
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
`}
</Prism>
