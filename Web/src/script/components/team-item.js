class TeamItem extends HTMLElement {
    set team(team){
        this._team = team;
        this.render();
    }

    render() {
        this.innerHTML = 
        `<div class="col-lg-3 col-md-3 col-sm-6 my-4 mx-auto">
        <div class="card text-center border-0 bg-transparent">
            <img class=" card-img-top mb-3" src=${this._team.photo} alt="">
            <h5 class="card-title osw">${this._team.name}</h5>
            <p class="card-text ppns">${this._team.id}</p>
        </div>
      </div>`;
    }
}

customElements.define('team-item', TeamItem);