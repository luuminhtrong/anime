import Link from "next/link";

import { Button } from "primereact/button";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <a className="logo">AnimeDB</a>
      </Link>
      <div className="menu">
        <Link href="/">Seasonal Anime</Link>
        <Link href="/search">Search</Link>
      </div>
    </div>
  );
};

export default Header;
