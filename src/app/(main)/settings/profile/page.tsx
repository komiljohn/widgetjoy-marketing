import React from "react";

import ProfileDeleteAccount from "./ui/ProfileDeleteAccount";
import ProfilePreferences from "./ui/ProfilePreferences";
import ProfileSettings from "./ui/ProfileSettings";
import ProfileUpdatePassword from "./ui/ProfileUpdatePassword";

export default function Page() {
  return (
    <main className="pt-8 px-4 container mx-auto">
      <ProfilePreferences />
      <ProfileSettings />
      <ProfileUpdatePassword />
      <ProfileDeleteAccount />
    </main>
  );
}
