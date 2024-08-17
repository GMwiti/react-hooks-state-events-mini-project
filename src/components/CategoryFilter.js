import React from "react";

function CategoryFilter({categories, onCategoryChange}) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button 
        key={category}
        onClick={() => onCategoryChange(category)}>{category}</button>
      ))}
      <button onClick={() => onCategoryChange("All")}>
        All
        </button>
    </div>
  );
}

export default CategoryFilter;
