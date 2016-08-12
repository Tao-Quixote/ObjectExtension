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

### getMouseCoordinate

This method is used to get the coordinate of the mouse when user click it. The result will contains clientX, clientY, pageX, pageY, screenX and screenY. The usage of the method is as following codes:

```javascript
OE.getMouseCoordinate(e);
```

### getRelatedTarget

IE8 and ealier version do not support attribute relatedTarget, but it provide another attributes to contain the infos, so this is the method which is compatible. It will return the element that the mouse get out from or coming into. The usage of the method is as following codes:

```javascript
OE.getRelatedTarget(e);
```

### getWheelDelta

This method is used to get mousewheel event's wheelDelta, it is compatible of opera 9.5 and ealier and firefox's DOMMouseScroll. The return value is the same as standard, and the usage of this method is as following codes:

```javascript
OE.getWheelDelta(e);
```

### getCharCode

This method is used to get the char code of the key which is pressed. In some browsers, when event keypress occured, event.charCode has the ASCII value of the key which is pressed, but the value of event.keyCode is unpredictable. So when we want to get the code of the pressed key, we should get the event.charCode first, if it is not exist, get event.keyCode. The usage of the method is as the following codes:

```javascript
OE.getCharCode(e);
```

### selectText

This method is used to select the specific text in specific input or textarea element. it requires three params, the first one is the element itself, the second one is start position of the text that you want to select, the last one is the end position of the text that you want to select. The usage of the method is as the following codes:

```javascript
OE.selectText(obj, startIndex, endIndex);
```

### getClipboardText

This method is used to get the text in the clipboard when a clipboard event is happening. The clipboard event can be any of the list of "beforecut, cut, beforecopy, copy, beforepaste, paste". When you want to use this method, a param is required: the clipboard event itself. The usage of this method is as the following codes:

```javascript
OE.getClipboardText(e);
```

### setClipboardText

This method is used to set the text in the clipboard when a clipboard event is happening. The clipboard event can be any of the list of "beforecut, cut, beforecopy, copy, beforepaste, paste". When you want to use this method, two params are required: the clipboard event itself and the value that you want to put into the clipboard. The usage of this method is as the following codes:

```javascript
OE.getClipboardText(e, v);
```

### isEmailSupported

This method is used to check if the browser support the type="email" in input, if it is supported, true will be returned. The usage of the method is as following codes:

```javascript
OE.isEmailSupported();
```

### isUrlSupported

This method is used to check if the browser support the type="url" in input, if it is supported, true will be returned. The usage of the method is as following codes:

```javascript
OE.isUrlSupported();
```

### isPatternSupported

This method is used to check if the browser support the pattern attribute in input, if it is supported, true will be returned. The usage of the method is as following codes:

```javascript
OE.isPatternSupported();
```

### addURLParam

This method is used to add query string behind the url, it requires three params: url, query name and query value.The usage of the method is as following codes:

```javascript
OE.addURLParam(url, name, value);
```
This method will return the final url, it's made of url?name=value.

### isHiddenSupported

This method is used to detect if the Page Visibility API supported, if this API is supported, true will be returned. The usage of the method is as following codes:

```javascript
OE.isHiddenSupported();
```