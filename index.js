

let search = document.getElementById('search');
let searchShow = document.getElementById('search-show');

search.onclick = function() {
    searchShow.style.background = '#ffffff';  
}

$('.single-item').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

