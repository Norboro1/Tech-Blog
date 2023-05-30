
const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const comment_text = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('#comment').dataset.postId;
    
    if(comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id }),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', handleCommentSubmit);