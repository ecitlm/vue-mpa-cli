import fetch from './config'
export default {

  /**
   * 新闻轮播图
   * @param {object} params 
   * @returns 
   */
  banner(params) {
    return fetch.fetchPost('News/banner', params);
  },

  /**
   * 笑话段子
   * @param {oeject} params 
   * @returns 
   */
  joke(params) {
    return fetch.fetchPost('joke/index', params);
  },

  /**
   * 文章分类列表
   * @param {object} params {page：分页，type:文章类型}
   * @returns 
   */
  new_list(params) {
    return fetch.fetchGet('News/new_list', params)
  },

  /**
   * 文章详情
   * @param {object} params {postid 文章ID}
   * @returns 
   */
  article(params) {
    return fetch.fetchGet('News/new_detail', params)
  },

/**
 * 微信精选
 * @param {object} params {ps:pagesize分页}
 * @returns 
 */
  WxUrl(params) {
    var data = {
      jkAPikey: "d046cd1f569ed13d951f0258902ef9b2"
    }
    params = Object.assign(params, data);
    return fetch.fetchGet('News/new_detail', params)
  },
/**
 * 
 * 视频分类下列表
 * @param {object} params {page:分页数10 20 30 ,type:0,1,2}
 * @returns 
 */
  video_type(params){
     return fetch.fetchGet('Video/video_type', params)
  },
/**
 * 花瓣图片
 * @param {any} params 
 * @returns 
 */
 photo(){
    return fetch.fetchGet('Picture/hua_ban');
 }
}