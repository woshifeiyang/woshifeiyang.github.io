import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
  RouterOptions,
} from "vue-router";
import Homepage from "../pages/Homepage.vue";
import About from "../pages/About.vue";
import SocialSpaceVue from "../pages/SocialSpace.vue";
import BioWatchVue from "../pages/BioWatch.vue";

// const About = { template: "<div>About</div>" };

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Homepage },
  { path: "/about", component: About },
  { path: "/project/social_space", component: SocialSpaceVue },
  { path: "/project/bio_watch", component: BioWatchVue },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
