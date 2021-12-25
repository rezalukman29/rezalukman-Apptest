export function dynamicSort(property) {
    return function(a, b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
 }

 export function checkValidUrl(url) {
  var types = ['jpg','jpeg','tiff','png','gif','bmp'];
  var parts = url.split('.');
  var extension = parts[parts.length-1];
  if(types.indexOf(extension) !== -1) {
      return true;   
  }
  }
  
