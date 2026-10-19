import mockDatabase from "../data/mock-db.json";
import URL from "./Constants";

const staticRoutes = {
  [URL.URL.All_CONTENT]: () => mockDatabase,
  [URL.URL.FRONT_PAGE]: () => mockDatabase.frontpage,
  [URL.URL.ALL_ARTICLES]: () => mockDatabase.articles,
  [URL.URL.FREE_ARTICLES]: () => mockDatabase.articles.find((article) => article.free),
  [URL.URL.PAID_ARTICLES]: () => mockDatabase.articles.find((article) => !article.free),
};

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

export async function getMockApiData(endpoint) {
  const path = endpoint.split("?")[0].replace(/\/+$/, "");
  let data = staticRoutes[path]?.();

  if (data === undefined) {
    const articlePath = `${URL.URL.ALL_ARTICLES}/`;
    if (path.startsWith(articlePath)) {
      const id = Number(path.slice(articlePath.length));
      data = mockDatabase.articles.find((article) => article.id === id);
    }
  }

  if (data === undefined) {
    throw new Error(`Mock API: no resource found for "${path}"`);
  }

  return clone(data);
}
