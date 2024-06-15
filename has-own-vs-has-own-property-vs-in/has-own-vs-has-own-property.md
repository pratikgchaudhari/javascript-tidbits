ES2022 brought us a handy new method: `Object.hasOwn()`.

It's like `hasOwnProperty()`, telling you if a property exists directly on an object, skipping the prototype chain.

What's the catch?

`hasOwnProperty()` lives on the Object prototype, meaning every object inherits it. `hasOwn()`, on the other hand, is a static method. It doesn't get inherited—keeping things simpler and cleaner, especially with JavaScript's prototypal inheritance.

How does this change your life as a developer?

It probably doesn't—unless you're tinkering with an object's prototype.

But why would you do that?

You might not, but some third-party libraries do!

For instance, some libraries want their objects to be "pure," with no inherited properties or methods from JavaScript's Object class. They achieve this by creating objects with `Object.create(null)`, which sets the prototype to null.

So, what happens when you call `hasOwnProperty()` on such an object?

You get a TypeError because the method doesn't exist on the object.

Surprised? Don't be!

With a null prototype, the object lacks the usual methods and properties. So, `hasOwnProperty()` isn't an option.

This is where `hasOwn()` shines!

As a static method, `hasOwn()` isn't affected by prototype changes. It's always available and works as expected.

Need a demo? Check the code in the screenshot below.

P.S. Try removing the 'try-catch' block and see what happens!

![Object.prototype.hasOwnProperty vs Object.hasOwn, Image Credit: Pratik Chaudhari](./has-own-vs-has-own-property.png)