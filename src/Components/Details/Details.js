import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Details = ({ cards, setCards }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: '',
    price: '',
    location: '',
    expiry_date: '',
    image_url: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { ...formData, id: cards.length + 1 };
    setCards((prevCards) => ({
      ...prevCards,
      data: [...(prevCards?.data || []), newCard],
    }));
    navigate('/cards'); // Redirect to cards page
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
        <Typography component="h1" variant="h5" align="center">
          Add a New Card
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
                label="Image URL"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
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
