import axios from "axios";
const KEY = "AIzaSyAZ4CHLOFRY0JBFVL4oXcdS1Isw8ixP3us";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
