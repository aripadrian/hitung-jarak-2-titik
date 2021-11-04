const distance= require('turf-distance');
var point1 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [0.3320397, 101.0024912]
    }
  };
  var point2 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [0.5137908, 101.3711347]
    }
  };
  var units = "kilometers";
  
  var points = {
    "type": "FeatureCollection",
    "features": [point1, point2]
  };
  
  //=points
  
  var d = distance(point1, point2, units);
  console.log(d)
  //=distance