import { navigate } from "../store/actions";
import { Screens } from "../types/navigation";
//import Firebase from "../utils/firebase";

export default class Recipes extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
      }

    render() {
        const welcome = this.ownerDocument.createElement("h1")
        welcome.innerText = "Escribe tu receta y compartela con más personas"
        
        const recipeName = this.ownerDocument.createElement("input")
        recipeName.placeholder = "ingredients";
        recipeName.type = "ingredients";

        const ingredients = this.ownerDocument.createElement("input");
        ingredients.placeholder = "ingredients";
        ingredients.type = "ingredients";

        const instructions = this.ownerDocument.createElement("input");
        instructions.placeholder = "instructions";
        instructions.type = "instructions";

        const share = this.ownerDocument.createElement("button");
        share.innerText = "Compartir receta";
        this.addEventListener
    }
}


/*Qué tiene una receta
    Ingredientes
    Tiempo
    Instucciones
*/