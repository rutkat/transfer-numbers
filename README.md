# Transfer Numbers - jQuery Plugin

## Description

jQuery Transfer Numbers is a plugin that transfers numbers by flying from one element to another.

## Features 

* Increments and Decrements Values
* Transfer speed is customizable
* Gamification style for your Web Apps
* Bind to most event listeners
* Stops at 0

## Basic usage 

You need to include the jQuery library and the plugin file:

```html
  <!-- Adjust depending on where you have located the files -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
  <script src="js/jquery-transfer-numbers.js"></script>
```


A unique element containing a numeric unsigned integer is required for the origin. A second unique element is required for the destination:
```html
 <div> This is the source <span id="origin">25</span></div>
 <div> This is the destination <span id="destination">0</span></div>
```

Initialize the plugin by placing it inside an event listener.  The binding or element should be the origin, but does not have to be.   Apply the function name 'transferN' to the element containing the listener:
```javascript
 $('#origin').click( function() {

    $(this).transferN(); // Number will countdown to zero

 });
``` 

## Advanced usage 

The optional target parameter defines the target element.  You may specify any speed duration in milliseconds, and third parameter is a boolean for flying values to the target element:
```javascript
 $('#origin').click( function() {

    $(this).transferN({ target: '#destination', speed: 1000, fly: false }); // 1 second per flying digit

 });
```


For a demonstration of usage and examples visit [the demo page](http://runastartup.com/transfer-numbers/)

## Change Log
1.2.2
```html
  -Optional flying
  -More accurate count by allowing one concurrent transfer
  -Target element no longer required
  -Removed event listener after first fire to prevent error
```
1.0.0
```html
  -Public Release
```
