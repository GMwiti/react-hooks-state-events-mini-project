import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(e){
  e.preventDefault();
  onTaskFormSubmit({id: Date.now(), text,category})
  setText('')
  setCategory(categories[0])
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        name="text" />
      </label>
      <label>
        Category
        <select name="category"
        value={category}
         onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
