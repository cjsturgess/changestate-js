# changestate.js

## Description

This simple, vanilla JS library adds a custom event `changestate` to the `Window` object, which is triggered when the browser's history state changes. This event is useful when you want to listen for changes to the URL that don't already fire the `popstate` or `hashchange` event.

## Usage

### Installation

To use **changestate.js**, you can install it via NPM:

```
npm install @your-username/changestate
```

Alternatively, you can download the minified file from the `dist/` folder and include it in your HTML file:

```html
<script src="path/to/changestate.min.js"></script>
```

### Usage

To use the `changestate` event, you can listen for it like any other event. See [Examples](#examples) below.

### Examples

```javascript
// Listen for changestate events with addEventListener
window.addEventListener("changestate", function(event) {
  console.log("The URL has changed to: " + location.href);
});

// Listen for changestate events with onchangestate
window.onchangestate = function(event) {
  console.log("The URL has changed to: " + location.href);
};

// Listen for changestate events with jQuery
$(window).on("changestate", function(event) {
  console.log("The URL has changed to: " + location.href);
});

```

### Building via Terser

To build the library via Terser, simply run:

```properties
foo@bar:~$ npm run build
```

This will create a minified file in the dist folder.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to open an issue or pull request.
