# Singleton pattern

[Link to article](http://www.growingwiththeweb.com/2012/05/design-patterns-singleton.html)

![UML Diagram](http://www.growingwiththeweb.com/images/2012/05/12/singleton-uml.svg)

####Benefits

Makes it very easy to get a single instance of an object globally

####Drawbacks

They are effectively just globals,
Not object-oriented design
Can cause concurrency issues if the singleton is not thread-safe
Can make code hard to follow
Makes unit testing more difficult
From the looks of the benefits and drawbacks you would wonder why you would use a singleton at all, a lot of people even consider it an anti-pattern. My answer to that question is that you should only use this pattern very sparingly and preferably not at all in large projects. You can however save yourself quite a bit of time using them in small projects.

