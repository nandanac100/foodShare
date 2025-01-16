import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios for making HTTP requests

const Details = ({ cards, setCards, userId }) => {
  const navigate = useNavigate();

  // Update formData to store the file as 'image'
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: '',
    price: '',
    location: '',
    expiry_date: '',
    image: null,  // Use 'image' to store the file
    user: 1,  // Assuming userId is passed as a prop or available via context
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });  // Store the selected file in state
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/');

    try {
      const formDataToSend = new FormData();  // Create a FormData object for file upload
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);  // Append all fields, including the image file
      }

      const response = await axios.post('http://127.0.0.1:8000/api/add_list/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',  // Important for file upload
        },
      });

      if (response.status === 201) {
        const newCard = { ...formData, id: cards.length + 1 };
        setCards((prevCards) => ({
          ...prevCards,
          data: [...(prevCards?.data || []), newCard],
        }));

        navigate('/cards');
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 3,
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h2" variant="h4" align="center">
          Add Food
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="quantity"
                label="Quantity"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="price"
                label="Price (₹)"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="expiry_date"
                label="Expiry Date"
                name="expiry_date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.expiry_date}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  Upload Image
                </Typography>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"  // Changed from 'image_url' to 'image' to align with the state
                  onChange={handleChange}
                  style={{ width: '100%' }}  // Make file input full-width
                />
              </Box>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add Card
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Details;
