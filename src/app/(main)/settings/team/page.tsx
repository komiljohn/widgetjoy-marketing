import React, { Suspense } from "react";

import TeamMembers from "./ui/TeamMembers";
import TeamSettings from "./ui/TeamSettings";

export default function Page() {
  return (
    <main className="pt-8 px-4 container mx-auto">
      <TeamSettings />
      <Suspense>
        <TeamMembers />
      </Suspense>
    </main>
  );
}
