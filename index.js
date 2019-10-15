

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

$('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1
  });


 document.getElementById('uk').addEventListener('click', openMenu);
 document.getElementById('countries').addEventListener('click', openMenuCountries);

  function openMenu() {
      document.getElementById('dropdown').classList.toggle('active');
  };

  function openMenuCountries() {
      document.getElementById('dropdown-countries').classList.toggle('active');
  }
  
 