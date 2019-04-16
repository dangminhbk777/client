/*jshint esversion: 6 */
/*jshint -W109 */
import axios from "axios";
import {URL_CALL_API, AUTHORIZATION} from "./variables";

export default axios.create({
  baseURL: URL_CALL_API,
  headers: {
    "Content-type": "application/json",
    "authorization": localStorage.getItem(AUTHORIZATION) != null ? localStorage.getItem(AUTHORIZATION) : ''
  }
});
