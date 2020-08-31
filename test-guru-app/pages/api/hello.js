// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

import ArticleApi from '@/libs/api/articles';

export default async function getArticles(req, res) {
  try {
    const { data } = await new ArticleApi().getAll();
    return res.json(data);
  } catch(e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}
