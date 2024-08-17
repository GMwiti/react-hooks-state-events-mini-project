import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks]=useState(TASKS);
  const [category, setCategory]=useState('All');

  function handleCategoryChange(newCategory){
    setCategory(newCategory)
  };

  function handleTaskFormSubmit(task){
    setTasks([...tasks,task])
  };


  const filteredTasks = category === "All" ? tasks : tasks.filter((task) => task.category === category);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      onCategoryChange={handleCategoryChange} />
      <NewTaskForm 
      categories={CATEGORIES.filter(cat => cat !== "All")} 
      onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList 
      tasks={filteredTasks}
      onTaskDelete={(id)=>setTasks(tasks.filter((task)=>task.id !== id))}
       />
    </div>
  );
}

export default App;
