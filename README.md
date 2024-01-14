# swatch.js

A library to overcomplicate the Swatch clock.

Inspired by MelonLand's [Swatch Internet Time](https://wiki.melonland.net/swatch_time).

### Installation

#### Import on the page
```html
<script type="text/javascript" src="./swatch.js">
```

### Basic usage

`Swatch(selector, options)`

#### HTML
```html
<span class="mySwatch"></span>
```
#### Javascript
```javascript
Swatch('.mySwatch')
```

### Other options
```javascript
const mySwatch = Swatch('.mySwatch', {
    prefix: '@', // Text to place before the clock
    millis: 864, // Update every 864 milliseconds
    realTime: true // Won't update if false
})

mySwatch.stop() // Stop updating
mySwatch.start() // Resume updating
mySwatch.refresh() // Manually update the value (if stopped)
```