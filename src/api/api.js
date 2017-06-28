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

        return fetch.fetchGet('News/wx_select', params)
    },

    /**
     * 视频分类下列表
     * @param {object} params {page:分页数10 20 30 ,type:0,1,2}
     * @returns 
     */
    video_type(params) {
        return fetch.fetchGet('Video/video_type', params)
    },

    /**
     * 花瓣图片
     * @param {any} params 
     * @returns 
     */
    photo() {
        return fetch.fetchGet('Picture/hua_ban');
    },

    /**
     * 热播电影列表
     * @param {object} params 
     * @returns 
     */
    playing_movie_list(params) {
        return fetch.fetchGet('Movie/playing_movie_list', params);
    },

    /**
     * 热播电影详细信息
     * @param {object} params 
     * @returns 
     */
    movie_info(params) {
        return fetch.fetchGet('Movie/movie_info', params);
    },

    /**
     * 知乎日报列表
     * @returns 
     */
    zhihu_daily() {
        return fetch.fetchGet('Zhihu/zhihu_daily');
    },
    /**
     * 日报详情
     * @param {object} params  {id:id}
     * @returns 
     */
    zhihu_daily_info(params) {
        return fetch.fetchGet('/Zhihu/news', params);
    }
}