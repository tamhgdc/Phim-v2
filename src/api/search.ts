import client from ".";

export const searchTopKeyWord = async (
  key: string
): Promise<{ searchResults: string[] }> => {
  const keyWord = key.split("-")[1];
  const res = await client.post("/search/searchLenovo", {
    searchKeyWord: keyWord,
    size: 10,
  });
  return res.data.data;
};

export const searchResultsKeyWord = async (key: string) => {
  const keyWord = key.split("-")[2];

  const res = await client.post("/search/v1/searchWithKeyWord", {
    searchKeyWord: keyWord,
    size: 50,
    sort: "",
    searchType: "",
  });
  return res.data.data;
};

export const getConFigSearch = async () => {
  const res = await client.get("/search/list");
  return res.data.data;
};

export const searchAvandedResults = async (key: string) => {
  let params = key.split("-")[1];
  let config: any = JSON.parse(key.split("-")[2]);
  let sort = key.split("-")[3];

  const res = await client.post("search/v1/search", {
    size: 24,
    params,
    ...config,
    sort,
  });

  return res.data.data.searchResults;
};
