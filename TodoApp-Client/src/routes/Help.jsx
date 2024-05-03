import React from "react";

const Help = () => {
  return (
    <div className="p-5">
      <h2 className="font-bold text-2xl mt-6 mb-2">Creating a New Task</h2>
      <p>
        Click the "Create Task" button to create a new task. Enter a title,
        optional description, due date, and check the box if the task has
        already been complete. To finish creating the task click the "Create
        Task" button. To cancel the task click the "Cancel" button.
      </p>
      <h2 className="font-bold text-2xl mt-6 mb-2">Edit a Task</h2>
      <p>
        To edit a task, start by clicking the task you want to edit in the home
        page. After that click the edit button at the bottom of the page, this
        will bring you to the edit interface. From here make the changes you
        want to make and click the "Submit" button to save the changes.
      </p>
      <h2 className="font-bold text-2xl mt-6 mb-2">Task Color Significance</h2>
      <div>
        Overdue tasks have a light{" "}
        <p className="border-red-400 border bg-red-200 inline px-1">red</p>{" "}
        border and background.{" "}
      </div>
      <div>
        Completed tasks have a light{" "}
        <p className="border-green-400 bg-green-200 border inline px-1">
          green
        </p>{" "}
        border and background.{" "}
      </div>
    </div>
  );
};

export default Help;
