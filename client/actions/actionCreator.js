export function increment(index){
    return{
        type:'INCREMENT_LIKES',
        index
    }
}

export function addComment(postId,author,comment){
    return {
        type:'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

export function removeComment(postId,commentIndex)
{
    return{
        type:'REMOVE_COMMENT',
        postId,
        commentIndex
    }
}
