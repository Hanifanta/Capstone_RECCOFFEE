class TeamItem extends HTMLElement {
    set team(team){
        this._team = team;
        this.render();
    }

    render() {
        this.classList.add("col-lg-3");
        this.classList.add("col-md-3");
        this.classList.add("col-sm-6");
        this.classList.add("my-4");
        this.classList.add("mx-auto");
        
        this.innerHTML = 
        `<div class="card text-center border-0 bg-transparent">
            <img class="card-img-top mb-3" src=${this._team.photo} alt="">
            <h5 class="card-title osw">${this._team.name}</h5>
            <p class="card-text ppns">${this._team.id}</p>
        </div>`;
    }
}

customElements.define('team-item', TeamItem);