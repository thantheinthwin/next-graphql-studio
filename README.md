<h1 align="center" id="title">NextJs X GraphQL Studio</h1>

<p align="center">
  ![alt text](https://github.com/thantheinthwin/next-graphql-studio/assets/69258587/10b8cf42-6d24-47a8-b03b-56bd755c59a7)
</p>

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone this repository to your local machine.</p>

<p>2. Install the required node packages by executing the following command in your terminal:</p>

```
npm install
```

<p>3. Set up environments:</p>

- create a new file named ```.env.local``` in the root directory, same level with ```src``` directory

```
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://odyrf5sb5ve7hlbyi2vu3uygju.appsync-api.ap-southeast-1.amazonaws.com/graphql
NEXT_PUBLIC_GRAPHQL_API_KEY=da2-fmfzezuo7jae3gzue64nhtt5m4
```

<p>4. Start the development server using :</p>  

```
npm run dev
```

<p>4. Access the application in your browser at :</p>  

```
http://localhost:3030
```
<h2>🧐 Features</h2>

Here're some of the project's best features:

- Project List Page:
  - Display a table with columns for project name and description.
  - Fetch project data from the GraphQL endpoint using a query.
-Create Project Feature:
  - Place a "Create Project" button at the top left of the project table.
  - On button click, open a modal form to input the new project's name and description.
  - Submit the form data using a mutation to create a new project.
  - Update the UI to reflect the new project addition without a page reload.
- Inline Edit Feature:
  - Make the project name in the table editable on click.
  - After editing, submit the updated name to the server using a mutation.
  - Reflect the updated project name in the UI immediately.
- Delete Project Feature:
  - Add a delete icon/button in each row of the project table.
  - On clicking the delete button, show a confirmation dialog.
  - If confirmed, send a mutation to delete the project.
  - Remove the project from the UI after successful deletion.
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   ReactJs
*   NextJs
*   Typescript
*   GraphQL
*   Apollo
*   React Hook Form
*   Shadcn UI
*   Tailwind CSS
*   Zod

<h2>🏗️ Project structure</h2>

- ```src/```
  - ```components/```: Contains React components for different parts of the application.
  - ```graphql/```: Includes GraphQL queries, mutations and schemas.
  - ```types/```: Includes types
