import teamData from "../data/team-data.js";
import "./team-item.js";

class TeamList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    teamData.forEach((team) => {
      const teamItem = document.createElement("team-item");
      teamItem.team = team;
      this.appendChild(teamItem);
    });
  }
}

customElements.define("team-list", TeamList);
