# Node test API

## Steps

1. Create a Postgres DB called *nodetest*.
2. Modify *config/config.json* file with the credentials of your database.
3. Execute migrations and seeders:

* `npm run sequelize db:migrate` or `npm run migrate`
* `npm run sequelize db:seed:all` or `npm run seed`

4. Start the app with:

`npm start`

5. Run eslint verifications with:

`npm lint`

## Endpoints

1. Get All Posts 

**GET** http://localhost:3000/api/posts

2. Get Post By ID 

**GET** http://localhost:3000/api/posts/1

3. Create Post 

**POST** http://localhost:3000/api/posts

Payload:

`
{
    "author": "Author",
    "title": "Title",
    "content": "Content"
}
`

3. Update Post 

**PUT** http://localhost:3000/api/posts/1

Payload:

`
{
    "author": "Author",
    "title": "Title",
    "content": "Content"
}
`

4. Delete Post

**DELETE** http://localhost:3000/api/posts/1
