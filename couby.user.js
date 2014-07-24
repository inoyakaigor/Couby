var coubEmbedStart = '<iframe src="http://coub.com/embed/',
    coubEmbedEnd = '?muted=false&amp;autostart=false&originalSize=false&hideTopBar=false&noSiteButtons=false&startWithHD=true" allowfullscreen="true" frameborder="0" width="320" height="180"></iframe>';
coubLinks = document.getElementsByTagName("a");

for(var i = 0; i < coubLinks.length; i++){
  if(coubLinks[i].toString().match(/coub.com\/view/)){
    coubLinks[i].outerHTML = coubEmbedStart + parseCoubLink(coubLinks[i].toString()) + coubEmbedEnd;
  }
  

}

function parseCoubLink(link){
    return link.match(/[0-9a-z]+$/);
}

