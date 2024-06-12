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
};

export default breadCrumbsData;
