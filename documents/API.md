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