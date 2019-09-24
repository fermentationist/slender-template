import SvelteApp from "./App.svelte";
import path from "path";
const App = new SvelteApp({
    target: document.body,
    props: { 
        content: `This text was passed as props to the App.svelte component.`
    }
});

export default App;