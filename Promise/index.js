var promise = new Promise(
    // Excutor
    function(resolve, reject) {
        //   logic
        // resolve(): thành công
        // reject():thất bại
        // fake call API
        resolve([{
            id: 1,
            name: "Javascript"
        }])
    });

promise
    .then(function(course) {
        // return new Promise(function(resolve) {
        //     setTimeout(function() {
        //         resolve([{
        //             id: 1,
        //             name: "Javascript"
        //         }]);
        //     }, 3000);
        // })
        return course
    })
    .then(function(data) {
        console.log(data);
        return data;
    })
    .then(function(data) {
        return new Promise(function(resolve) {
            data = resolve([4, 5, 6]);
        })
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("done");
    });


// Bài tập Promise xuất 1 2 3 4 trong 1s của từng số 
// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then((data) => {
//         console.log(2);
//         return new Promise((resolve, reject) => {
//             reject("có lỗi");
//         })
//     })
//     .then((data) => {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then((data) => {
//         console.log(4);
//         return sleep(1000);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// khái niệm Promise resolve
// 1. Promise.resolve
// 2.Promise.reject
// 3.Promise.all


// var promise = new Promise((resolve, reject) => {
//     // resolve("Thành Công");
//     reject("Lỗi");
// })
// promise
//     .then((data) => {
//         console.log("result:", data);
//     })
//     .catch((error) => {
//         console.log("result:", error);
//     })
//     .finally(() => {
//         console.log("done");
//     })


// K cần new khi dùng Promise.resolve và Promise.reject
// var promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([1]);
//     }, 1000);
// });

// var promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve([2, 3, 4]);
//     }, 2000)
// })

// Promise.all([promise1, promise2])
//     .then((data) => {
//         var result1 = [...data[0], ...data[1]];
//         console.log(result1);
//     });


// -------------------------------Destructuring-----------------

// var array = ["javascript", "PHP", "Ruby"];
// var [, b, ...rest] = array;
// console.log(b);
// console.log(rest);

// về object destructuring
// var course = {
//     name: "Javascript",
//     price: 1000,
//     image: "image-address",
//     children: {
//         name: "PHP",
//         price: 1200
//     }
// };
// // var { name, ...rest } = course;
// var { name: parentName, children: { name: childrenName } } = course;
// console.log(parentName);
// console.log(childrenName);
// // console.log(rest);

// // ví dụ về rest khi là tham số trong 1 function

// function logger(...params) {
//     console.log(params);
// }
// console.log(logger(1, 2, 3, 4, 5, 6, 7, 8, 9));
// ----------------------------------------------------------....rest
// function logger(a, b, ...params) {
//     console.log(a);
//     console.log(b);
//     console.log(params)
// }

// logger({
//     name: "javascript ",
//     price: 1200,
//     description: "Content"
// }, { name: "php", price: 1000, description: "description" }, 1, 2, 3, 4, 5, 6, 7, 8, 9)


// ------------------về tagged template literals---------------
// function hightlight([first, ...string], ...rest) {
//     // console.log(first);
//     console.log(string);
//     // console.log(rest1);
//     console.log(rest);
//     return rest.reduce((acc, current) => [...acc, `<span>${current}</span>`,
//         string.shift()
//     ], [first]);
// }
// var brand = "F8";
// var course = "Javascript";
// var html = hightlight `Học Lập trình ${course} tại ${brand} !`;
// console.log(html);

// trả về 1 mảng có 3 phần tử
// phần tử thứ nhất sẽ là 1 cái mảng chứa các chuỗi 
//được ngăn cách bởi các nội suy, nếu dc ngăn cách bỏi nội suy càng nhiều thì số lương phần tử thứ nhất có trong mảng sẽ được tăng lên và ngược lại
//các phần tử còn lại là phần nội suy mình thêm vào


// ---------------------Option chaining--------------------------
// var obj = {
//     name: "javascript",
//     cat1: {
//         name: "Bảo Lộc",
//         age: "21",
//         cat2: {
//             name: "Minh Văn",
//             age: "21",
//             cat3: {
//                 name: "Thanh Tâm",
//                 age: "21"
//             }
//         }
//     }
// }