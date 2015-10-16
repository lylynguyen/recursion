// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var match = [];

  searchList(document.body);

  function searchList(element) {
    filterName(element);

    var children = element.childNodes;
    for(var child in children) {
      searchList(children[child]);
    }
  };

  function filterName(element) {
    var elementClass = element.classList;
    if(elementClass) {
      for(var name = 0; name < elementClass.length; name++) {
        if(elementClass[name] === className) {
          match.push(element);
        }
      }
    }
  }
  return match;
};
