

import ArticleApi from '@/libs/api/articles'
// import auth0 from '@/utils/auth0';

async function createArticle(req, res) {
  try {
    // const { accessToken } = await auth0.getSession(req);
    const accessToken = null;
    const json = await new ArticleApi(accessToken).create(req.body);
    return res.json(json.data);
  } catch(e) {
    return res.status(e.status || 400).json(e.response.data);
  }
}

async function getArticles(req, res) {
  try {
    const { data } = await new ArticleApi().getAll();
    return res.json(data);
  } catch(e) {
    return res.status(e.status || 400).json(e.response.data);
  }
}

export default async function handleArticle(req, res) {
  const { method } = req

  if (method === 'GET') {
    const json = await getArticles(req, res);
    return res.json(json.data);
  }

  // if (method === 'POST') {
  //   try {
  //     const { accessToken } = await auth0.getSession(req);
  //     const json = await new BlogApi(accessToken).update(req.query.id, req.body);
  //     return res.json(json.data);
  //   } catch(e) {
  //     return res.status(e.status || 422).json(e.response.data);
  //   }
  // }
}