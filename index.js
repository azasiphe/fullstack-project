import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true
}));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
  console.log('Connected to database');
});

app.post('/book', (req, res) => {
  const { workshop_id } = req.body;
  const query = 'INSERT INTO bookings (workshop_id) VALUES (?)';

  db.query(query, [workshop_id], (err, result) => {
    if (err) {
      console.error('Error booking workshop:', err); 
      res.status(500).send('Error booking workshop');
    } else {
      res.status(201).send({
        message: 'Workshop booked successfully',
        bookingId: result.insertId,
      });
    }
  });
});

app.get('/bookings', (req, res) => {
  const query = 'SELECT * FROM bookings';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching bookings:', err); 
      res.status(500).send('Error fetching bookings');
    } else {
      res.json(results);
    }
  });
});

app.delete('/book/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM bookings WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting booking:', err); 
      res.status(500).send('Error deleting booking');
    } else {
      res.send('Booking deleted successfully');
    }
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    db.end(err => {
      if (err) {
        console.error('Error closing database connection:', err);
      } else {
        console.log('Database connection closed');
      }
      process.exit(0);
    });
  });
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
