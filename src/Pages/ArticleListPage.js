import articles from "./article-content"
import ArticleList from "../component/ArticleList"

const ArticleListPage = () => {
  return (
    <>
    <h1>This is the article page!</h1>
    <ArticleList articles={articles}/>
    </>
  )
}

export default ArticleListPage