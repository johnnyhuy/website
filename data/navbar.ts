import headerNavLinks from './headerNavLinks'

export const navbar = {
  logo: {
    src: "/images/johnny.svg",
    alt: "Johnny Huynh",
    width: 32,
    height: 32,
  },
  contact: {
    url: "https://linkedin.com/in/johnnyhuy",
    label: "Contact",
    icon: "Mail", // for dynamic import if needed
    buttonClass: "bg-accent hover:bg-accent/80 ml-2",
    rel: "noopener noreferrer",
    target: "_blank",
  },
  navLinks: headerNavLinks,
}
