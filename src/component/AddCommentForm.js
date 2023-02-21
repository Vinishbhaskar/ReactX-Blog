import { useState } from "react"
import axios from "axios"

const AddCommentForm = ({articleName, onArticleUpdated}) => {
  
  const [name, setName] = useState('')
  const [commentText, setCommnetText] = useState('')

  const addComment = async () =>{
    const response = await axios.post(`/api/articles/${articleName}/comments`,{
        postedBy: name,
        text: commentText,
    })
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName('')
    setCommnetText('')
  }
  return (
    <div id="add-comment-form">
        <h3>Add a Comment</h3>
        <label>
            Name:
            <input 
                value={name}
                onChange={e =>setName(e.target.value)}
                type="tex"/>
        </label>
        <label>
            Comment:
            <textarea 
                    value={commentText}
                    onChange={e =>setCommnetText(e.target.value)}
                    rows="4" cols="50" />
        </label>
        <button onClick={addComment}>Add Comment</button>
    </div>
  )
}

export default AddCommentForm