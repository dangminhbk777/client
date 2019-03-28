/*jshint esversion: 6 */
/*jshint -W109 */
import axios from "axios";
import {AUTHORIZATION} from "./variables";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    "authorization": localStorage.getItem(AUTHORIZATION) != null ? localStorage.getItem(AUTHORIZATION) : ''
  }
});
