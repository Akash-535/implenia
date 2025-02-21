interface NavbarItem {
  title: string;
  link: string;
}

interface ProcessList {
  image: string;
  name: string;
  heading: string;
  description: string;
  descriptionTwo: string;
}

interface StoriesList {
  image: string;
  name: string;
  heading: string;
}

interface FaqList {
  question: string;
  answer: string;
}

interface FooterList {
  title: string;
  link: string;
}

export const NAVBAR_LIST: NavbarItem[] = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Stories",
    link: "#stories",
  },
  {
    title: "Community",
    link: "#community",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];
export const KICK_COUNTER_LIST: string[] = [
  "Ideas submitted",
  "Active Platform users",
  "Community Members",
];

export const KICKBOX_PROCESS_LIST: ProcessList[] = [
  {
    image: "/assets/images/red-box.webp",
    name: "Validate",
    heading: "RedBox",
    description:
      "You’ve taken the first step -welcome to the RedBox phase! In this phase, you’ll validate your idea and test its business potential. The RedBox concludes with you pitching your idea to internal sponsors to secure funding for the BlueBox phase.",
    descriptionTwo:
      "Duration: 2 months Start Budget: 700 CHF/EUR 20% of your working time",
  },
  {
    image: "/assets/images/blue-box.webp",
    name: "Pilot",
    heading: "BlueBox",
    description:
      "This phase begins once you’ve secured a sponsor. Here, you’ll test your pilot with real customers, gather insights, and make improvements. Upon successful testing, you’ll receive support to secure a sponsor for the final implementation phase.",
    descriptionTwo:
      "Duration:  4-6 months Budget: According to funding 20% of  your working time",
  },
  {
    image: "/assets/images/yellow-box.webp",
    name: "Implement",
    heading: "GoldBox",
    description:
      "Once you've proven that your idea has real business potential, you'll move to the GoldBox phase. Congratulations! This is your opportunity to scale and implement your idea within the organization, as a separate project, or even as a spin-off.",
    descriptionTwo:
      "Duration: ongoing Budget: According to funding 20-100% of your working time",
  },
];

export const STORIES_LIST: StoriesList[] = [
  {
    image: "/assets/images/stories-img-1.webp",
    name: "BlueBox",
    heading: "Family Friendly Implenia",
  },
  {
    image: "/assets/images/stories-img-2.webp",
    name: "GoldBox",
    heading: "Mobile SOS-Station",
  },
  {
    image: "/assets/images/stories-img-3.webp",
    name: "GoldBox",
    heading: "HPS-EPS Tunnelelement",
  },
];

export const FAQ_LIST: FaqList[] = [
  {
    question: "What kind of ideas can I submit?",
    answer:
      "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
  },
  {
    question: "Can we also start the RedBox as a team?",
    answer:
      "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
  },
  {
    question:
      "I have a good idea for the company, but I do not want to work on it myself, can I still submit?",
    answer:
      "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
  },
  {
    question: "When can I submit my idea?",
    answer:
      "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
  },
  {
    question: "When do I get my RedBox?",
    answer:
      "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
  },
  {
    question: "How do I get a BlueBox?",
    answer:
      "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
  },
  {
    question: "How do I get a GoldBox?",
    answer:
      "You are free to submit any idea related to Implenia’s business activities, customers or internal processes. Of course we look especially for new and creative ideas and your fresh perspective on the future of construction and real estate.",
  },
];

export const FOOTER_LIST: FooterList[] = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Stories",
    link: "#stories",
  },
  {
    title: "Community",
    link: "#community",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];
