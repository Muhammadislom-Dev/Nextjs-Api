import { useState } from "react";

function CommentsPage() {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")

  const fetchComments = async () => {
    const response = await fetch("api/comments");
    const data = await response.json();

    setComments(data)
  };

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({commit}),
        headers: {
            
        }
    })
  }

  return (
    <>
    <input 
    type='text'
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    />
    <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load comments</button>
      {
        comments.map((comment) => {
            return(
                <div key={comment.id}>
                    {comment.id} {comment.text}
                </div>
            )
        })
      }
    </>
  );
}

export default CommentsPage