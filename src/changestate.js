/**
 * changestate.js
 * A simple, vanilla JS library adding a custom event, changestate, to the Window object, triggered when the browser's history state changes.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Patch a given state change method to trigger the changestate event.
    const patchStateChangeMethod = (methodName) => {
        let originalMethod = history[methodName];
        history[methodName] = () => {
            let changeStateEvent = new CustomEvent('changestate', {detail: {state: arguments[0], title: arguments[1], url: arguments[2]}});
            originalMethod.apply(history, arguments);
            window.dispatchEvent(changeStateEvent);
        };
    }

    // Helper function to patch multiple methods in one go.
    const patchStateChangeMethods = (methodNames) => {
        for (var methodName of methodNames) {
            patchStateChangeMethod(methodName);
        }
    }

    // Patch the pushState and replaceState methods.
    patchStateChangeMethods(['pushState', 'replaceState']);
});