/*jshint esversion: 6 */
/*jshint -W109 */
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/mm/api",
  headers: {
    "Content-type": "application/json",
  }
});
