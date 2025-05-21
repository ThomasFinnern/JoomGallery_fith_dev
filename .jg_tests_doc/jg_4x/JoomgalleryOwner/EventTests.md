
# 

## reference: 

[Nicholas K. Dionysopoulos: the book (plugins)](https://www.dionysopoulos.me/book/plg.html#plg-forms-j4-subscriberinterface)

* See section important:: Do not use ```if (version_compare(JVERSION, '4.999999.999999', 'lt') {```
* See ``` $table = $event->getArgument('subject')``` and below : All objects in PHP are passed by reference; any change we make to it will persist when we return from our method. That's why we can change its modified_by property without returning any value from our event handler and despite the event itself being immutable.



## Test: Assign deleted users image to existing 

## Test user create gallery



## Test: user image upload 




