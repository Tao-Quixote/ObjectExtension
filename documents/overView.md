## Overview

### 1、Global variable －－ OE

This variable contains all method, you can add a certain method to Object.prototype by ```OE.methodName()```, and you can also add all of the methods in the OE to Object.prototype by ```OE.all()```.

This variable will returned by a IIFE, it is written in the OE.js file.

### 2、Project's architectrue

```architecture
|- ObjectExtension
	|- documents
		|- this folder contains all the documents of OE.js.
	|- html
		|- this folder contains some page for test.
	|- modules
		|- this folder contains all the mothod provided by OE.js, and all of them
			are seperated into divded functions. You can see the details of each
			method.
	|- OE.js this file can be used in product, it will add a global variable OE.
	|- README.md