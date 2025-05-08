const listElement = document.querySelector('.posts')
const postTemplate = document.querySelector('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('#posts-container')

function sendHTTPRequest(method, url, data){
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json()
    });
}

async function fecthPosts() {
    const responseData = await sendHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    console.log(responseData)
    const listOfPost = responseData

    for (const post of listOfPost){
        const postContainer = document.createElement('article')
        postContainer.id = post.id
        postContainer.classList.add("post-item")

        const title = document.createElement('h2')
        title.textContent = post.title

        const body = document.createElement('p')
        body.textContent = post.body

        const button = document.createElement('button')
        button.textContent = 'Delete Post'
        
        postContainer.append(title)
        postContainer.append(body)
        postContainer.append(button)   

        listElement.append(postContainer)
    }
}

fetchButton.addEventListener('click', fecthPosts)

async function createPost(title, constent){
    const userId = Math.floor(Math.random() * 100)
    const post = {
        title: title,
        body: constent,
        userId: userId
    }

    sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post)

}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const title = event.target.querySelector('#title').value
    const content = event.target.querySelector('#content').value

    createPost(title, content)
})

postList.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        const postId = event.target.closest('article').id
        console.log(postId)
        sendHTTPRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
})


