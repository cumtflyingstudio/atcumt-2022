// 动态隐藏导航栏js部分

var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");
var headerabtn = document.getElementById("header-abtn");
var headerul = document.getElementById("headerurls");

headerabtn.onclick = function () { showurls(); }
headerul.onclick = function () { showurls(); }

function showurls() {
  if (headerul.className == "headerurls")
    headerul.className += " header-show";
  else
    headerul.className = "headerurls";
}

window.addEventListener('scroll', function (e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    header.classList.remove("styles");
    header.classList.remove("slideDown");
    header.classList.add("slideUp");
    // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    header.classList.add("styles");
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }
  if (last_scroll_position < 80) {
    header.classList.remove("styles");
    header.classList.remove("slideDown");
  }
  headerul.className = "headerurls";
  new_scroll_position = last_scroll_position;
});


