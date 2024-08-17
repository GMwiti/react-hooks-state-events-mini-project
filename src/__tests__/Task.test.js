// Task.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Task Component", () => {
  const task = {
    id: 1,
    text: "Test Task",
    category: "Work",
  };

  it("renders the task text and category", () => {
  });

  it("calls onDelete when the delete button is clicked", () => {
    const onDeleteMock = jest.fn();
  });
});
