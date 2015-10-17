// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var match = [];
  var element = document.body;

  function searchList(element) {
    filterName(element);

    var children = element.childNodes;
    for(var child in children) {
      searchList(children[child]);
    }
  }

  function filterName(element) {
    var elementClasses = element.classList;
    if(elementClasses) {
      for(var name = 0; name < elementClasses.length; name++) {
        if(elementClasses[name] === className) {
          match.push(element);
        }
      }
    }
  }
  searchList(element);
  return match;
};
