import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
      name_pl
    }
  }
`;

export default CATEGORIES_QUERY;
