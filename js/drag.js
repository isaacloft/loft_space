var handlerX = document.querySelector('.handler');
var wrapper = handlerX.closest('.main');
var boxA = wrapper.querySelector('.code_block');
var isHandlerDragging = false;

document.addEventListener('mousedown', function(e) {
  // If mousedown event is fired from .handler, toggle flag to true
  if (e.target === handlerX) {
    isHandlerDragging = true;
  }
});

document.addEventListener('mousemove', function(e) {
  // Don't do anything if dragging flag is false
  if (!isHandlerDragging) {
    return false;
  }

  // Get offset
  var containerOffsetLeft = wrapper.offsetLeft;

  // Get x-coordinate of pointer relative to container
  var pointerRelativeXpos = e.clientX - containerOffsetLeft;

  // Resize box A
  // * 8px is the left/right spacing between .handler and its inner pseudo-element
  // * Set flex-grow to 0 to prevent it from growing
  boxA.style.width = (pointerRelativeXpos - 8) + 'px';
  boxA.style.flexGrow = 0;
});

document.addEventListener('mouseup', function(e) {
  // Turn off dragging flag when user mouse is up
  isHandlerDragging = false;
});