# Node.JS Example API Challenge

## The Challenge

Fork this repository and start the project with the following commands:

#### First Terminal Window

Start MongoDB with docker

```
cd example-api
docker-compose up -d
```

#### Second Terminal Window

Install dependencies and start the API

```
npm install
```

```
npm start
```

The simple API connects to MongoDB and provides two endpoints for fetching posts stored in the database.

### Get all posts

```
http://localhost:3000/api/posts
```

### Get individual posts

```
http://localhost:3000/api/posts/:slug # e.g. http://localhost:3000/api/posts/first-post
```

## Tasks

We would would like you to expand upon this pre-built API providing the following functionality:

- [ ] Create an API route to add/save more posts to the database
- [ ] Create an API route to register a user and save the user to the database
- [ ] Create a route to allow a user to login with the username and password they used to register
- [ ] Modify the post routes to ensure that only an authenticated user can list the posts (currently anyone can list the posts)
