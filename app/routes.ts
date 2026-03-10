import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx", [
    route("stack/:slug", "routes/stack.$slug.tsx"),
  ]),
] satisfies RouteConfig;
