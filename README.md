# Node test API

## Steps

1. Create a Postgres DB called *nodetest*.
2. Modify *config.json* file with the credentials of your database.
3. Execute migrations and seeders:
`npm run sequalize db:migrate`
`npm run sequalize db:seed:all`

4. Start the app with:
`npm start`

5. Execute eslint with:
`npm lint`

## Endpoints

1. Get All http://localhost:3000/api/posts
2. Get By ID http://localhost:3000/api/posts/1
2. Post http://localhost:3000/api/posts with payload:
`
{
    'author': 'Author',
    'title': 'Title',
    'content': 'Content'
}
`

3. Put http://localhost:3000/api/posts/1 with payload:
`
{
    'author': 'Author',
    'title': 'Title',
    'content': 'Content'
}
`

4. Delete http://localhost:3000/api/posts/1
