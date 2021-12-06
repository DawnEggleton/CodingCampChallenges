document.addEventListener('DOMContentLoaded', function() {

    var elms = document.getElementsByClassName( 'splide' );
    for ( var i = 0; i < elms.length; i++ ) {
        new Splide(elms[i], {
            perPage: 3,
            perMove: 1,
            pagination: false,
        }).mount();
    }

});