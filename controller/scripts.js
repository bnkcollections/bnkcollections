function navClick(id){
  var str = id + ".html";
  str = replaceUrl(str)
  window.location.href = str;
}

function replaceUrl(str){

  var url = window.location.href;
  url = url.substring(url.lastIndexOf("/") + 1,url.lastIndexOf(".html")+5)

  if (checkUrl(str) == checkUrl(url)){
    str = str;
  }
  else{
    str = "../" + str;
  }

  return str;
}

function checkUrl(url){
  var bool;
  if(url == "index.html" || url == "about.html"  || url == "contact.html" || url == "product.html" ){
    bool = "x";
  }
  return bool;
}


/*Product lists*/
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function donate(){
  window.location.href="http://bit.ly/3FUjQrL";
}
