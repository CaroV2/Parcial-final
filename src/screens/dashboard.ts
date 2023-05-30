import { Recipe } from "../types/recipe";
import Firebase from "../utils/firebase";
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
        
         const otherRecipes = await Firebase.getRecipes();
         otherRecipes.forEach((p: Recipe) => {
           const container = this.ownerDocument.createElement("section");
           const recipeName = this.ownerDocument.createElement("h3");
           recipeName.innerText = p.recipeName;
           container.appendChild(recipeName);

        this.shadowRoot?.appendChild(container);
        });
    }
}
