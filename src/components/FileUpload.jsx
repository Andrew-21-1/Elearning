import React, { useCallback, useState } from 'react';
import '../css/FileUpload.css';
import { useDropzone } from 'react-dropzone';
import { MDBIcon } from 'mdb-react-ui-kit';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import CryptoJS from 'crypto-js'; // Import the crypto-js library

function FileUpload({ handleFileUpload }) {
  const [file, setFile] = useState(null); // Ensure file is defined
  const [uploadResponse, setUploadResponse] = useState('');

  // Configure AWS SDK v3
  const s3Client = new S3Client({
    region: 'eu-north-1',
    credentials: {
      accessKeyId: 'AKIA4ZPZVLVMWTX3H76W',
      secretAccessKey: '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',
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    // Only accept the first file
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      uploadFileToS3(acceptedFiles[0]);
    }
  }, []);

  const uploadFileToS3 = async (file) => {
    console.log(file);
    const hashedFileName = CryptoJS.SHA256(file.name).toString();
    const command = new PutObjectCommand({
      Bucket: 'elearing',
      Key: `${hashedFileName}.pdf`,
      Body: file,
      ContentType: 'application/pdf',
    });

    try {
      await s3Client.send(command);
      const fileUrl = `https://elearing.s3.amazonaws.com/${hashedFileName}.pdf`;
      handleFileUpload(fileUrl);
      console.log(fileUrl);
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': [] }, // Accept only PDF files
    multiple: false, // Allow only one file upload
  });

  return (
    <section className="file-upload">
      <div className="file-upload-container">
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
    </section>
  );
}

export default FileUpload;
