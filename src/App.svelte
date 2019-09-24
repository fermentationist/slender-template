<script>
    export let content = "NO PROPS PASSED.";//default props
    
</script>

<style>
    .thinner-welcome-message {
        text-rendering: optimizeLegibility;
        background-color: rgb(20, 22, 18);
        width: 100vw;
        height: 100vh;
        color: coral;/*rgb(185, 160, 185);*/
        font-family: Lato, sans-serif;
        font-size: 1.5em;
        padding: 12vh 24vw;
        letter-spacing: 0.25em;
        line-height: 1.8em;
    }
    p {
        max-width: 50vw;
    }
    h2 {
        font-family: Futura, sans-serif;
    }
    .italic {
        font-style: italic;
    }
</style>

<div class="thinner-welcome-message">
    <h2>Hey.</h2>
    <p>App.svelte component has been loaded successfully.</p>
    <p class="italic">{content}</p>
    <p>You should be good-to-go. Edit App.svelte to make changes.</p>
</div>