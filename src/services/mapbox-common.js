import { MAPBOX_KEY } from './variables.js';
import http from './http-common.js';

let optimizeRoute = function() {
  let data = '105.781683,21.036455;105.786279,21.035756;105.783500,21.034364;105.791890,21.039231;105.792372,21.035568;105.790324,21.037529';
  let url = 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/';
  url = url + data + '?source=first&destination=last&roundtrip=true&access_token=' + MAPBOX_KEY;
  http.get(url)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.error(e);
      });
};

export default { optimizeRoute };
