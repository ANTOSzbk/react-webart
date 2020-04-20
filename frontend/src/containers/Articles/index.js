import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";

const Home = () => {
  return (
    <section id="content" className="gallery">
        <Query query={ARTICLES_QUERY}>
          {({ data: { articles } }) => {
            articles.sort((a,b) => { return b.id - a.id })
            return <Articles articles={articles} />;
          }}
        </Query>
    </section>
  );
};

export default Home;
