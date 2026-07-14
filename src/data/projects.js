import IMG1 from "../assets/innovative/page1.jpeg";
import IMG2 from "../assets/innovative/page2.jpeg";
import IMG3 from "../assets/innovative/page3.png";
import IMG4 from "../assets/egility/page1.png";
import IMG5 from "../assets/egility/page2.png";
import IMG6 from "../assets/egility/page3.png";
import IMG7 from "../assets/egility/page4.png";
import IMG8 from "../assets/infaque/page1.png";
import IMG9 from "../assets/infaque/page2.png";
import IMG10 from "../assets/infaque/page3.png";
import IMG11 from "../assets/infaque/page4.png";
import IMG12 from "../assets/forge/page1.png";
import IMG13 from "../assets/forge/page2.png";
import IMG14 from "../assets/forge/page3.png";
import IMG15 from "../assets/1155/page1.png";
import IMG16 from "../assets/1155/page2.png";
import IMG17 from "../assets/1155/page3.png";
import IMG18 from "../assets/1155/page4.png";
import IMG19 from "../assets/innovative/page4.png";
import IMG20 from "../assets/financial/page1.png";
import IMG21 from "../assets/financial/page2.png";
import IMG22 from "../assets/web/1.png";
import IMG23 from "../assets/web/2.png";
import IMG24 from "../assets/web/3.png";
import IMG25 from "../assets/web/4.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Innovative Mojo",
    file: "innovative-mojo.jsx",
    img: [IMG1, IMG2, IMG3, IMG19],
    description:
      "Developed an engaging and interactive website for Innovative Mojo, a startup specializing in development services. This freelance project primarily focused on frontend development, made using React. It also had an admin panel, allowing for effortless management of articles, including adding, removing, and editing functionalities. They also had very specific requirements for amimations.",
    technologies: "Ruby on Rails | SCSS",
    tags: ["React", "SCSS"],
    link: "https://innovativemojo.com/",
  },
  {
    id: 3,
    title: "Infaque",
    file: "infaque.jsx",
    img: [IMG8, IMG11, IMG9, IMG10],
    description:
      "Contributed a great deal to the development of Infaque's flagship SaaS product, designed specifically for charities. This solution streamlines the process of fund collection and distribution across various campaigns and causes, providing a seamless experience for users. The project showcases my proficiency in creating SaaS platforms that cater to specific sector needs.",
    tags: ["React", "Firebase", "Node.js"],
    link: "https://infaque.com/",
  },
  {
    id: 2,
    title: "Forge One",
    file: "forge-one.jsx",
    img: [IMG13, IMG12, IMG14],
    description:
      "Executed a frontend development project for Forge1, focusing on translating pixel-perfect designs into a responsive website using React. This freelance project emphasized my attention to detail and skill in creating visually appealing and functional web interfaces.",
    tags: ["React"],
    link: "https://forge-one.web.app/",
  },
  {
    id: 5,
    title: "1155 Family of companies",
    file: "1155-family.jsx",
    img: [IMG15, IMG18, IMG16, IMG17],
    description:
      "Undertook multiple projects for the 1155 family of companies, including Diversified, 1155, and Players. The task involved updating and transitioning their websites from WordPress to React. These freelance projects required a keen understanding of diverse business needs and the ability to deliver modern, responsive web solutions.",
    tags: ["React", "WordPress"],
    link: "https://pr-1155.web.app/",
  },
  {
    id: 7,
    title: "Web Engineering Seminar (Master's Project) ",
    file: "web-eng-analysis.tsx",
    img: [IMG23, IMG22, IMG24, IMG25],
    description:
      "This project analyzed five years of web engineering research, highlighting trends in affiliations, authors, technologies, and countries. I developed an interactive web dashboard in React to visualize these insights with dynamic charts and filters. The dashboard allows users to explore evolving trends and key research contributions intuitively.",
    technologies: "Next",
    tags: ["Next.js", "Chart.js"],
    link: "https://web-engineering-analysis.web.app/",
  },
  {
    id: 4,
    title: "Egility",
    file: "egility.jsx",
    img: [IMG4, IMG5, IMG6, IMG7],
    description:
      "Developed a sophisticated recruiting tool for a Canadian company, leveraging Humantic and Receptiviti apis for candidate assessment. The tool features advanced visual representations of candidate data and comparisons, utilizing highcharts.js and React. This project highlights my expertise in integrating complex data analytics and visualization.",
    technologies: "JavaScript | CSS",
    tags: ["React", "Highcharts"],
    link: "https://egility-production.web.app/",
  },
  {
    id: 6,
    title: "Financial Accumen",
    file: "financial-acumen.jsx",
    img: [IMG20, IMG21],
    description:
      "Created a user-friendly SaaS solution for Canadian companies, simplifying the process of accessing QuickBooks records. This tool stands out for its ease of use and its ability to cater to the specific accounting needs of different businesses, demonstrating my capability in developing tailored financial software solutions.",
    tags: ["React", "Stripe"],
    link: "https://financial-acumen-dev.web.app/SignIn",
  },
];
