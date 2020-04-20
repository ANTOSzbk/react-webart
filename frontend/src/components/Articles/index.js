import React from "react";
import Card from "../Card";

const Articles = ({ articles }) => {
  articles.sort((a, b) => { return b.id - a.id })
  return (
    <div className="w3-animate-opacity">
        {articles.map((article, i) => {
          return <Card article={article} key={`article__${article.id}`} />;
        })}
        </div>
  );
};

export default Articles;
