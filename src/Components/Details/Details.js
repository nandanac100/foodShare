import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios for making HTTP requests
const Details = ({ cards, setCards, userId }) => {  // Accept userId as a prop or use context for the logged-in user
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: '',
    price: '',
    location: '',
    expiry_date: '',
    image_url: '',
    user: 1,  // Assuming userId is passed as a prop or available via context
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/');

    try {
      // Send form data as a POST request to the backend
      const response = await axios.post('http://127.0.0.1:8000/api/add_list/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // If the request is successful, update the cards state
      if (response.status === 201) {
        const newCard = { ...formData, id: cards.length + 1 }; // Optionally, you can add the new card ID if needed
        setCards((prevCards) => ({
          ...prevCards,
          data: [...(prevCards?.data || []), newCard], // Update the state with the new card data
        }));

        // Navigate to the 'cards' page
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
              <TextField
                required
                fullWidth
                id="image_url"
                label=" "
                type='file'
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
            </Grid>
            
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add 
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Details;
