## [Published blog link](https://jeetch.hashnode.dev/guide-on-css-grids "Click the link")
----
![Blog cover image](./Blog%20image.png)

The CSS Grid Layout Module helps design the layout more easily and consistently across browsers with a grid-based layout system. Grids come in handy in many situations like creating a price/ product card, creating the page layout, testimony section, avatar and many more places.

To start, we need to create a grid container that will serve as the parent element of all the children inside that will serve as grid items.

Then we need to change the CSS **display** property of the grid container. Now there are two types of displays for the grid which will not incur any changes to the flow of children/items inside the container.

1. inline-grid
    
2. grid
    

The **Grid** will make no changes to the natural flow of elements. Whereas display: **inline-grid** is used to make block-level grid container display inline.

```xml
<div class="gridContainer">
    <div class="grid1">1</div>
    <div class="grid2">2</div>
    <div class="grid3">3</div>
    <div class="grid1">4</div>
    <div class="grid5">5</div>
    <div class="grid6">6</div>
</div>
```

##### To define the area of each grid there are two properties that we can make use of.

1. `grid-template-rows` for row track.
    
2. `grid-template-columns` for column track.
    

#### Row track

To define the row track we have to make use of `Grid template rows` on the grid container as follows -

```css
.gridContainer{
    grid-template-rows: 100px 100px 100px;
}
```

The area gets applied to each of the grid items in all rows as the flow goes in the HTML. So if we don't provide any value for an item then the area fits the content inside that individual grid and the same applies to the grid template column. Different area units that can be used are `px`, `fr`, `%`, `em` and `rem`. The `fr` - fraction is a grid-specific unit only whose `1fr` is for 1 part of the available space.

**Output** -

![Row track](https://cdn.hashnode.com/res/hashnode/image/upload/v1675453341778/9383a18e-db47-40d2-bf9f-4c3444ba404d.png)

#### Column track

`Grid-template-columns` will define the column track. And this is how we make use of it.

```css
.gridContainer{
    grid-template-columns: 100px 100px;
}
```

**Output -**

![Column track](https://cdn.hashnode.com/res/hashnode/image/upload/v1675515295104/e97c928a-6701-4070-bc66-571452852aae.png)

#### Repeat()

same results can be achieved with `repeat()` like this -

```css
.gridContainer{
    grid-template-columns: repeat(2, 100px);
}
```

**Repeat comes in** handy when we want to define tracks with the same values like

which will give the same output as the above.

#### **Minimum and maximum (minmax())**

Minmax accepts two arguments: the first one is for minimum value and the second one is for maximum value. Minmax allows us to define the area of grids dynamically.

In this example, the first-row track is set to have a minimum height of `100px`, but its maximum size of `auto` will allow the column track to grow if the content is wider than `100px`.

```css
.gridcontainer{
    grid-template-columns: minmax(100px , auto);
}
```

**Output-**

![Min max](https://cdn.hashnode.com/res/hashnode/image/upload/v1675607897519/939ac37e-fead-404b-8eea-3bf718c83855.png)

#### Grid area

`grid-area` is shorthand for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`. And it looks like the following -

```css
.grid1{
    grid-area: 1/ 1/ 2/ 3;
}
```

Which gives the same output as we saw in the `grid-column: span 2;` example.

### Grid gap

Grid gap as it sounds like creates gaps between the grid except around the edge of the grid container.

We can explicitly target the gaps between columns and rows too. Like these

For creating gaps between rows -

`grid-row-gap-: 10px;` and to create gaps between columns you have to use `grid-column-gap: 10px;` . You can create gaps in both of them with `grid-gap: 10px 10px;` where the first argument is for rows and the second is for columns. By the way, if both the values of arguments are same then you can use this `grid-gap: 10px;`.

![Grid gap](https://cdn.hashnode.com/res/hashnode/image/upload/v1675456257086/e19e48f8-4978-4713-988e-3b8930928f27.png)

### Aligning grid tracks with (justify & align-items)

Grid tracks can be aligned relative to the grid container along the row and column axis. So let's assume you have a container with 6 boxes in it and you want to align those in the centre or other direction. You can achieve that with different CSS properties like -

`justify-content` with these values `centre`, `start`, `end` , `space-around` and `space-between` on the x-axis with the following effects -

![Justify-content](https://cdn.hashnode.com/res/hashnode/image/upload/v1675520764451/93d6f185-9eaa-4f91-a55c-757e4106400b.png)

Another property is `align-content` for changing the alignment on the y-axis with these values `centre`, `start`, `end` , `space-around` and `space-between` which gives the following effects -

![Align content](https://cdn.hashnode.com/res/hashnode/image/upload/v1675521298328/489e578e-2a30-4292-b86e-561aca636f01.png)

### Aligning Grid Items

### Aligning items inside the box

`justify-items` and `align-items` are applied to the grid container and support the following values:`auto`, `normal`, `start`, `end`, `centre`, `stretch`, `baseline`, `first baseline` and `last baseline` . The default value that both `justify-items` and `align-items` have is **stretch** with the following effects -

![Align items and justify items example](https://cdn.hashnode.com/res/hashnode/image/upload/v1675531583285/aeab3d68-2855-4d80-a383-a83f8ceea2bb.png)

Individual items can be self-aligned with the `align-self` and `justify-self` properties. These properties support the following values - `auto`, `normal`, `start`, `end`, `centre` `stretch`, `baseline`, `first baseline` and `last baseline` with the following effects -

### Spanning Items Across Rows and Columns

Spanning a grid over a column/row can be achieved with `span` keyword or changing the `grid-column` which is a shorthand whose first argument is for `grid-column-start` and the second is for `grid-column-end` and the same is for spanning over a row which only can be applied on the individual grid. Let's take an example for `grid-column` -

```css
.grid1{
    grid-column: 2 span;
}
```

**Output**\-

![Grid column](https://cdn.hashnode.com/res/hashnode/image/upload/v1675557457798/09a7d133-dc56-4914-93ae-d9efd6a6e0e7.png)

The same can be done with rows too.

```css
.grid1{
    grid-row: span 2;
}
```

**Output** -

![grid row](https://cdn.hashnode.com/res/hashnode/image/upload/v1675557835011/27a0fe8a-aa2c-40c5-8c97-262bda4c770d.png)

### Layering grid items

```css
.grid1{
    grid-column-start: 1;
    z-index: 2;
    grid-row-start: 1;
    grid-column-end: span 2;
    opacity: 0.5;
}
.grid2{
    grid-column-start: 2;
    grid-row-start: 1;
    background-color: #282121;
}
```

You can also create layers or stack grids on each other with z-index in proper places.

![overlapping grids](https://cdn.hashnode.com/res/hashnode/image/upload/v1675558595276/1a8381bd-250c-44d1-9702-d3f3ce9241bc.png)

### Grid-auto-flow

The default flow of the grid is `grid-auto-flow: row;` which looks like the following -

![grid auto flow row](https://cdn.hashnode.com/res/hashnode/image/upload/v1675559129335/b7f227c4-ac11-4171-bf54-b5a7d6d9f5e4.png)

`grid-auto-flow: column;` will look like this -

![grid-auto flow column](https://cdn.hashnode.com/res/hashnode/image/upload/v1675559326314/fb34484d-21b1-4db2-80ea-79a07a052761.png)

**P.S.** - This is by no means a fully comprehensive guide on CSS grid layout. There are many things that I have not covered in this article. I only covered the most used ones that will help you on day to day basis. Following are some links for further deep study on the CSS grid.