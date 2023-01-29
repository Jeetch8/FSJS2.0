![Globe image for blog back cover](./e4c84b3d-cf84-4b16-af75-7e16e6ee0fc7.webp)
Have you ever wondered how the internet works, how we can watch our favourite movies on Netflix from our cosy homes or being able to buy our favourite stuff without having to visit a store?

This all is possible cause a computer is listening to your request and gives back a response depending on what you ask for.

Let's take an example here when you put in amazon.com your browser sends a request to one of Amazon's computers to send them files for the website and once your browser gets a response in back with website files it displays them on the screen via browser.

Ok so now you know the gist of how it works but now let's dig a bit deeper into how things work.

So when click a website link from google search, underneath your browser sends a request to the webserver to send the files that you requested. There are two types of request protocols by which a browser can talk with a web server.

* HTTP
    
* HTTPS
    

Then it goes to DNS. Domain name system which is a directory of every domain name with IP addresses. An IP address is an address that computers, servers and other devices use to identify one another online. The vast majority of IP addresses are arranged into four sets of digits – i.e., 12.34. 56.78. A domain name is a string that helps us easily reach a specific website.

There are different types of protocols to make requests and exchange

* **HTTP**
    
* **HTTPS**
    

Next, as soon as the web server gets a request. The software looks for a specific file named index.html or default.html (as it is configured). And sends it back to the requester. There is no processing of documents required if the web page is static. They are served as-is. It is when it's a **dynamic page.** A **dynamic web server** consists of a static web server plus extra software, most commonly an *application server* and a *database*. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.

### Web Servers

The computer that's sending you the website files aka responder is known as a web server. A web server can do many things such as load balancing, reverse proxy, HTTP cache, mail proxy and many more. So for managing all the services, most web servers generally use one of the two most popular software - nginx and apache.

**Now Let's get you inside index.html and show some basic code that makes up all of our websites.**

### DOCTYPE

Doctype makes it easier for a web server to identify the document as HTML, XML or anything else

In the old days, people's websites only cared in two versions one for Netscape and the Microsoft explorer browser.

To Prevent the browser from rendering pages in a non-compatible way.

So that browser knows what to follow and so that they follow it properly.

Quirck mode and non-quirck mode

### HTML (&lt;html&gt;&lt;/html&gt;) Tag

Html is the root of the document.

It acts as a container for every other tag except the doctype tag.

Lang attribute should be included in it to help browsers and search engines.

lang=en

### Meta tags

Meta tags are used to help search engines crawl and index the pages. Meta tags are also helpful

Meta HTML elements represent elements that cannot be represented by other elements such as script, style, title, link

### Image tag

&lt;img src="" &gt;

IMG tag embeds an image in the document.

The src attribute is required and contains the path to the image you want to embed.

The alt attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility — screen readers read this description out to their users so they know what the image means. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network

errors, or content blocking its

default dimensions are defined by the embedded image's intrinsic values

### H tags are used for heading

Heading have 6 different variants h1,h2,h3,h4,h5, and h6 which all have different font size and font-weight.

```xml
Syntax of Heading tags

<h1>This is a sample h1 Tag Syntax</h1>
<h2>This is sample of h2 Tag Syntax</h2>
```

# This is a sample text of how h1 looks

## This is a sample text of how h2 looks

### P (paragraph) tag

&lt;p&gt;&lt;/p&gt;

The &lt;p&gt; tag **defines a paragraph**. Browsers automatically add a single blank line before and after each &lt;p&gt; element.

### B (Bold) tag

&lt;b&gt;&lt;/b&gt;

b - to bold text that's enclosed between the two tags

### Br (Break line) tag

&lt;br&gt;

Br line break and start from next line

### Div tag

&lt;div&gt;&lt;/div&gt;

Div is a generic element to containerise. The &lt;div&gt; element does not inherently represent anything. Instead, it's used to group content so it can be easily styled

### Section tag

Section block level element. The &lt;section&gt; HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it.

### Span tag

The span element is a generic inline container for phrasing content. It can be used to group elements. Now let's talk about how we can create static pages faster and more efficiently

#### Now let's talk about how we can create static pages faster and more efficiently.

### Emmet

Emmet is the most essential thing to have if you work with HTML in any shape or form.

It helps with all boilerplate codes.

Provides small snippets to help a developer write HTML & CSS code faster and more efficiently.

### Live server extension

The live server is an extension for vs code which helps in website development by refreshing or showing results instantly by refreshing the page on saving. This extension detects any changes in the HTML code and refreshes the page as it sees one. / Or maybe after saving the file it previews the website.

It's a js code that detects any changes in the code.

(Official)

This add-on will give you the reloading function, so you do not need to refresh the page every time you save your server-side code.

### Lorem ipsum

lorem ipsum is a shortcut provided by emmet for developers so that we don't have to spend time searching for the filler text for testing purposes.

Thank you for reading.