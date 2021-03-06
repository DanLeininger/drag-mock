
var DragDropAction = require('./DragDropAction');


function call(instance, methodName, args) {
  return instance[methodName].apply(instance, args);
}


var dragMock = {
  mouseEnter: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'mouseEnter', arguments);
  },
  dragStart: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'dragStart', arguments);
  },
  drag: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'drag', arguments);
  },
  dragEnd: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'dragEnd', arguments);
  },
  dragEnter: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'dragEnter', arguments);
  },
  dragOver: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'dragOver', arguments);
  },
  dragLeave: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'dragLeave', arguments);
  },
  drop: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'drop', arguments);
  },
  delay: function(targetElement, eventProperties, configCallback) {
    return call(new DragDropAction(), 'delay', arguments);
  },

  // Just for unit testing:
  DataTransfer: require('./DataTransfer'),
  DragDropAction: require('./DragDropAction'),
  eventFactory: require('./eventFactory')
};

module.exports = dragMock;
