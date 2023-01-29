## [Published blog link](https://jeetch.hashnode.dev/markdown-cheat-sheet "Click the link") 

![Blog back cover of markdown logo](./1_BgnYogdj5-YCTXtC3lCKYQ.webp)
`Markdown` is a markup language for formatting text using simple syntaxes. It is widely used for blogging, websites, comment management services, readme files, and documentation. Unlike HTML, markdown doesn't have tags to define structure and features. The markdown syntaxes are combinations of special characters with plain texts.

In this article, we will go through more than 99% of the syntax that you will ever need to write a markdown page or document.

### Heading

Every document needs a heading without headings it's incomplete. The heading is by far the easiest to do. You just put a hashtag and a space before your string of characters. There are six types of heading sizes which go from h1 to h6 increasing hashtags with them.

`# Heading1`

`## Heading2`

`### Heading3`

And they look like these

# `Heading 1`

## `Heading 2`

### `Heading 3`

### Bold Text

Next comes how to **bold** a text

To bold a selected area of text you just need to put two asterisk symbols or underscore at each end like this `**Bold text**` `__Bold Text__` which outputs as **Bold text**.

### Italic Text

Next, comes how to make the text italic.

To create an italic text put a single asterisk symbol or underscore at each end like this `*Italic text*` or `_Italic text_` which outputs as *Italic text*.

### Strike

Next comes striking a text.

Striking can be achieved by putting two tilde symbols at each of the texts you want to strike like this `~~Strike text~~` which outputs <s>Strike text</s>.

### Links

While you are writing some sort of documentation or anything you need to put some references from another page. And to achieve putting a link is the best choice. `[Text](link "tooltip")` is the syntax which outputs Text.

### Embedding image

To Embed an image following is the syntax:-

`![alt text](image url)`

Alt text is the alternative text shown in case of some network failure or it is also helpful for specially-abled people as the screen reader can only read text. Let give you an example - `![A man standing in the middle of a wheat field looking at mountains](`[`https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8`](https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80)`)` which gives an output of the following image.

![A man standing in the middle of a wheat field looking at mountains](https://cdn.hashnode.com/res/hashnode/image/upload/v1674993192751/4cfab9a9-cdfa-415f-b021-193e89cdcb8d.jpeg)

### Highlighting Text

One of the ways to grab a reader's attention or emphasise the importance of a text or a whole sentence is to highlight it. To highlight a particular set of text you have to add two equal signs on each side of the text like this `==Text Here==`. And the output looks like this <mark>Text Here</mark>.

### Ordered List

To create an ordered list following is the syntax `1.` that's it order number followed by a dot and then a space in front of it. Let me show you an **example** of it -

```markdown
1. Item no.1 
2. Item no.2
3. Item no.3
```

And **output** is

> 1. Item no.1
>     
> 2. Item no.2
>     
> 3. Item no.3
>     

### Unordered list

There are times when an order is not required for a list. So to create an unordered list the syntax is `-` a hyphen followed by a space. Yup, it's that simple.

```markdown
- Item no.1
- Item no.2
- Item no.3
```

**Output**

> * Item no.1
>     
> * Item no.2
>     
> * Item no.3
>     

### Task list

There is one last list that you can create in Markdown and that is a task list where you can mark the task as done or not. The syntax looks like this - `- [ ] Task no.1`

First comes a hyphen then a space and then two square brackets with a space in the middle and space after brackets for tasks not ticked and for the ticked task - `- [x] Task no.2` two square brackets with an x in between and a space after the brackets. Please note some processors of markdown do not support this feature.

```markdown
- [ ] Task no.1
- [x] Task no.2
- [ ] Task no.3
```

**Output**

![Task list example](https://cdn.hashnode.com/res/hashnode/image/upload/v1675012529605/cb703be3-8c43-4eee-80f4-09b34b164d3e.png)

### Horizontal line

To put a horizontal line you can use any one of the following with three or more symbols - `***` , `---` or `___` .

**Output**

---

### Block quote

The block quote looks like this

> Block quote

which can be achieved with `>` Right-Pointing Angle Bracket and a space in front of it. You can also create a nested block quote by creating another block quote.

> > Nested blockquote

#### Emoji

Using emojis is the easiest way to make a documentation/blog come alive. There is no special syntax for using emojis. Just copy-pasting emojis will work fine.😃

#### Fenced Code Block

The fencing code block is the easiest way to highlight the code without disturbing the syntax of your code. Now there are many different processors in which this is fancied and in hash nodes case, they prefer to show the block as following one that's down with a dark blue box.

```markdown
This is a fenced code block. 
```

And The syntax is following

` ``` `

`Code here`

` ``` `

We can also highlight the syntax by typing the language like this

` ```JavaScript `

`const num = 1`

` ``` `

**Output**

```javascript
const num = 1
```

### Tables

Last comes, tables.

The syntax goes as follows -

To add a table, use three or more hyphens (`---`) to create each column’s header, and use pipes (`|`) to separate each column. For compatibility, you should also add a pipe on either end of the row. The end looks like this

```markdown
| Fruits | Quantity(Kg) | Price (Rs/Kg) |
| -------- | ------ | ------- |
| Watermelon | 100 | 50 |
| Apple | 80 | 100 |
```

**Output**

| Fruits | Quantity(KG) | Price (Rs/Kg) |
| --- | --- | --- |
| Watermelon | 100 | 50 |
| Apple | 80 | 100 |

Thank you for reading.