import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Davide Rolino",
  EMAIL: "davide.rolino01@universitadipavia.it",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 5,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "The personal website of Davide Rolino",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const publicationS: Metadata = {
  TITLE: "Publications",
  DESCRIPTION: "A collection of my pubblications.",
};

export const SOCIALS: Socials = [
  /*
  { 
    NAME: "Institutional email",
    HREF: "mailto:davide.rolino01@universitadipavia.it",
  },
  */
  { 
    NAME: "ORCID",
    HREF: "https://orcid.org/0009-0007-2192-6178",
  },
  { 
    NAME: "arXiv",
    HREF: "https://arxiv.org/search/?searchtype=author&query=Rolino%2C+D",
  },
  { 
    NAME: "linkedIn",
    HREF: "https://www.linkedin.com/in/davide-rolino/",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/d4bd"
  }
];
