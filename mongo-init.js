db.createUser({
  user: "user",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "data",
    },
  ],
});

db.posts.insertMany([
  {
    slug: "first-post",
    title: "Post Title",
    published: "2021-05-21T09:53:33.836Z",
    author: "Author Name",
    content: "Test content for the post.",
  },
  {
    slug: "second-post",
    title: "Post Title",
    published: "2021-05-21T09:53:33.836Z",
    author: "Author Name",
    content: "Test content for the post.",
  },
]);
