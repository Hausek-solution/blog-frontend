import { Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import { ApplicationRoutes } from "./routes-constant";
import ResearchInsightPage from "../pages/research-insight";
import BlogListPage from "../pages/blog-list";
import BlogDetails from "../pages/blog-details";

export const CustomRoutes = () => {
  return [
    <Route>
      <Route element={<HomePage/>} path={ApplicationRoutes.HOME}></Route>
      <Route element={<ResearchInsightPage/>} path={ApplicationRoutes.RESEARCH_INSIGHT}></Route>
      <Route element={<BlogListPage/>} path={ApplicationRoutes.BLOG}></Route>
      <Route element={<BlogDetails/>} path={ApplicationRoutes.BLOG_DETAILS}></Route>
      <Route element={<BlogDetails/>} path={ApplicationRoutes.RESEARCH_DETAILS}></Route>
    </Route>,
  ];
};
