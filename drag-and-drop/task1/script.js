const thumb = document.getElementsByClassName('thumb')[0];
const slider = document.getElementById('slider');
thumb.onmousedown = function(event) {
    // (1) prepare to moving: make absolute and on top by z-index
    thumb.style.position = 'absolute';
    thumb.style.zIndex = 1000;
  
    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    let shiftY = event.clientY - thumb.getBoundingClientRect().top;

    thumb.addEventListener('dragstart', function() {
        return false;
      });
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(thumb);
    
    // centers the thumb at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        thumb.style.left = pageX - shiftX + 'px';
        thumb.style.top = shiftY + 'px';
    }
  
    // move our absolutely positioned thumb under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the thumb on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the thumb, remove unneeded handlers
    thumb.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      thumb.onmouseup = null;
    };
  
  };