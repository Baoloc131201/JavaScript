var users = [{
        id: 1,
        name: "Huỳnh Bảo Lộc"
    },
    {
        id: 2,
        name: "Minh Văn"
    },
    {
        id: 3,
        name: "Thế Phương"
    }
];
var comments = [{
            id: 1,
            user_id: 1,
            content: "Anh ra video chưa anh ơi"
        },
        {
            id: 2,
            user_id: 2,
            content: "Vừa ra xong em ơi"
        },
        {
            id: 1,
            user_id: 1,
            content: "Vậy để em vào học ạ, cảm ơn anh"
        },
        {
            id: 3,
            user_id: 3,
            content: "Học kệ mẹ m, nói chi vậy"
        }
    ]
    // 1. lấy comments
    // 2. từ comments lấy ra user_id.
    // từ user_id lấy ra user tương ứng
    // Fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    })
}

function getUserByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter((couser) => {
            return userIds.includes(couser.id);
        })
        setTimeout(() => {
            resolve(result);
        }, 1000)
    })
}
getComments()
    .then((comments) => {
        var userIds = comments.map(function(couser) {
            return couser.user_id;
        });
        // console.log(userIds);
        return getUserByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
    .then((data) => {
        console.log(data);
        var commentsBlock = document.querySelector(".comment-block")
        var html = "";
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => {
                return user.id === comment.user_id
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentsBlock.innerHTML = html;
    })