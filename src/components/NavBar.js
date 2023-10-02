import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navBarComponent = links.map((link) => {
   return <a key={link} href={`#${link}`}>{link}</a>
  })
  return <nav>{navBarComponent}</nav>;
}

export default NavBar;
