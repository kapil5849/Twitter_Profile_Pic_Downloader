$("#form").submit((e)=>{
  e.preventDefault();
  let username = $("#username").val();
  let url =
    "https://twitter-profile-pic.jsoxford.com/" +
    username +
    "?size=original";
  forceDownload(url, "image.jpg");
  $("#username").val("");
});
function forceDownload(url, fileName){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function (){
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement("a");
    tag.href = imageUrl;
    tag.download = fileName;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
  xhr.send();
}
