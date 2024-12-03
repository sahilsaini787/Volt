export async function GetCategories() {
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
