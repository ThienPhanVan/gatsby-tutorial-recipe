import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        person {
          age
          name
        }
        title
        complexData {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h2>this is : {title}</h2>
    </div>
  );
};

export default FetchData;
