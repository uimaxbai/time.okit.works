<script lang="ts">
    import { onMount, onDestroy, createEventDispatcher } from "svelte";
    import screenfull from "screenfull";
  interface Props {
    children?: import('svelte').Snippet<[any]>;
  }

  let { children }: Props = $props();
  
    let component: HTMLElement = $state();
    const dispatch = createEventDispatcher<{ change: never; error: never }>();
  
    onMount(() => {
      if (screenfull.isEnabled) {
        screenfull.on("change", () => dispatch("change"));
        screenfull.on("error", () => dispatch("error"));
      }
    });
  
    const onToggle = () => {
      if (screenfull.isEnabled && component?.nextElementSibling) {
        screenfull.toggle(component.nextElementSibling);
      }
    };
  
    const onRequest = () => {
      if (screenfull.isEnabled && component?.nextElementSibling) {
        screenfull.request(component.nextElementSibling);
      }
    };
  
    const onExit = () => {
      if (screenfull.isEnabled && component?.nextElementSibling) {
        screenfull.exit();
      }
    };
  
    onDestroy(() => {
      if (screenfull.isEnabled) {
        screenfull.off("change", () => true);
        screenfull.off("error", () => true);
      }
    });
  </script>
  
  <div style="width:0; height:0" bind:this={component}></div>
  {@render children?.({ onToggle, onRequest, onExit, })}