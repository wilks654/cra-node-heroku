export function linkTo(address, props) {
    props.history.push('/' + address)
}


/*

export function parseBBCFeed() {
  let x = new XMLHttpRequest();
  x.open("GET", "http://feeds.bbci.co.uk/news/rss.xml", true);

  console.log(xmlDoc)
  }

export function getLocation() {
      
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        console.log(pos.coords)
        toReturn = pos.coords
      }
      
      function error(err) {
        //provide London coords
        //lat 35 lon 139
        toReturn = {latitude : 35, longitude : 139}
      }

      //
      return navigator.geolocation.getCurrentPosition(success, error, options)
      
}
*/
