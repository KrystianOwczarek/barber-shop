// Set a variable that contains all the fields needed for articles when a fetch for

const IMAGES_GRAPHQL_FIELDS = `
  sys {
    id
  }
  id
  nazwa
  slug
  zdjcie {
    url
    title
    description
  }
`;

const SERVICES_GRAPHQL_FIELDS = `
  sys {
    id
  }
  id
  nazwa
  slug
  rodzaj
  cena
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
   `https://graphql.contentful.com/content/v1/spaces/gtdmu5nge654`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? 'Kv3IOmcbMqlCl3hjYlZxsGRRrYSb2w4uX2TsL9dP14M'
            : 'DO8Ig3vs0MkSZSGpoL8MKzUFLGqewdAL-FwBNX63gdQ'
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["products"] },
    }
  ).then((response) => response.json());
}

function extractServicesProductsEntries(fetchResponse) {
  return fetchResponse?.data?.usugiCollection?.items;
}

function extractImagesEntries(fetchResponse) {
  return fetchResponse?.data?.galeriaCollection?.items;
}

export async function getAllServices(
  // For this demo set the default limit to always return 3 articles.
  limit = 1,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const services = await fetchGraphQL(
    `query {
        usugiCollection(where:{slug_exists: true}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${SERVICES_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );

  return extractServicesProductsEntries(services);
}

export async function getAllImages(
  // For this demo set the default limit to always return 3 articles.
  limit = 1,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const images = await fetchGraphQL(
    `query {
        galeriaCollection(where:{slug_exists: true}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${IMAGES_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );

  return extractImagesEntries(images);
}

// export async function getArticle(
//   slug,
//   isDraftMode = false
// ) {
//   const article = await fetchGraphQL(
//     `query {
//         knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
//       isDraftMode ? "true" : "false"
//     }) {
//           items {
//             ${PRODUCTS_GRAPHQL_FIELDS}
//           }
//         }
//       }`,
//     isDraftMode
//   );

//   if(extractArticleEntries(article)){
//     return extractArticleEntries(article)[0];
//   }
// }