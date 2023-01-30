## [Published blog link](https://jeetch.hashnode.dev/pseudo-elements "Click the link")
----

![Blog cover](./pQvsXATNF.webp)

A CSS pseudo-element is a keyword added to a CSS selector that lets you style a specific part of the selected HTML element. As a matter of fact pseudo element is used to work on written items inside html element.

The general syntax for CSS pseudo-elements looks like this:

```xml
selector::pseudo-element {
  property: value;
}
```

There are the six main pseudo-elements in CSS.

1. ::after
    
2. ::before
    
3. ::first-letter
    
4. ::first-line
    
5. ::marker
    
6. ::selection
    

There are others, but they are still considered experimental technology. So, in this post, the focus will be on the main six pseudo-elements.

## ::after

The ::after creates a pseudo-element that represents the last child of a selected HTML element. It is used to add styling to this particular element with the CSS content property. The syntax looks something like this:

```xml
selector::after {
  content: "value";
}
```

One of the example that i recently used was

#### HTML

```html
<h1>Hello</h1>
```

#### CSS

```css
h1::after{
  content:"😁";
}
```

**Output**

<iframe height="300" style="width:100%" src="https://codepen.io/JeetK/embed/JjLJLyO?default-tab=result&theme-id=dark">
  See the Pen <a href="https://codepen.io/JeetK/pen/JjLJLyO">
  Untitled</a> by Jeet chawda (<a href="https://codepen.io/JeetK">@JeetK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ::before

The ::before creates a pseudo-element that represents the first child of a selected HTML element. It is inline by default, and it is used to add styling to this particular element in collaboration with the CSS content property. The syntax looks something like this:

```xml
selector::before {
  content: "value";
}
```

**HTML**

```html
<h1>Hello</h1>
```

**CSS**

```css
h1::before{
  content:"😁";
}
```

**Output**

<iframe height="300" style="width:100%" src="https://codepen.io/JeetK/embed/OJvgvxG?default-tab=result&theme-id=dark">
  See the Pen <a href="https://codepen.io/JeetK/pen/OJvgvxG">
  Untitled</a> by Jeet chawda (<a href="https://codepen.io/JeetK">@JeetK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ::first-letter

The ::first-letter CSS pseudo-element applies styles to the first letter of the first line of a targeted element.The syntax looks something like this:

```xml
selector::first-letter {
  content: "value";
}
```

**HTML**

```html
<p>This is a sample paragraph for illustration purpose.</p>
```

**CSS**

```css
p::first-letter{
    font-size: 3rem;
    font-weight: bold;
    color: grey;
}
```

**Output**

<iframe height="300" style="width:100%" src="https://codepen.io/JeetK/embed/wvmemyV?default-tab=result&theme-id=dark">
  See the Pen <a href="https://codepen.io/JeetK/pen/wvmemyV">
  Untitled</a> by Jeet chawda (<a href="https://codepen.io/JeetK">@JeetK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ::first-line

The ::first-line CSS pseudo-element applies styles to the first line of the targeted element. The syntax looks something like this:

```xml
selector::first-line {
  content: "value";
}
```

**CSS**

```css
p ::first-line{
  text-decoration: underline;
  font-weight: bold;
  font-size: 1.5rem;
}
```

**Output**

<iframe height="300" style="width:100%" src="https://codepen.io/JeetK/embed/xxWrWzp?default-tab=result&theme-id=dark">
  See the Pen <a href="https://codepen.io/JeetK/pen/xxWrWzp">
  Untitled</a> by Jeet chawda (<a href="https://codepen.io/JeetK">@JeetK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ::marker

The ::marker pseudo-element selects the marker box of a list item, which typically contains a bullet or number. It is used on list items and the summary element. The syntax looks like this:

```xml
selector ::marker {
  property: value;
}
```

**HTML**

```html
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>consectetur adipiscing elit</li>
  <li>sed do eiusmod tempor incididunt</li>
  <li>ut labore et dolore magna</li>
</ul>
```

**CSS**

```css
li::marker{
  content:"🤯 ";
  font-size: 1.5rem;
}
```

**Output**

<iframe height="300" style="width:100%" src="https://codepen.io/JeetK/embed/LYdLmPg?default-tab=result&theme-id=dark">
  See the Pen <a href="https://codepen.io/JeetK/pen/LYdLmPg">
  Untitled</a> by Jeet chawda (<a href="https://codepen.io/JeetK">@JeetK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ::selection

The ::selection CSS pseudo-element applies styles to the part of a document that has been highlighted by the user (such as clicking and dragging the mouse across text).The syntax looks something like this:

```xml
selector::first-line {
  content: "value";
}
```

**CSS**

```xml
p::selection{
  color: white;
  background-color: #BF3325;
}
```

**Output**

<iframe height="300" style="width:100%" src="https://codepen.io/JeetK/embed/oNqwdgJ?default-tab=result&theme-id=dark">
  See the Pen <a href="https://codepen.io/JeetK/pen/oNqwdgJ">
  Untitled</a> by Jeet chawda (<a href="https://codepen.io/JeetK">@JeetK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>