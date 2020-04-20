import React, { useContext } from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../../queries/article/article";
import { LanguageContext } from "../../components/LanguageProvider/LanguageContext";

const Article = () => {
  const lang = useContext(LanguageContext).language;
  let { name, id } = useParams();

  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        return (
          <section id="content" className="gallery w3-animate-opacity">
            <div className="lazyload-wrap">
              <img
                src={process.env.REACT_APP_BACKEND_URL + article.image.url}
                alt={article.image.url}
                height="100"
                className="lazyautosizes lazyloaded"
              />
              {/* <canvas className="lazyload-placeholder" width="1800" height="1200"/> */}
            </div>
          <div className="uk-section">
            <div className="uk-container uk-container-small">
              <h1 id="title">{lang === 'en' ? article.title : article.title_pl}</h1>
              <ReactMarkdown source={lang === 'en' ? article.content : article.content_pl} />
              <p>
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
          </section>
  );
}}
    </Query >
  );
};

export default Article;
