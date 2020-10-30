import { MongoDriverFactory } from "./MongoConnectorFactory";
import { MongoDriver } from "./MongoConnector";
import * as body from "body-parser";
import express from "express";
import { Console } from "console";
import cors from "cors";

const PORT = 3000;
const app = express();

app.use(body.json());
app.use(cors({origin: true, credentials: true}));

let taskDataStore;
MongoDriverFactory.build()
  .then(async (datastore) => {
    taskDataStore = datastore;
  })
  .catch(e => {
    throw e;
  });

  //Gets All Tasks
app.get("/tasks", (req,res)=> {
  taskDataStore.listTasks().then((tasks) => {
    res.send(tasks);
  });
})

  //Gets specific Tasks via Id
app.get("/task/:taskId", async (req,res)=> {
  const task: string = await taskDataStore.readTask(req.params.taskId);
  res.send(task);
});

  //Posts req from body
  //This Works 
app.post("/", function(req,res){
  taskDataStore.createTask(req.body).then(()=>{
    res.sendStatus(201);
  });
});

  //Updates Information 
app.patch("/", function(req,res){
  taskDataStore.updateTask(req.body).then(()=> {
    res.sendStatus(200);
  });
});

  //Deletes a Task
app.delete("/delete/:taskId", async function(req,res){
  await taskDataStore.deleteTask(req.params.taskId).then(()=>{
    res.sendStatus(200);
  });
});

app.listen(PORT, ()=> {
    console.log("[Server]: Server is running at http://localhost:${PORT}");
});