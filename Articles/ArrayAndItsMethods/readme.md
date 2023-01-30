## [Published blog link](https://jeetch.hashnode.dev/array-and-its-methods "Click the link")
----

![Blog cover](./javascript_arrays_ab7slm.webp)

Array is a list of collections of variables separated with commas and kept in between square brackets.

Arrays can be created in two ways -

1. array created using array literal notation
    

```xml
let arr = new Array("Chocolate", "Milk");
```

1. array created using the Array() constructor
    

```xml
let arr = []
```

1. array created with Array.prototype.split() method from a string
    

```xml
let string = "Chocolate,Milk"
string.split(",")
```

There are other ways to create a array like using split method

Array aren't primitive btu are instead Array objects.

Some Points to keep in mind

### Basics

1. array values are kept in between two brackets and separated with comma
    
2. Array indexing starts from zero.
    
3. no limitations on what data or data type you can store
    
4. to access array you need to use its index number
    

### Array Methods

There are many methods/functions that comes with array.  
The following is an exhaustive list of array methods.

1. Array.map()
    

> The map() method creates a **new array** populated with the results of calling a provided function on every element in the calling array. get a modified copy of array for the conditions that you have provided. Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.

1. Array.forEach()
    

> The forEach() method executes a provided callback function once for each array element ForEach is not specifically used for this purpose u can use it for any other purpose that requires you to iterate over every element.

```xml
/// you want add hello string in front of every element in a array
const arr = ["Chocolate", "Bear", "Girl", "John"]
const newArr = []
arr.forEach((item) => {
    newArr.push("Hello " + item)
})
```

```xml
Output
["Hello Chocolate", "Hello Bear", "Hello Girl", "Hello John"]
```

1. Array.indexOf()
    

> The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. Let's take the previous example only for this method. So lets suppose you want to get a index of an element. Now off course you can count from zero to the number or use indexOf by passing the element value in. IndexOf returns the index of the element if it finds or else it returns -1 if not found.

```xml
const arr = ["Chocolate", "Bear", "Girl", "John"]
arr.indexOf("Chocolate")
arr.indexOf("Laptop")
```

```xml
Output
// 0
// -1  not found
```

1. Array.length()
    

> The length property of an object which is an instance of type Array sets or returns the number of elements in that array.

```xml
const arr = ["Chocolate", "Bear", "Girl", "John"]
arr.length
```

```xml
Output
// 4
```

1. Array.push()
    

> The length property of an object which is an instance of type Array sets or returns the number of elements in that array. Push is used to add a element from the end of an array.

```xml
const arr = ["Chocolate", "Bear", "Girl", "John"]
arr.push("Flowers")
```

```xml
Output
["Chocolate", "Bear", "Girl", "John", "Flowers"]
```

1. Array.unShift()
    

> The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

```xml
const arr = ["Chocolate", "Bear", "Girl", "John"]
arr.unShift("Flowers")
```

```xml
Output
["Flowers", "Chocolate", "Bear", "Girl", "John"]
```

1. Array.shift()
    

> The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

```xml
const arr = ["Chocolate", "Bear", "Girl", "John"]
arr.unShift()
```

```xml
Output
[ "Bear", "Girl", "John"]
```

1. Array.concat()
    

> The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. Let's suppose you want to join two array's. So to achieve that you can use concat method.

```xml
const arr1 = ["Chocolate", "Bear", "Girl", "John"]
const arr2 = ["Superman", "Coffee"]
arr1.concat(arr2)
```

```xml
Output
["Chocolate", "Bear", "Girl", "John", "Superman", "Coffee"]
```

1. Array.find()
    

> The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

1. Array.findIndex()
    

> The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. You may thinking why there would be two different ways of doing the same thing. The answer is, they are not. You can only pass an element in Array.indexOf("Chocolate") but findIndex can find your elements base on the conditions that you have provided; Let's suppose you want find a number that is larger than 10, now you cannot do this with indexOf method. But this is how you do it with Array.findIndex().

```xml
const arr = [1, 2, 3, 4, 5, 5, 6, 11]
arr.findIndex((num) => {
    return num > 10;
})
```

```xml
Output
// 11
```

1. Array.includes()
    

> The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```xml
const arr = [1, 2, 3, 4, 5, 5, 6, 11]
arr.includes(2)
arr.includes(30)
```

```xml
Output
// true
// false
```

1. Array.splice()
    

> The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. There are two things that you can do with splice method. 1. Delete element/elements from any specific position of an array 2. Add element/elements in a array at any position. Let's suppose you want to remove a element from the middle of an array. How would you do that. Up till now we have only discussed how to remove element from start and end of an array.

```xml
Syntax
splice(start, deleteCount, ...items)
```

```xml
/// Deleting number from array
const arr = [1, 2, 3, 4, 5, 5, 6, 11]
arr.splice(0,3)
/// deletes 3 elements from the starting of the array
```

```xml
Output
 [ 4, 5, 5, 6, 11 ]
```

```xml
/// Add number to an array
const arr = [ 1, 2, 3, 4, 5, 5, 6, 11 ]
arr.splice( 2, 0, 20, 30, 40 )
/// adding 3 numbers in between the array from index position 2
```

```xml
Output
 [ 1, 2, 3, 20, 30, 40, 4, 5, 5, 6, 11 ]
```

1. Array.slice()
    

> The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

```xml
Syntax
slice(start, end)
```

```xml
const arr = [ 1, 2, 3, 4, 5, 5, 6, 11 ]
arr.slice( 2, 5)
```

```xml
Output
[ 3, 4, 5, 5 ]
```

1. Array.sort()
    

> The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending

```xml
const arr  = [ 10, 3, 5, 7, 4, 11, 2 ]
arr.sort()
```

```xml
Output
[ 2, 3, 4, 5, 7, 8, 10, 11 ]
```

1. Array.join()
    

> The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```xml
const arr = ["Chocolate", "Bear", "Girl", "John"]
arr.sort()
```

```xml
Output
['Bear', 'Chocolate', 'Girl', 'John']
```

P.S - This aren't the only methods. There are many others that I haven't covered here like reduce, every, filter, reverse, join, keys, vaulues, isArray and many more...