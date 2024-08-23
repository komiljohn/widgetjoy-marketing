import { redirect } from "next/navigation";

import Routes from "@/utils/routes";

export default function Home() {
  redirect(Routes.dashboard);
}
