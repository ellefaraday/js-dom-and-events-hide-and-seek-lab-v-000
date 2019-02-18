function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll('.ranked-list');

  for(let i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  let currentNode = grandNode;
  while (currentNode.children.length != 0){
    currentNode = currentNode.children[0]
  }
  return currentNode;
}
