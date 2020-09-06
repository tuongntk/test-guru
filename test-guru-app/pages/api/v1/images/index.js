import axios from 'axios';

export default async function handleArticle(req, res) {
  const { method } = req

  if (method === 'POST') {
    try {
      const apiUrl = `${process.env.TEST_GURU_API_URL}/images/upload`;

      const formData = new FormData();
      formData.append('image', req.body);

      const result = axios.post(apiUrl, formData);
      return res.json(result.data);
    } catch (e) {
      return res.status(e.status || 400).json(e.response.data);
    }
  }
}