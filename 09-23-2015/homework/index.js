var $actions = $('.read_more');

$actions.on('click', function(event) {
 event.preventDefault();
 console.log('actions clicked');
 $('.hide').toggle()
})