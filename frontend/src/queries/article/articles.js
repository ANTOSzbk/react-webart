import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      title_pl
      category {
        id
        name
        name_pl
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;
