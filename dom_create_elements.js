const createCommentElement = (comment) => {
    const commentElement = document.createElement('li');

    const commentWrapperElement = document.createElement('div');

    commentElement.appendChild(commentWrapperElement);

    return commentElement;
}

const createCommentsList = (comments) => {
    const commentsContainerElement = document.createElement('div');
    
    comments.forEach( (comment) => {
        commentsContainerElement.appendChild(createCommentElement(comment))
        if (comment.replies.length > 0) {
            comment.replies.forEach((reply) => {
                console.log(reply)
            })
        }
    });

    return commentsContainerElement;
}

export const renderComments = (commentsData) => {

    console.log(commentsData)
    const commentSectionElement = document.querySelector('#comments-section');
    commentSectionElement.appendChild(createCommentsList(commentsData.comments));
}