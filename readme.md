# Posts

This project was created using StencilJs and Redux Thunk. Can be used to view and edit posts.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />

This simultaneously runs both FrontEnd and BackEnd (json server).<br />

Open [http://localhost:3333](http://localhost:3333) to view the FrontEnd on the browser. <br />

Open [http://localhost:8080/posts](http://localhost:8080/posts) to view the JSON on the browser. <br />

![](./images/desktop.png)
![](./images/mobile.png)

### `npm run test.watch`

Launches the test runner in the interactive watch mode.<br />


## Application functionality.

* Allows the user to view all 100 posts by paginating.
* Allows the user to Edit the Title and/or Description.
* On click of Paginator below, loads appropriate 10 posts each.
* On Edit and Save, confirming alert is shown.