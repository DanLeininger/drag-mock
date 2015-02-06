# drag-mock
Trigger HTML5 drag &amp; drop events for testing

## Requirements

No 3rd party libraries required. All you need is a plain website and an ES5 compatible browser (e.g. IE9+, Chrome, Firefox, ...).


## Setup

### Browser

Just add the library script to your page

```html
<script src="http://andywer.github.io/drag-mock/drag-mock.min.js"></script>
```

You can then use it as a window global or as an AMD module

```javascript
// plain javascript
var dragSource = document.querySelector('.draggable');
var dropTarget = document.querySelector('.drop-zone');

dragMock.drag(dragSource).drop(dropTarget);


// AMD
require(['dragMock'], function(dragMock) {
  var dragSource = document.querySelector('.draggable');
  var dropTarget = document.querySelector('.drop-zone');

  dragMock.drag(dragSource).drop(dropTarget);
});
```


### Node / Webpack

Install using

```bash
npm install drag-mock --save-dev
```

and require it in your code

```javascript
var dragMock = require('drag-mock');
```


## Usage

```javascript
var dragSource = document.querySelector('.draggable');
var dropTarget = document.querySelector('.drop-target');

dragMock
  .dragStart(dragSource)
  .drop(dropTarget);
```

If you would like to set some properties on the event object you may pass an optional properties object as second
parameter:

```javascript
var dragSource = document.querySelector('.draggable');
var dropTarget = document.querySelector('.drop-target');

dragMock
  .dragStart(dragSource, { clientX: 300, clientY: 400 })
  .drop(dropTarget, { clientX: 200, clientY: 500 });
```

You can also customize the events by passing an optional callback function. The callback is called after creating the
event, but before dispatching it. If your callback takes less than two arguments then it will be called once for
the dragstart/drop event. It will be called for all events created if the callback takes two arguments:

```javascript
dragMock
  .dragStart(dragSource, function(event, eventName) {
    // will be called for all created events (mousedown, dragstart), because the callback takes two arguments
    dragStartEvent.dataTransfer.setData('application/json', { hello: 'world' });
  })
  .drop(dropTarget, function(dropEvent) {
    // a callback with less than two parameters will only be called once for the primary ('drop') event

    var data = dropEvent.dataTransfer.getData('application/json');
    console.log('Hello ' + data.hello);
  });
```

## Testing

Use it with the testing framework of your choice.

```javascript
describe('My fancy mail app', function() {

  it('moves mails properly', function(done) {
    var mail = document.querySelector('.mail[data-id=1234]');
    var folder = document.querySelector('.folder[data-id=5678]');

    dragMock.dragStart(mail).drop(folder);

    var mailsInFolder = MailFolderService.getFolder(5678).getMailCount();
    expect(mailsInFolder).to.equal(1);
  });

});
```


## Additional features

The following events are provided with a fake (but fully functional) dataTransfer object:
`drag`, `dragstart`, `dragend`, `drop`


## License

This software is licensed under the terms of the MIT license. See LICENSE for details.