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
            logo={"/assets/teams-syrup-storm.png"}
            moto="The storm's a-comin! Watch out! These bulls are stampeding in a
            syrupy surge!"
          />
        </div>
      </div>
    </>
  );
}
