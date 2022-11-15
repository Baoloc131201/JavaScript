// backend->API(URL)->Fetch->JSON/XML
//-> JSON.parse->Javascript types
//->render ra giao diện với html

var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function(reponse) {
        return reponse.json();
    })
    .then(function(posts) {

        var htmls = posts.map((post) => {
                if (post.userId === 10) {
                    return `<li>${post.userId}</li>
                            <li>${post.title}</li>`;
                }
            })
            // var html = htmls.join("");
        document.querySelector(".post-block").innerHTML = htmls.join("");
    })
    .catch(function() {
        console.log("có lỗi");
    })