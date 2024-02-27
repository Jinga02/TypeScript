/** @format */

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//   };
// }

// function printAuthor2(author: Post["author"]) {
//   console.log(`${author.name} ${author.id}`);
// }

// function printAuthor(author: Post["author"]["name"]) {
//   console.log(`${author}`);
// }
// printAuthor2({ id: 1, name: "진재환" });
// printAuthor("진재환");

// type PostList = {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//   };
// }[];

// function printPost(post: PostList[number]["author"]) {
//   console.log(post.id, post.name);
// }

// const posts: PostList = [
//   {
//     title: "string",
//     content: "string",
//     author: {
//       id: 1,
//       name: "1string",
//     },
//   },
//   {
//     title: "string",
//     content: "string",
//     author: {
//       id: 2,
//       name: "string",
//     },
//   },
// ];

// posts.forEach((post) => printPost(post.author));

// type User = {
//   name: string;
//   age: number;
// };
// const test: User = {
//   name: "test",
//   age: 12,
// };

// function keyValue(user: User, key: keyof User) {
//   console.log(user[key]);
//   return user[key];
// }

// keyValue(test, "name");
// keyValue(test, "age");

// type User = typeof user;
// const user = {
//   name: "진재환",
//   age: 12,
// };

// function keyValue(user: User, key: keyof typeof user) {
//   console.log(user[key]);
// }
// keyValue(user, "name");

type User = {
  [key in "id" | "age" | "name"]?: User[key];
};
const user: User = {
  id: 1,
  //   name: "재환",
  age: 12,
};

type User2 = {
  // 여기서 key는 마음대로 가능
  // 하지만 모든 타입이 any
  [key in keyof User]: User2[key];
};
const user2: User2 = {
  name: "재환",
};
