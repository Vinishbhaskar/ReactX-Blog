import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content"
import useUser from "../hooks/useUser";
import AddCommentForm from "../component/AddCommentForm";
import CommentsList from "../component/CommentsList";
import OtherArticles from "../component/OtherArticles";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false });
  const { canUpvote } = articleInfo;
  const { articleId } = useParams();

  const {user, isLoading} = useUser()

  const navigate = useNavigate();
  
  //Use State for Upvoting
  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, { headers })
      const newArticleInfo = response.data[0]
      setArticleInfo(newArticleInfo)
    }
    if (!isLoading) {
      loadArticleInfo();
    }
  }, [articleId, isLoading, user]);

  // Checking article
  const article = articles.find(article => article.name === articleId)
  
  //Upvoting the article

  const addUpvote = async() =>{
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(`/api/articles/${articleId}/upvote`,null, {headers})
    const updatedArticle = response.data
    setArticleInfo({
      ...updatedArticle,
      canUpvote: true,
    })
  }

  if(!article){
    return <NotFoundPage/>
  }

  return (
    <>
    <h1>{article.title}</h1>

    <div className="upvotes-section">
      {user
        ? <button onClick={addUpvote} disabled={!canUpvote}> {canUpvote ? 'Upvote' : 'Already Upvoted'} </button>
        : <button onClick={() => {
                        navigate('/login');
                    }}> Log in to Upvote </button>}
      <p>This article has {articleInfo.upvotes} upvote(s)</p>
    </div>
  
    {article.content.map((paragraph,i) => (
      <p key={i}>{paragraph}</p>
    ))} 
    {user
      ? <AddCommentForm
          articleName={articleId}
          onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
        />
      : <button onClick={() => {
                        navigate('/login');
                    }}> Log in to Upvote </button>}
    
    <CommentsList comments={articleInfo.comments}/>

    <OtherArticles/>

    </>
  )
}

export default ArticlePage