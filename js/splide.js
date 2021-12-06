document.addEventListener('DOMContentLoaded', function() {

    var elms = document.getElementsByClassName( 'splide' );
    for ( var i = 0; i < elms.length; i++ ) {
        new Splide(elms[i], {
            perPage: 3,
            perMove: 1,
            pagination: false,
            gap: '30px',
            breakpoints: {
                1200: {
                    perPage: 2,
                },
                900: {
                    perPage: 1,
                }
            }
        }).mount();
    }

});