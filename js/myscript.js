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
    var Panel = document.getElementsByClassName('coursePanel')[0];
    
    $('.item-inner').click(function(){
        $('.item-title').removeClass('leftNav_selected')
        $(this).children('.item-title').addClass("leftNav_selected");
        openClose();
    });
    $('#first').trigger('click');    
});

myApp.onPageInit('researchers', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    loadSlick();
});

myApp.onPageInit('students', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
    loadSlick();
});

myApp.onPageInit('researchNew', function (page) {
    // Do something here for "index" page
    console.log(page.name + ' initialized');
});

function loadSlick () {
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3      });
}

function openPanel () {
    var Panel = document.getElementsByClassName('coursePanel')[0];
    document.getElementsByClassName('item-title')[0].onclick = function() {
      if(!Panel.classList.contains('on'))
      {
        Panel.classList.add('on');
      } 
}
}

function closePanel () {
    myApp.closePanel();
}

function openClose () {
    var Panel = document.getElementsByClassName('coursePanel')[0];
    if(!Panel.classList.contains('on')){
        Panel.classList.add('on');
      } else {
        Panel.classList.remove('on');
        setTimeout('document.getElementsByClassName("coursePanel")[0].classList.add("on")', 600);
      }
}

function toggleFilter () {
    var Filter = document.getElementsByClassName('pLeft')[0];
    if(!Filter.classList.contains('on')){
        Filter.classList.add('on');
      } else {
        Filter.classList.remove('on');
      }
}

$('.item-inner').click(function(){
    $('.item-title').removeClass('leftNav_selected')
    $(this).children('.item-title').addClass("leftNav_selected");
    openClose();
});

