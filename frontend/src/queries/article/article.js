import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      title_pl
      content
      content_pl
      image {
        url
      }
      category {
        id
        name
        name_pl
      }
      published_at
    }
  }
`;

export default ARTICLE_QUERY;
