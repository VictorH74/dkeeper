import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Create by Viktor {year}</p>
    </footer>
  );
}

export default Footer;
