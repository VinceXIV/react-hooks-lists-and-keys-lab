import React from "react";
import { v4 as uuid } from "uuid";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkObjects = links.map(link => {
    return {id: uuid(), link: link}
  })

  const domLinks = linkObjects.map(item => {
    const itemName = item.link
    return <a href={"#"+itemName} key={item.id}>{item.link}</a>
  })

  console.log("domlinks: ", domLinks)

  return <nav>{domLinks}</nav>;
}

export default NavBar;
