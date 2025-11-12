import routes from "./routes";

const breadCrumbsData = {
  [routes.HOME]: {
    primaryItem: { text: "home", route: routes.HOME },
    secondaryItem: { text: "rick", route: routes.ME },
  },
  [routes.ME]: {
    primaryItem: { text: "home", route: routes.HOME },
    secondaryItem: { text: "rick", route: routes.ME },
  },
  [routes.EXPERIENCE]: {
    primaryItem: { text: "home", route: routes.HOME },
    secondaryItem: { text: "experience" },
  },
  [routes.PROJECTS]: {
    primaryItem: { text: "home", route: routes.HOME },
    secondaryItem: { text: "projects" },
  },
  [routes.VINYL_COLLECTION]: {
    primaryItem: { text: "home", route: routes.HOME },
    secondaryItem: { text: "vinyl collection" },
  },
  [routes.REVIEWS]: {
    primaryItem: { text: "home", route: routes.HOME },
    secondaryItem: { text: "reviews" },
  },
  [routes.NOTES]: {
    primaryItem: { text: "home", route: routes.HOME },
    secondaryItem: { text: "teaching resources" },
  },
  [routes.BOOTCAMP_PROJECT]: {
    primaryItem: { text: "home", route: routes.HOME },
    secondaryItem: { text: "bootcamp project" },
  },
};

export default breadCrumbsData;
