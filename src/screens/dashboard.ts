import { Recipe } from "../types/recipe";
//import Firebase from "../utils/firebase";
//import { appState, addObserver } from "../../store";

export default class Dashboard extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode:"open"})
        //aquí va lo de addObserver
    }

    connectedCallback() {
        this.render();
      }

    async render() {

         const title = this.ownerDocument.createElement("h1");
         title.innerText = "Bienvenido a Recetas compartidas"
         this.shadowRoot?.appendChild
        
        const recipes = this.ownerDocument.createElement("button");
        
    }
}
