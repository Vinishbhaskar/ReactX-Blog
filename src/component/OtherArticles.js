import { useParams } from "react-router-dom"
import articles from "../Pages/article-content"

const OtherArticles = () => {
  const {articleId} = useParams();
  const otherArticles = articles.filter(article=> article.name !== articleId).slice(0,3);

  return (
    <>
    <h3>Other Articles:</h3>
      <ul>
        {otherArticles.map((article, i) => (
          <li key={i}>
            <a href={`/article/${article.name}`}>{article.title}</a>
          </li>
        ))}
      </ul> 
    </>
  )
}

export default OtherArticles