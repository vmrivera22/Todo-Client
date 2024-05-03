# Todo-Client

## Summary

> This application is a web app used to keep track of tasks. A user can create a new task, set a title, description, and due date. Once the task has been created the user can edit the task and mark it as complete once done.

## Color Significance

> - Red: A task that has a red background indicates that the task is overdue and has not been completed.
> - Green: A task that has a green background indicates that the task has been completed - regardless of due date.
> - White: A task with a white background indiates a regular task that is not overdue but has yet to be completed.

## Libraries

> - React Router - Routing between different web pages.
> - React Query - Improved performance for backend CRUD operations.
> - Flowbite - Reduced development time and professional looking UI.
> - Tailwind - Quicker and uniform styling.

## Pages

> - Home ("/"): This is the main page of the web app that shows a table with the tasks that have been created. The tasks are paginated so only 10 tasks are fetched at a time.
> - Todo ("/todo/{id}"): This page gives more information about the task {id}.
> - New Todo ("/newtodo"): This page is used to create a new task. Here the user can set the task name, description, and due date.
> - Edit Todo ("/edit/{id}") This page is used to edit an existing task. Here the user can change the task name, description, due date, and mark the task as complete or incomplete.
> - Help ("/help"): This page gives instruction on how to create and edit tasks as well as gives a description of the task's color significance.
