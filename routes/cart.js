const express = require('express'); 
const router = express.Router();
const Cart = require('../models/cart');


router.get('/', async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.body;
    const cart = new Cart({
      name,
      description,
      price,
      category,
      quantity
    });
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item', error: error.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.body;
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      { name, description, price, category, quantity },
      { new: true, runValidators: true }
    );
    if (!cart) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error: error.message });
  }
});


router.patch('/:id', async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!cart) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item', error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = router;