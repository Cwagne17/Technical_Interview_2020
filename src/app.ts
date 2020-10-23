import { MongoDriverFactory } from "./MongoConnectorFactory";
import { MongoDriver } from "./MongoConnector";
import * as body from "body-parser";
import express from "express";
import { Console } from "console";

const PORT = 3000;
const app = express();

app.use(body.json());

let taskDataStore;
MongoDriverFactory.build()
  .then(async (datastore) => {
    taskDataStore = datastore;
  })
  .catch(e => {
    throw e;
  });

  //Gets All Tasks
app.get("/", (req,res)=> {
  taskDataStore.listTasks().then((tasks) => {
    res.send(tasks);
    console.log(tasks);
  });
})

  //Gets specific Tasks via Id
app.get("/task/:taskId", async (req,res)=> {
  const task: string = await taskDataStore.readTask(req.params.taskId);
  res.send(task);
  console.log(task);
});

  //Posts req from body
  //This Works 
app.post("/", function(req,res){
  taskDataStore.createTask(req.body).then((task) => {
    res.send(task);
    console.log(task +" New Task Was Created!");
  });
});

  //Updates Information 
app.patch("/", function(req,res){
  taskDataStore.updateTask(req.body).then(()=> {
    console.log("A Task has been updated");
    res.sendStatus(200);
  });
});

  //Deletes a Task
app.delete("/delete/:taskId", async function(req,res){
  await taskDataStore.deleteTask(req.params.taskId)
  res.sendStatus(200);
});

app.listen(PORT, ()=> {
    console.log("[Server]: Server is running at http://localhost:${PORT}");
});