import axios from "axios";

export const execute = async (req, res) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
      params: {
        q: "ukraine",
        pageNumber: "1",
        pageSize: "25",
        autoCorrect: "true",
        safeSearch: "true",
        withThumbnails: "true",
        fromPublishedDate: "null",
        toPublishedDate: "null",
      },
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY as string,
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    });
    const articles = (response.data.value as any[]).map((article: any) => ({
      title: article.title,
      url: article.url,
      description: article.description,
      datePublished: article.datePublished,
      provider: article.provider.name,
      imageUrl: article.image.url,
    }));
    res.status(200).send(JSON.stringify({ articles }));
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  } 
}
