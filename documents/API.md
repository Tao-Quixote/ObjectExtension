## API document

If you include the OE.js file into your page, you will get a global variable 'OE' in your browser, and all the following functions can be find in 'OE'.

### isArray

This method can be used to detect if the given object is Array or not. The usage of this method is as following codes:

```javascript
OE.isArray(obj);
```

### isString

This method can be used to detect if the given object is String or not. The usage of this method is as following codes:

```javascript
OE.isString(obj);
```

### isNumber

This method can be used to detect if the given object is Number or not. The usage of this method is as following codes:

```javascript
OE.isNumber(obj);
```

### isBoolean

This method can be used to detect if the given object is Boolean or not. The usage of this method is as following codes:

```javascript
OE.isBoolean(obj);
```

### isObject

This method can be used to detect if the given object is Object or not. The usage of this method is as following codes:

```javascript
OE.isObject(obj);
```

### isFunction

This method can be used to detect if the given object is Function or not. The usage of this method is as following codes:

```javascript
OE.isFunction(obj);
```

### createFrom

This method is created by Douglas Crockford.

This method can be used to create a new Object from a given object, so the new object's prototype comes from the given object. The usage of this method is as following codes:

```javascript
OE.createFrom(obj);
```

### addHandler & removeHandler

The two methods were used to add/delete event listener from the specific element. Both of them need three params, the element, the type of the event and the handler of the event. the usage of this method is as following codes:

```javascript
var btn = document.querySelector('#btn');
var handler = function() {};

OE.addHandler(btn, "click", handler);
OE.removeHandler(btn, "click", handler);
```

### getEvent

This method is used to get the Event that generate by user's action, it can be used in any kind of brower, IE included. The usage of the method is as following codes:

```javascript
OE.getEvent(e);
```

### getTarget

This method is used to get the target of the event, it can be used in any kind of brower, IE included. The usage of the method is as following codes:

```javascript
OE.getTarget(e);
```

### preventDefault

This method is used to prevent the default action of html element, it can be used in any kind of brower, IE included. The usage of the method is as following codes:

```javascript
OE.preventDefault(e);
```

### stopPropagation

This method is used to stop the propagation of the browser event, it can be used in any kind of brower, IE included. The usage of the method is as following codes:

```javascript
OE.stopPropagation(e);
```

### getPageXY

This method is used to solve the problem that IE8 and earlier versions of IE can not get event.pageX & event.pageY, beacuse the two can be calculated by scroll and client, so this is the method. The usage of the method is as following codes:

```javascript
OE.getPageXY(e);
```

The param e is the event that generate by user's actions. The result will be returned as an object, the structure is like this:

```javascript
{
	pageX: num,
	pageY: num
}
```