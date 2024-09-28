import React, { useCallback, useState } from 'react';
import '../css/FileUpload.css';
import { useDropzone } from 'react-dropzone';
import { MDBIcon } from 'mdb-react-ui-kit';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import CryptoJS from 'crypto-js'; // Import the crypto-js library

function FileUpload({ file, setFile, handleFileUpload, activeButton, grade, course }) {
  const [uploadResponse, setUploadResponse] = useState('');

  // Configure AWS SDK v3
  const s3Client = new S3Client({
    region: import.meta.env.VITE_REGION,
    credentials: {
      accessKeyId: import.meta.env.VITE_ACCESS_KEY,
      secretAccessKey: import.meta.env.VITE_SECRET_KEY,
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    // Only accept the first file
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      uploadFileToS3(acceptedFiles[0]);
    }
  }, []);
  const getExtension = (str) => {
    return str.slice(str.lastIndexOf('.'));
  };

  const uploadFileToS3 = async (file) => {
    const hashedFileName = CryptoJS.SHA256(file.name).toString();
    const command = new PutObjectCommand({
      Bucket: import.meta.env.VITE_BUCKET,
      Key: `${course}/${grade}/${hashedFileName}${getExtension(file.name)}`,
      Body: file,
      ContentType: activeButton == 'lesson' ? 'application/pdf' : 'image/*',
    });

    try {
      await s3Client.send(command);
      const fileUrl = `https://${import.meta.env.VITE_BUCKET}.s3.amazonaws.com/${course}/${grade}/${hashedFileName}${getExtension(file.name)}`;
      handleFileUpload(fileUrl);
      // await saveUrlToDatabase(fileUrl);
    } catch (err) {
      setUploadResponse(`Error uploading file: ${err.message}`);
    }
  };

  const saveUrlToDatabase = async (url) => {
    try {
      const response = await fetch('http://localhost:3000/save-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error);
      }
    } catch (error) {
      setUploadResponse((prev) => `${prev} | Failed to save URL: ${error.message}`);
    }
  };

  const acceptTypes =
    activeButton === 'lesson'
      ? { 'application/pdf': [] } // Accept PDF files for lessons
      : { 'image/*': [] }; // Accept image files for courses

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptTypes,
    multiple: false, // Allow only one file upload
  });
  return (
    <section className="file-upload">
      <div className="file-upload-container">
        {activeButton == 'lesson' ? (
          <div>
            <h1>Upload a PDF</h1>
            <div className="dropzone-container">
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the PDF file here...</p>
                ) : file ? (
                  <div className="dropzone-text">
                    <div>
                      <p style={{ textAlign: 'center' }}>{file.name}</p> {/* Show the name of the uploaded file */}
                    </div>
                    <div>
                      <embed src={URL.createObjectURL(file)} type="application/pdf" width="100%" height="200px" style={{ marginTop: '10px' }} />
                    </div>
                  </div>
                ) : (
                  <div className="dropzone-text">
                    <div>
                      <p>Upload a PDF Document</p>
                    </div>
                    <div>
                      <MDBIcon icon="upload" style={{ fontSize: '2rem' }} fas />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Upload a Course Image</h1>
            <div className="dropzone-container">
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the Image file here...</p>
                ) : file ? (
                  <div className="dropzone-text">
                    <div>
                      <p style={{ textAlign: 'center' }}>{file.name}</p> {/* Show the name of the uploaded file */}
                    </div>
                    <div style={{ height: '-webkit-fill-available' }}>
                      <img src={URL.createObjectURL(file)} style={{ height: '15rem', marginTop: '10px' }} />
                    </div>
                  </div>
                ) : (
                  <div className="dropzone-text">
                    <div>
                      <p>Upload an Image</p>
                    </div>
                    <div>
                      <MDBIcon icon="upload" style={{ fontSize: '2rem' }} fas />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FileUpload;
