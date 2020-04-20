import React, { useContext } from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";
import { LanguageContext } from "../../components/LanguageProvider/LanguageContext";



const Category = () => {
  let { name } = useParams();
  const lang = useContext(LanguageContext).language;
  return (
    <Query query={CATEGORY_ARTICLES_QUERY} id={name}>
      {({ data: { categories } }) => {
        const category = categories[0];
        return (
          <div>
            <section id="content" className="gallery">
            <h1 className="category-title">/{lang === 'en' ? category.name : category.name_pl} </h1>
              <Articles 
              articles={category.articles.sort((a, b) => { return b.id - a.id })}/>
            </section>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;
