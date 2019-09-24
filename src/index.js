import SvelteApp from "./App.svelte";
import path from "path";

const App = new SvelteApp({
    target: document.body,
    props: { 
        content: `This text was passed as props to the component at '/src/App.svelte', from within '/src/index.js'.`
    }
});

export default App;