import { MAPBOX_KEY } from './variables.js';
import http from './http-common.js';

let optimizeRoute = function(dataSteps, callBack) {
  let url = 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/';
  url = url + dataSteps + '?source=first&destination=last&roundtrip=true&access_token=' + MAPBOX_KEY;
  http.get(url)
      .then(response => {
        callBack(response.data);
      })
      .catch(e => {
        console.error(e);
      });
};

export default { optimizeRoute };
