$('a').on('click', smoothScrollJump);

function smoothScrollJump(event) {
    event.preventDefault();

    // GET THE LINK WE CLICKED ON
    var $currentTarget = $(event.currentTarget);

    // GOT THE NAME OF THE ID SPECIFIC TO THE TARGET
    var targetId = $currentTarget.attr('href');
    console.log($(targetId).offset());

    // MEASURE DISTANCE FROM ID TO TOP OF DOCUMENT
    var offsetTop = $(targetId).offset().top;

    // ANIMATE PAGE TO SCROLLTOP PROPERTY
    $('html, body').animate({
        scrollTop: offsetTop
    }, 1000);
}

// $(function() {
            
//     $( '#ri-grid' ).gridrotator({
//         rows: 8,
//         columns: 15,
//         step: 'random',
//         animType: 'random',
//         animSpeed: 500,
//         interval: 2000
//     });        
// });

    
$(function() {
            
    $( '#ri-grid' ).gridrotator( {
        rows : 3,
        columns : 4,
        maxStep : 5,
        interval : 2000,
        // w1024 : {
        //     rows : 5,
        //     columns : 6
        // },
        // w768 : {
        //     rows : 5,
        //     columns : 5
        // },
        // w480 : {
        //     rows : 6,
        //     columns : 4
        // },
        // w320 : {
        //     rows : 7,
        //     columns : 4
        // },
        // w240 : {
        //     rows : 7,
        //     columns : 3
        // },
    } );
            
});
