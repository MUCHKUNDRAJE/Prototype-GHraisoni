import axios  from "axios";
import { useEffect, useState } from "react";

function GetApiCall(ApiURL) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(ApiURL)
      .then(response => {
        console.log("GET data", response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error("GET error", error);
      });
  }, [ApiURL]);

  return data;
}

const PostApiCall = (ApiURL, data) => {
    return axios.post(ApiURL, data)
      .then(response => {
        console.log("POST data", response.data);
        return response.data;
      })
      .catch(error => {
        console.error("POST error", error);
      });
  };
export  {GetApiCall , PostApiCall}