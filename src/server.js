const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`Message id: ${id}. For user ${user}`);
});

app.get("/users",(request,response)=> {
  const {page,limit} = request.query
  response.send(`Page: ${page}. Limit: ${limit}`)
})

const port = 3333;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
