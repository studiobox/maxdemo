jQuery(function($) {
    $('.collapsible-icon').on('click', function() {
        console.log('Collapsible Clicked!');
        $('.sidebar-menu').toggleClass('collapsed');
    });
});