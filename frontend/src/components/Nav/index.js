import React, { useState, useContext } from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";
import { LanguageContext } from "../LanguageProvider/LanguageContext";

export default function Nav(props) {
  const [itemActive, toggleItemActive] = useState(false)
  const [mobileNav, toggleMobileNav] = useState(false)
  const langContext = useContext(LanguageContext);
  return (
    <Query query={CATEGORIES_QUERY} id={null}>
      {({ data: { categories } }) => {
        return (
          <header className="sidebar">
            <div className="sidebar-wrap">
              <h1 style={{ margin: "0 0 1.5em 0"}}><Link to="/" className="logo long-text" >Mai Linh</Link></h1>
              <nav className={mobileNav ? 'menu active' : 'menu'}>
                <ul>
                  {categories.map((category, i) => {
                    return (
                      <li key={category.id}>
                        <Link
                          to={`/${category.name}`}
                          className={itemActive ? 'item active' : 'item'}
                          onClick={() => toggleItemActive(!itemActive)}
                        >
                          {langContext.language === 'en' ? category.name : category.name_pl}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="social-links">{
                  '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
                }</div>
                <Link
                  to="#"
                  className="mobile-only menu-close"
                  style={{ top: 45 + 'px' }}
                  onClick={() => toggleMobileNav(false)}>
                </Link>
              </nav>
              <Link
                to="#"
                className="mobile-only menu-open"
                onClick={() => toggleMobileNav(true)}>
                  <div className="bars"></div>
                  <div className="bars"></div>
                  <div className="bars"></div>
              </Link>
            </div>
          </header>
        );
      }}
    </Query >
  );
};
