import { useParams } from "react-router-dom"
import articles from "./article-content"
import NotFoundPage from "./NotFoundPage";
import OtherArticles from "../component/OtherArticles";

const ArticlePage = () => {
  const {articleId} = useParams();
  const article = articles.find(article => article.name === articleId)
  
  if(!article){
    return <NotFoundPage/>
  }

  return (
    <>
    <h1>{article.title}</h1>

    {article.content.map((paragraph,i) => (
      <p key={i}>{paragraph}</p>
    ))} 
    
    <OtherArticles/>
    </>
  )
}

export default ArticlePage