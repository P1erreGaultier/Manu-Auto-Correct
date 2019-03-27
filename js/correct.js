var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);

while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(/toi/gi, 'Tuan');
}

document.title = document.title.replace(/toi/gi, 'Tuan');
