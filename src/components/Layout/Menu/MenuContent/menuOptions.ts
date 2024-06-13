import routes from "@/src/constants/routes";

const menuOptions = {
  dev: {
    title: "dev",
    items: [
      {
        text: "about me",
        icon: "FaGlasses",
        route: routes.HOME,
      },
      {
        text: "experience",
        icon: "MdOutlineWork",
        route: routes.HOME,
      },
      {
        text: "projects",
        icon: "ImLab",
        route: routes.HOME,
      },
    ],
  },
  musicILike: {
    title: "music i like",
    items: [
      {
        text: "vinyl collection",
        icon: "PiVinylRecordDuotone",
        route: routes.HOME,
      },
      {
        text: "reviews",
        icon: "MdOutlineRateReview",
        route: routes.HOME,
      },
    ],
  },
  teaching: {
    title: "teaching",
    items: [
      {
        text: "notes",
        icon: "GoCodeReview",
        route: routes.HOME,
      },
      {
        text: "bootcamp project",
        icon: "FaLaptopCode",
        route: routes.HOME,
      },
    ],
  },
};

const contactOptions = [
  {
    icon: "FaGithub",
    link: "https://github.com/RicardoHernandezVarela?tab=repositories",
  },
  {
    icon: "FaLinkedin",
    link: "https://www.linkedin.com/in/ricardo-hern%C3%A1ndez-varela-904824242/",
  },
  {
    icon: "BiLogoGmail",
    link: "mailto:rickvarela.dev@gmail.com",
  },
];

export { menuOptions, contactOptions };
