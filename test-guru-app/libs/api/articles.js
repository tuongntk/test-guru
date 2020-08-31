
import BaseApi from './base-api';

class ArticleApi extends BaseApi {
  constructor(accessToken) {
    super(accessToken, '/articles');
  }
}

export default ArticleApi;
