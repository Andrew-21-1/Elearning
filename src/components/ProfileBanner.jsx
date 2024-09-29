import React, { useState } from 'react';
import '../css/ProfileBanner.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import profileImage from '../assets/images/profile.png'; // Placeholder image path
import { useAuth } from '../AuthContext';

function ProfileBanner() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: user.fullName,
    email: user.email,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profileImage: profileImage, // default profile image
  });

  const [selectedFile, setSelectedFile] = useState(null);
  // Toggle between edit and view mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle input changes
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  // Handle profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, profileImage: reader.result });
      };
      reader.readAsDataURL(file); // Display the selected image before upload
    }
  };

  // Simulate saving data (you can send the data to the backend here)
  const handleSave = () => {
    console.log('Saving data...', userData);
    // Here, send the data (including the profile picture file) to the backend
    // Example: you could use Axios or Fetch to send a FormData object with the image file
    if (selectedFile) {
      const formData = new FormData();
      formData.append('profileImage', selectedFile);
      formData.append('name', userData.name);
      formData.append('email', userData.email);
      formData.append('description', userData.description);

      // Example: Axios POST request
      // axios.post('/api/profile', formData)
      //   .then(response => console.log('Profile updated successfully', response))
      //   .catch(error => console.error('Error updating profile', error));
    }

    setIsEditing(false); // Exit edit mode
  };

  return (
    <section style={{ backgroundColor: '#d27e69' }}>
      {' '}
      <Container className="profile-edit-container">
        <Row>
          <h1>Welcome Back!</h1>
          <Col xs={12} md={4} className="profile-picture-column">
            {/* Profile Picture */}
            <img src={userData.profileImage} alt="Profile" className="profile-picture" />
            {isEditing && (
              <Form.Group controlId="formProfileImage" className="mt-3">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleProfileImageChange} />
              </Form.Group>
            )}
          </Col>

          <Col xs={12} md={8} className="user-details-column">
            <Form>
              {/* Name */}
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={userData.name} onChange={handleChange} readOnly={!isEditing} />
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={userData.email} onChange={handleChange} readOnly={!isEditing} />
              </Form.Group>

              {/* Description */}
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} name="description" value={userData.description} onChange={handleChange} readOnly={!isEditing} />
              </Form.Group>

              {/* Edit and Save Button */}
              <div className="button-group mt-3">
                {isEditing ? (
                  <>
                    <Button variant="success" onClick={handleSave} className="me-2">
                      Save
                    </Button>
                    <Button variant="secondary" onClick={handleEditToggle}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button style={{ backgroundColor: '#BF4628' }} onClick={handleEditToggle}>
                    Edit Profile
                  </Button>
                )}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProfileBanner;
