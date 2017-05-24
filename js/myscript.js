// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
    modalTitle: 'Attention!',
    material: true
});

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

 /** App initialization**/

$(document).ready(function () {
    console.log("App is initialized");
});

myApp.onPageInit('courses', function (page) {
        // Do something here for "index" page
        console.log(page.name + ' initialized');
        myApp.openPanel('right');
    });