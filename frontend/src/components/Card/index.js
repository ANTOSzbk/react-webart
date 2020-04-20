import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageProvider/LanguageContext";

const Card = ({ article }) => {
  const lang = useContext(LanguageContext).language;
  return (
      <div className="image-wrap landscape">
        <Link to={`/${article.category.name}/${article.id}`} className="image">
        <div className="lazyload-wrap">
          <img
            src={process.env.REACT_APP_BACKEND_URL + article.image.url}
            alt={article.image.url}
            height="100"
            className="lazyautosizes lazyloaded"
          />
          {/* <canvas className="lazyload-placeholder" width="1800" height="1200"/> */}
        </div>
        </Link>
        <div className="uk-card-body">
          <p id="category">
            {lang === 'en' ? article.category.name : article.category.name_pl}
          </p>
          <p id="title">
            {lang === 'en' ? article.title : article.title_pl}
          </p>
        </div>
      </div>
  );
};

export default Card;
