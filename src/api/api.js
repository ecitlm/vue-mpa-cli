import fetch from './config'
export default {

  /**
   * new_list
   */
  banner(params) {
    return fetch.fetchPost('News/banner',params);
  },

  joke(params){
    return fetch.fetchPost('joke/index',params);
  },
  new_list(params){
      return fetch.fetchGet('news/news_list',params)
  }
}