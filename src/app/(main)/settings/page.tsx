import { redirect } from "next/navigation";

import Routes from "@/utils/routes";

export default function Page() {
  redirect(Routes.settings_team);
}
