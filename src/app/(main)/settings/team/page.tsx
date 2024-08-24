import React from "react";

import TeamMembers from "./ui/TeamMembers";
import TeamSettings from "./ui/TeamSettings";

export default function Page() {
  return (
    <div className="pt-8 px-4 container mx-auto">
      <TeamSettings />
      <TeamMembers />
    </div>
  );
}
