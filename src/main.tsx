/* The code snippet is importing necessary modules and components for a TypeScript React application.
Here's what each line is doing: */
/* `import React from "react";` is importing the React library from the "react" module. This allows the
code to use React functionalities such as creating components, managing state, and rendering
elements in the application. */
import React from "react";
/* The line `import ReactDOM from "react-dom/client";` is importing the `ReactDOM` object from the
"react-dom/client" module. This allows the code to use ReactDOM functionalities for rendering React
components into the DOM (Document Object Model) in the browser. */
import ReactDOM from "react-dom/client";
/* `import App from "./App";` is importing the `App` component from a file named "App" in the current
directory. This allows the TypeScript React application to use the `App` component in its structure
and render it within the application. The `App` component likely serves as the main component of the
application, containing other components and defining the overall structure and behavior of the
application. */
import App from "./App";
/* The line `import "./styles/dashboard.css";` is importing a CSS file named "dashboard.css" into the
TypeScript React application. This allows the application to apply styles defined in the CSS file to
the components rendered in the application. By importing the CSS file in this way, the styles
defined in "dashboard.css" can be used to style the components in the React application. */
import "./styles/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
