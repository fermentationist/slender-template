<script>
    export let welcomeMessage = "NO PROPS PASSED.";//default props
    
</script>

<style>
    html {
		box-sizing: border-box;
		scroll-behavior: smooth;
		outline: none;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		text-rendering: optimizeLegibility;
	}
	a {
		text-decoration: none;
		color: inherit;
    }
    
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
        line-height: 2em;
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
    .small-caps {
        font-variant: small-caps;
        font-size: 1.33em;
    }
</style>

<div class="thinner-welcome-message">
    <h2>Hey.</h2>
    <p>This is a Svelte app. More on Svelte at <a href="https://svelte.dev" class="small-caps">svelte.dev</a>.</p>
    <p><span>You should be good-to-go. </span><span class="italic">{welcomeMessage}</span></p>
</div>