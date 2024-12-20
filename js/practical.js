// jazbalrdy saqtaý úshin massıv
let posts = [];

// jazba qosŷ fýnksıasy
function addPost(event) {
    // Taqyryp pen mazmun óristerin DOM-nan tabý
    event.preventDefault()
    const titleInput = document.getElementById('titleInput')
    const contentInput = document.getElementById('contentInput')

    if (titleInput.value && contentInput.value) {
        let post = {
            id:Date.now(),
            title: titleInput.value,
            content: contentInput.value,
        };

        posts.push(post);

        renderPosts();

        titleInput.value = '';
        contentInput.value = '';
    }

    
}

function renderPosts() {
    const blogPostsDiv = document.getElementById('blogPosts');
    blogPostsDiv.innerHTML = '';

    posts.forEach(post => {
        let postDiv  = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>${post.id}</small>
            <button onclick="editPost(${post.id})" class="button" style="background-color: orange;">Óńdeý</button>
            <button onclick="removePost(${post.id})" class="button" style="background-color: red;">Joiu</button>
            `;
            blogPostsDiv.appendChild(postDiv);
    });
}
let addBtn = document.getElementById('addPostBtn')
document.getElementById('addPostBtn').addEventListener('click', addPost);


function removePost(id) {
    posts = posts.filter(post => post.id !== id);
    renderPosts();
}

function editPost(id) {
    let post = posts.find(post => post.id == id);

    document.getElementById('titleInput').value = post.title;
    document.getElementById('contentInput').value = post.content;

    removePost(id);
}



// let posts = [];

// document.getElementById('postForm').addEventListener('submit', addPost);

// function addPost(event) {
//     event.preventDefault();

//     const titleInput = document.getElementById('titleInput');
//     const contentInput = document.getElementById('contentInput');

//     if (titleInput.value && contentInput.value) {
//         let post = {
//             id: Date.now(),
//             title: titleInput.value,
//             content: contentInput.value,
//         };

//         posts.push(post);
//         renderPosts();

//         titleInput.value = '';
//         contentInput.value = '';
//     }
// }

// function renderPosts() {
//     const blogPostsDiv = document.getElementById('blogPosts');
//     blogPostsDiv.innerHTML = '';

//     posts.forEach(post => {
//         const postDiv = document.createElement('div');
//         postDiv.className = 'post';
//         postDiv.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.content}</p>
//             <small>${new Date(post.id).toLocaleDateString()}</small>
//             <button onclick="editPost(${post.id})" style="background-color: orange;">Өңдеу</button>
//             <button onclick="removePost(${post.id})" style="background-color: red;">Жою</button>
//         `;
//         blogPostsDiv.appendChild(postDiv);
//     });
// }

// function removePost(id) {
//     posts = posts.filter(post => post.id !== id);
//     renderPosts();
// }

// function editPost(id) {
//     let post = posts.find(post => post.id === id);

//     document.getElementById('titleInput').value = post.title;
//     document.getElementById('contentInput').value = post.content;

//     removePost(id);
// }