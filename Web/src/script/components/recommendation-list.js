import "./recommendation-item.js";
import $ from "jquery";

class RecommendationList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const recom1 = document.createElement("recommendation-item");
        const recom2 = document.createElement("recommendation-item");
        const recom3 = document.createElement("recommendation-item");
        const recom4 = document.createElement("recommendation-item");
        const recom5 = document.createElement("recommendation-item");
        recom1.id = 1;
        recom2.id = 2;
        recom3.id = 3;
        recom4.id = 4;
        recom5.id = 5;

        $(this).append([recom1, recom2, recom3, recom4, recom5]);
    }
}

customElements.define("recommendation-list", RecommendationList);