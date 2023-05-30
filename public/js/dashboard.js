const handlePostSubmit = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if(title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
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

const handlePostClicked = async (event) => {
    event.preventDefault();
    const postId = event.target.dataset.postId;
    console.log(postId);
    
    document.location.replace(`/edit/${postId}`);
}

var editButtons = document.querySelectorAll('.post-edit');

editButtons.forEach((button) => {
    button.addEventListener('click', handlePostClicked);
});

document.querySelector('#navTitle').textContent = 'Your Dashboard';

document.querySelector('.new-post-form').addEventListener('submit', handlePostSubmit);