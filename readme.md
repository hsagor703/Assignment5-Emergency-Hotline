
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**Answer**:**getElementById** and **querySelector** both return a single element but**getElementsByClassName** and **querySelectorAll**
both are return a nodeLists.

2. How do you **create and insert a new element into the DOM**?
**Answer**: using **createElement** method, which use to dynamically create a HTML element and then insert the created element in **DOM**


3. What is **Event Bubbling** and how does it work?
**Answer**: when event occurs in a element it doesn't just stop at that element. the event continues climb child, parent, grandparent, document its called event bubbling

4. What is **Event Delegation** in JavaScript? Why is it useful?
**Answer**: when event occurs in a element it doesn't just stop at that element.Then check with event.target which child element was clicked. its called event delegation. **useful** so if many card and button in a element then a single evenListener use this parent element and its work properly and The smaller the code, the better the performance. After add new card its still working

5. What is the difference between **preventDefault() and stopPropagation()** methods?
**Answer**: **preventDefault()** is used to prevent the default action that belongs to the event, such as preventing a form from submitting. event. **stopPropagation()** is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.