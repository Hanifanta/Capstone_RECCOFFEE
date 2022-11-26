import "./recommendation-item.js";
import $ from "jquery";

class RecommendationList extends HTMLElement {
    set data(data) {
        this._data = data;
        this.render();
    }

    setRecomData() {
        const recomData_1 = {
            link: this._data.recom_link1,
            name: this._data.recom_name1,
            aroma: this._data.recom_aroma1,
            acid_or_milk: this._data.recom_acid_or_milk1,
            body: this._data.recom_body1,
            flavor: this._data.recom_flavor1,
            aftertaste: this._data.recom_aftertaste1,
            rating: this._data.recom_rating1,
            origin: this._data.recom_origin1,
            roaster: this._data.recom_roaster1,
            desc_1: this._data.recom_desc_11,
            desc_2: this._data.recom_desc_21,
            desc_3: this._data.recom_desc_31
        };
        const recomData_2 = {
            link: this._data.recom_link2,
            name: this._data.recom_name2,
            aroma: this._data.recom_aroma2,
            acid_or_milk: this._data.recom_acid_or_milk2,
            body: this._data.recom_body2,
            flavor: this._data.recom_flavor2,
            aftertaste: this._data.recom_aftertaste2,
            rating: this._data.recom_rating2,
            origin: this._data.recom_origin2,
            roaster: this._data.recom_roaster2,
            desc_1: this._data.recom_desc_12,
            desc_2: this._data.recom_desc_22,
            desc_3: this._data.recom_desc_32
        };
        const recomData_3 = {
            link: this._data.recom_link3,
            name: this._data.recom_name3,
            aroma: this._data.recom_aroma3,
            acid_or_milk: this._data.recom_acid_or_milk3,
            body: this._data.recom_body3,
            flavor: this._data.recom_flavor3,
            aftertaste: this._data.recom_aftertaste3,
            rating: this._data.recom_rating3,
            origin: this._data.recom_origin3,
            roaster: this._data.recom_roaster3,
            desc_1: this._data.recom_desc_13,
            desc_2: this._data.recom_desc_23,
            desc_3: this._data.recom_desc_33
        };
        const recomData_4 = {
            link: this._data.recom_link4,
            name: this._data.recom_name4,
            aroma: this._data.recom_aroma4,
            acid_or_milk: this._data.recom_acid_or_milk4,
            body: this._data.recom_body4,
            flavor: this._data.recom_flavor4,
            aftertaste: this._data.recom_aftertaste4,
            rating: this._data.recom_rating4,
            origin: this._data.recom_origin4,
            roaster: this._data.recom_roaster4,
            desc_1: this._data.recom_desc_14,
            desc_2: this._data.recom_desc_24,
            desc_3: this._data.recom_desc_34
        };
        const recomData_5 = {
            link: this._data.recom_link5,
            name: this._data.recom_name5,
            aroma: this._data.recom_aroma5,
            acid_or_milk: this._data.recom_acid_or_milk5,
            body: this._data.recom_body5,
            flavor: this._data.recom_flavor5,
            aftertaste: this._data.recom_aftertaste5,
            rating: this._data.recom_rating5,
            origin: this._data.recom_origin5,
            roaster: this._data.recom_roaster5,
            desc_1: this._data.recom_desc_15,
            desc_2: this._data.recom_desc_25,
            desc_3: this._data.recom_desc_35
        };

        return [recomData_1, recomData_2, recomData_3, recomData_4, recomData_5];
    };

    render() {
        const dataArray = this.setRecomData();
        
        const recom_1 = document.createElement("recommendation-item");
        const recom_2 = document.createElement("recommendation-item");
        const recom_3 = document.createElement("recommendation-item");
        const recom_4 = document.createElement("recommendation-item");
        const recom_5 = document.createElement("recommendation-item");
        recom_1.info = dataArray[0];
        recom_2.info = dataArray[1];
        recom_3.info = dataArray[2];
        recom_4.info = dataArray[3];
        recom_5.info = dataArray[4];
        recom_1.id = 1;
        recom_2.id = 2;
        recom_3.id = 3;
        recom_4.id = 4;
        recom_5.id = 5;

        $(this).addClass("accordion");
        $(this).append([recom_1, recom_2, recom_3, recom_4, recom_5]);
    }
}

customElements.define("recommendation-list", RecommendationList);