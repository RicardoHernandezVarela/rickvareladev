import routes from "./routes";

const headTitles = {
  [routes.HOME]: "RickDev",
  [routes.EXPERIENCE]: "My work experience",
  [`${routes.WORK_EXPERIENCE_ITEM}[...rev]`]: "My Work Experience",
  [routes.VINYL_COLLECTION]: "Vinyl collection",
  [routes.NOTES]: "Teaching resources",
  [routes.BOOTCAMP_PROJECT]: "My Bootcamp Project",
  [routes.REVIEWS]: "Reviews",
  [routes.PROJECTS]: "Projects",
};

export default headTitles;
