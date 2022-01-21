$("#newPost").on("click", async function () {
    event.preventDefault();

    const blogTitle = $('#blog-title').val().trim();
    const blogContent = $('#blog-content').val().trim()

    if (blogTitle && blogContent) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ blogTitle, blogContent }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/dashboard');
            console.log("success", response)
        } else {
            console.log('Failed to create a new blog');
        }
    }
})


$("#deletePostBtn").on("click", async function () {
    event.preventDefault();
    console.log("click")
    let id = $(this).data("id")
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            document.location.replace('/dashboard');
            
        } else {
            console.log('Failed to delete project');
        }
})



$("#updatePostBtn").on("click", async function () {
    event.preventDefault();
    let id = $(this).data("id")
    console.log('ID TO POST! TO CHANGE!!!', id)
    const title = $(`#update-title${id}`).val().trim();
    const Content = $(`#update-content${id}`).val().trim();

    console.log(title, content)
    const response = await fetch(`/api/blogs/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(`response body is` , response.body) 
        if (response.ok) {
            document.location.replace('/dashboard');
            console.log("success", response)
        } else {
            console.log('Failed to create a contact');
        }
})


$("#newComment").on("click", async function () {
    event.preventDefault();
    let id = $(this).data("id")
    const Comment= $('#new-comment').val().trim();

    console.log(comment, comment, id)

    if (comment) {
    const response = await fetch('/api/blogs/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, id }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response)
        if (response.ok) {
            document.location.replace(`/${id}`);
            console.log("success", response)
        } else {
            console.log('Failed to create a new blog');
        }
    }
})


$(document).ready(function(){
    $('.modal').modal();
});



