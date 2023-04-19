import React from "react";
import TeamCard from "./TeamCard";

export default function TeamsBody() {
  return (
    <>
      <div className="teams-content">
        <div className="teams-container">
          <div className="teams-header">
            <h1>Teams & Profiles</h1>
            <div className="teams-undertitle">
              Show off your stats and collectibles with your unique profile.
              Team features will be revealed soon!
            </div>
          </div>
          <div className="teams-header2">
            <h2>Teams</h2>
          </div>
          <TeamCard
            rank="1"
            teamName="Syrup Storm"
            members="190,243"
            logo={"/assets/team-syrup-storm.png"}
            moto="The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!"
          />
          <TeamCard
            rank="2"
            teamName="Fearsome Flippers"
            members="170,822"
            logo={"/assets/team-fearsome-flippers.png"}
            moto="The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!"
          />
          <TeamCard
            rank="3"
            teamName="Chaotic Cakers"
            members="343,806"
            logo={"/assets/team-chaotic-cakers.png"}
            moto="Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!"
          />
        </div>
      </div>
    </>
  );
}
