import React, { useCallback } from "react";
import "../css/FileUpload.css";
import { useDropzone } from "react-dropzone";
import { MDBIcon } from "mdb-react-ui-kit";
function FileUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*", // Limit file types (optional)
    multiple: true, // Allow multiple file uploads (optional)
  });
  return (
    <section className="file-upload">
      <div className="file-upload-container">
        <h1>Lesson Name</h1>
        <div className="dropzone-container">
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <div className="dropzone-text">
                <p>Upload a Picture</p>
                <MDBIcon icon="upload" style={{ fontSize: "2rem" }} fas />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FileUpload;
