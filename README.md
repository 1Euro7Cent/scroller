
# Installation
```
npm i scroller_string
```
# Example code
```js
const Scroller = require('scroller_string')

// The first argument is the string that will be scrolled
// The second argument is the amount of letters on one print process
var scrll = new Scroller('this is a test', 4)

setInterval(() => {
    scrll.scroll(/* a number (default 1) to scroll*/) // returns the scrolled string
    console.log(scrll.scrolled) // or get the string here
}, 800);
```