# Interview Scheduler

A simple single-page React app, created in conjunction with Express and PSQL, allowing users to schedule people for an interview for different days of the week.

## Final Product

The landing page showcases the currently scheduled interviews, their times, and the interviewer available. The side nav bar showcases the day of the week and how many spots are remaining for the week. Hovering over a currently booked appointment will allow the edit and delete button to show up.

![Landing Page](https://github.com/Cvanimschoot/scheduler/blob/master/docs/Landing_Page.png?raw=true)

Clicking the plus button on any empty appointment will bring up the form where a name and interviewer can be selected. Choosing an already existing appointment and clicking edit will prefill the information in so quick edits can be made

![Edit Form](https://github.com/Cvanimschoot/scheduler/blob/master/docs/Edit_Form.png?raw=true)

All adding/editing/deleting of appointments will use axios requests to change the database. If the axios request can't be completed, error information will be displayed to help users understand the server connection is not working

![Server Error](https://github.com/Cvanimschoot/scheduler/blob/master/docs/Error_Save.png?raw=true)

## Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
