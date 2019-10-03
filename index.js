

let search = document.getElementById('search');
let searchShow = document.getElementById('search-show');

search.onclick = function() {
    searchShow.style.background = '#ffffff';  
}

let dropdown = document.getElementById('dropdown');

function toggle(dropdown) {
    dropdown.style.display = (dropdown.style.display == 'none') ? '' : 'none'
  }
  

$('.single-item').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

