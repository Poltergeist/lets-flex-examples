var items = document.querySelectorAll('.item');
items = Array.prototype.slice.call(items);

function clickHandler(event){
  var target = event.target,
    active = document.querySelector('.active');
  if ( target.classList.contains('active') ){
    target.classList.remove('active');
    return;
  }
  //active && active.classList.remove('active');
  target.classList.add('active');
};


items.forEach(function(item){
  item.addEventListener('click', clickHandler)
});
