import axios from "axios";
import { useState } from "react";

const useRequest = ({ body, method, url, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger" style={{ marginTop: "10px" }}>
          <h4>Ooops....</h4>
          <ul className="my-0">
            {err.response.data.errors.map((error) => (
              <li key={error.message}>{error.message}</li>
            ))}
          </ul>
        </div>
      );
      throw err;
    }
  };

  return { errors, doRequest };
};

export default useRequest;
