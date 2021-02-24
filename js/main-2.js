var columnHeading = document.querySelectorAll('#heading');

var search = document.querySelector('#myinput');


search.onkeyup = () => {

  var searchValue = search.value.toUpperCase();
  console.log(searchValue);
  
  columnHeading.forEach((item) => {

    var columnHeadingValue = item.innerText.toUpperCase();
    // console.log(columnHeadingValue);
    
    if (columnHeadingValue.includes(searchValue)){
        item.parentElement.style.display = '';
    }else{
      item.parentElement.style.display = 'none';
    }
  }); 
}
