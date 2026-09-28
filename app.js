const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Balance Check API
app.get('/api/balance', (req, res) => {
    res.json({ account_id: "ACC-100293", balance: "$25,430.00", status: "Active" });
});

// Transfer API
app.post('/api/transfer', (req, res) => {
    const { amount, recipient } = req.body;
    res.json({ message: `Successfully transferred $${amount} to ${recipient}`, tx_id: "TXN-" + Date.now() });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: "UP", timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Secure Banking API running on port ${PORT}`);
});
