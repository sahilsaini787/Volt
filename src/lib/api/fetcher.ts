export async function fetchTags() {
  const apiURL = process.env.GRAPHQL_API_URL;
  if (!apiURL) {
    throw new Error("GRAPHQL_API_URL is not defined.");
  }

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query getTags {
              tags(where: {orderby: COUNT, order: DESC}, first: 10) {
                nodes {
                  name
                  id
                  slug
                  count
                }
              }
            }`,
      }),
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data.tags.nodes;
  } catch (error) {
    console.log("FETCH ERROR: " + error);
  }
}

export async function fetchCategories() {
  const apiURL = process.env.GRAPHQL_API_URL;
  if (!apiURL) {
    throw new Error("GRAPHQL_API_URL is not defined.");
  }

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetCategories {
            categories {
              nodes {
                id
                name
                slug
                link
              }
            }
          }`,
      }),
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data.categories.nodes;
  } catch (error) {
    console.log("FETCH ERROR: " + error);
  }
}

export async function fetchPosts() {
  const apiURL = process.env.GRAPHQL_API_URL;
  if (!apiURL) {
    throw new Error("GraphQL api url is not defined");
  }
  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query GetPosts {
          posts {
            nodes {
                featuredImage {
            node {
              altText
              mediaItemUrl
              mediaDetails {
                sizes {
                  sourceUrl
                  height
                  width
                }
              }
            }
          }
          id
          title
          excerpt
          content
          slug
          tags {
            nodes {
              name
            }
          }
          author {
            node {
              firstName
              lastName
              slug
            }
          }
          date
          modified
          categories {
            nodes {
              name
            }
          }
            }
          }
        }
      `,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data.posts.nodes;
  } catch (error) {
    console.log("Fetch Error: " + error);
  }
}
