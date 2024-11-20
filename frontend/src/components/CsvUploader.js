import React, { useState } from "react";
import axios from "axios";

const CsvUploader = ({ setProducts }) => {
  const [file, setFile] = useState(null); // State for the uploaded file
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
    setSuccess("");
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setError("Please select a CSV file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      // POST request to upload the CSV file
      const response = await axios.post("http://localhost:8080/api/csv/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProducts(response.data); // Update products state in the parent component
      setError("");
      setSuccess("File uploaded successfully!");
    } catch (err) {
      setError("Failed to upload the file. Please try again.");
      setSuccess("");
      console.error(err);
    }
  };

  return (
    <div className="csv-uploader">
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default CsvUploader;
