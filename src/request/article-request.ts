import { AxiosResponse } from "axios";
import { axiosInstance } from "../context/axios-context";
import { ArticleResponseType, Categories, RecentArticleResponse, RecentArticles } from "../types/article-type";

export const getRecentArticles = async (limit: number) : Promise<AxiosResponse<RecentArticles, any> | undefined> => {
    const response = axiosInstance.get(`articles/recent_articles?limit=${limit}`)
    return response
}

export const getRecentUpdated = async (limit: number) : Promise<AxiosResponse<RecentArticles, any> | undefined> => {
    const response = axiosInstance.get(`articles/recently_updated?limit=${limit}`)
    return response
}

export const getArticlesBasedOnCategories = async (limit: number, category: Categories, page: number) : Promise<AxiosResponse<RecentArticles, any> | undefined> => {
    const response = axiosInstance.get(`articles/categories/${category}?limit=${limit}&skip=${page}`)
    return response
}

export const getArticlebySlug = async (slug: string) : Promise<AxiosResponse<ArticleResponseType, any> | undefined> => {
    const response = axiosInstance.get(`articles/${slug}`)
    return response
}

export const getRelatedArticles = async (article_id: number, limit: number) : Promise<AxiosResponse<RecentArticles, any> | undefined> => {
    const response = axiosInstance.get(`articles/${article_id}/related_article?limit=${limit}`)
    return response
}

export const getFeaturedArticles = async () : Promise<AxiosResponse<RecentArticleResponse[], any> | undefined> => {
    const response = axiosInstance.get(`articles/featured_article`)
    return response
}