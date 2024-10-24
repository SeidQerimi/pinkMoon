import "./header.css";
import logo from "../../assets/logo.png";

export const Header = () => {
  const navItems = [
    {
      title: "Shop all",
      url: "/",
    },
    {
      title: "Face",
      url: "/",
    },
    {
      title: "Body",
      url: "/",
    },
    {
      title: "Bundles",
      url: "/",
    },
    {
      title: "More",
      url: "/",
    },
  ];

  return (
    <header className="container">
      <a href="#">
        <img src={logo} alt="Pink Moon" />
      </a>
      <nav>
        <ul>
          {navItems.map((navItem) => (
            <li key={navItem.title}>
              <a href={navItem.url}>{navItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
