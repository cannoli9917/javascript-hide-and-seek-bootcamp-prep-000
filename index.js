
function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}
function deepestChild() {
  var grandNode = document.querySelectorAll('#grand-node div');
  var next = ();
  while (grandNode) {
    if (Array.isArray(grandNode)) {
      for (var i = 0; i < grandNode.length; i++) {
        next.push(grandNode[i]);
      }
    }
  }
}



