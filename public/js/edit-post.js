const handleEditSubmit = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const postId = document.querySelector('#title').dataset.postId;

    console.log(event);

    if(event.submitter.dataset.type === 'delete') {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    } else {
        if(title && content) {
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: {'Content-Type': 'application/json'},
            });
            if(response.ok) {
                document.location.replace('/dashboard');
            }
            else {
                alert(response.statusText);
            }
        }
    }

}

document.querySelector('.edit-post-form').addEventListener('submit', handleEditSubmit);