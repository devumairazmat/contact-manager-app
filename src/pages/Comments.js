import React from 'react'

function Comments(props) {
    const content = props.comment.map((comment) => {
        return <Posts key={comment.id} comment={comment}/>
     });

  return (
    <div>{content}</div>
  )
}

function Posts(props) {
    const {id, name, comment} = props.comment;
    return (
   <>
   <div>{id}</div>
   <div>{name}</div>
   <div>{comment}</div>
   </>
    )

}

export default Comments