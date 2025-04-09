# Vue Button Greeter

This projects is a button widget build with vue 3 & vite

To set up the app, simply execute the following commands.

```bash
npm run install
```

##### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

##### `npm run build`

Build the app.
It will generate built app on the `dist` folder.

##### `npm run vitest`
Unit test the app using vitest.
It will shows the test results in the terminal.


## How to use the widget
Write script tag on the html to use the widget by importing the file from the `widget_assets` folder with the filename `greeter-component.umd.cjs` Or Move the file into your project

And also if you want to use the style, import the css file with the filename `greeter-component.css`. Feel free to modify the style.

Example
```bash
<head..

<script src="path_to_file/greeter-component.umd.cjs"></script>
<link rel="stylesheet" href="path_to_file/greeter-component.css" type="text/css">

../head>
```

## About Virtual DOM

I chose for using the Virtual DOM (via Vue) for the widget because of these advantages: 
<ul>
    <li>Isolation: Avoids conflicts with host page styles and/or scripts.</li>
    <li>Reactivity: Easier to add dynamic features on the latter.</li>
    <li>Cleaner Code: Declarative templates are easier to write and maintain.</li>
    <li>Robustness: Works reliably in any environment; for example on websites thats using jQuery, React, or plain HTML.</li>
</ul>

In short, using Vue Virtual DOM ensures your component is stable, scalable, and easy to manage,= even when embedded across many third-party sites.
