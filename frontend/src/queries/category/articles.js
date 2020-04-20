import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: String!) {
    categories(where: { name: $id }) {
      id
      name
      name_pl
      articles {
        id
        title
        title_pl
        content
        image {
          url
        }
        category {
          id
          name
          name_pl
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;
