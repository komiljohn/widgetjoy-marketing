const Routes = {
  login: "/login",
  register: "/register",
  forgot_password: "/forgot-password",
  dashboard: "/dashboard",
  dashboard_new: "/dashboard/new",
  settings: "/settings",
  settings_team: "/settings/team",
  settings_billing: "/settings/billing",
  settings_profile: "/settings/profile",
  widget_detail: (id: string | number) => `/dashboard/widgets/${id}`,
  widget_preview: (id: string | number) => `/preview/${id}/`,
  widget_create: `/dashboard/widgets/create`,
};

export default Routes;
