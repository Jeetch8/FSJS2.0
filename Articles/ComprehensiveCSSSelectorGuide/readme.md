## [Published blog link](https://jeetch.hashnode.dev/a-comprehensive-guide-on-css-selectors "Click the link")
----

![Blog cover](./b6bnUnh-k.webp)

Hello everybody,

I’ve been using CSS for many years now, but one thing I have not revisited in depth until recently is the topic of CSS selectors.

Why would I need to do this? We all know selectors inside-out by now, right?

The trouble is that (at least in my case) over time, it’s easy to get used to using the same trusted set of selectors on every project to achieve what you need to do.

And forget in the process that there were more than the basic selectors that I learned when I was getting started.

So today we'll be covering CSS Selectors in depth.

Let's start from the basic one's and then we will gradually get to advance.


## Universal selector 

You may have seen this used a lot to reset all default values such as margin, padding and others of the browser.

```css
* {
  margin: 0;
  padding: 0;
}
```

The asterisk (*) character represents Universal selectors.

#### OR

You can also use it to select everything inside a element like this

```CSS
.class * {
    color: Red;
    line-height: 20px;
}
```


Every HTML element, from the header to the footer, follows the universal selector's style. (except ::after and ::before)



## Type selector

A type selector is sometimes referred to as a tag name selector or element selector. They are the most common and basic CSS selector. They select HTML elements based on the element type.


```css
p {
  background-color: white;
letter-spacing: 20px;
}

```

## Id selector

The CSS ID selector matches an element based on the value of the element's id attribute.(same Id can not be used more than ones in a html document)


#### HTML
```html
<p id="para">This is a example para.</p>
```


#### CSS
```css
#para {
     font-size: 20px;
}
```


## Class selector


The CSS class selector matches elements based on the contents of their class attribute.

#### HTML
```html
<p class="para">This is a example para.</p>
```

#### CSS
```css
.para {
    font-size: 20px;
}
```


## Adjacent Sibling 
 
The adjacent sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.

```css
li:first-of-type + li {
  color: red;
}
```

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```
#### Output-----
<iframe height="318" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/JeetK/embed/BarZyQL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JeetK/pen/BarZyQL">
  Untitled</a> by Jeet chawda (<a href="https://codepen.io/JeetK">@JeetK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## General Sibling 
The general sibling combinator (~) separates two selectors and matches all iterations of the second element, that are following the first element (though not necessarily immediately), and are children of the same parent element.



#### HTML
```html
<a>Not</a>
<div></div>
<a>Selected</a>
<a>Selected</a>
```

```css
div ~ a {
  color: red;
}
```

#### Output

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/JeetK/embed/rNdwwaL?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JeetK/pen/rNdwwaL">
  Untitled</a> by Jeet chawda (<a href="https://codepen.io/JeetK">@JeetK</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>




## Attribute

The CSS attribute selector matches elements based on the presence or value of a given attribute

Attribute are very useful when our website are very dynamic.(you will know what am I saying)

It comes very handy when the page is very dynamic.
I am not saying to memorize them all but to keep them in back of your mind for some chaos time.
It well be really beneficial for you to keep all of in back of your mind that we can target elements in this way too.

Let me show you some interesting use of Attribute selectors



There are more than 5 ways to target this element

```html
<a href="https://www.google .com">Link</a>
```

Have u guess which are they

1. Of course with element selector
2. a[href$=".com"]
3. a[href*="google"]
4. a[href^="https"]
5. a[href^="https"][href$=".com"]



Where **a[href$=".com"]** selects a element whose href ends with ".com".
Where **a[href=*="google"]** selects element who has "google" anywhere in the href.
Where **a[href^="https"]** selects element whose href  starts with "https" 
Where** a[href^="https"][href$=".com"]** selects element whose href starts  with "https" and ends with ".com"


Attribute aren't limited to targeting element with just href.
Attribute can target pretty any element with pretty much any data such  as Language

#### HTML
```html
<p>老师好</p>
```

You may target the following para like this

#### CSS
```css
p[lang|="zh"]
```
#### OR

You can select elements with no chinese in it like this (This :not is a part of Pseudo classes.) 
```css
p:not([lang|="zh"])
```

type(ex - input)


with a class that contains anything like 

#### HTML
```html
<p class="paragraph">Hey this is a example. </p>
```

You can target the element with just starting 4 letters like this

#### CSS
```css
p[class^="para"]
```



#### Optional (just for knowledge)

[attr operator value i]
Adding an i (or I) before the closing bracket causes the value to be compared to case insensitivity.

[attr operator value s] Experimental
Adding an s (or S) before the closing bracket causes the value to be compared case-sensitively.
