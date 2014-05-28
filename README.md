jQuery.event.dblrightclick
==========================

Special event "Double right click" for jQuery 2

Usage:

```javascript
// Simple usage
$("#widget").on("dblrightclick", ".item", function() {
    alert("This is double right click!");
});

// With params
$("#widget").on("dblrightclick", ".item", {
    offsetX : 2,
    offsetY : 2,
    offsetT : 500
}, function() {
    alert("This is double right click!");
});
```
