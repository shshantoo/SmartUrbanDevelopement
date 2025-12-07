import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASS,
database: process.env.DB_NAME,
waitForConnections: true,
connectionLimit: 10,
});

app.get("/api/health", async (_req, res) => {
const [rows] = await pool.query("SELECT 1 AS ok");
res.json({ ok: true, db: rows[0] });
});

app.get("/api/services/:serviceKey/items", async (req, res) => {
const { serviceKey } = req.params;
// demo table: service_items (service_key, name, status)
const [rows] = await pool.query(
"SELECT id, name, status FROM service_items WHERE service_key=? ORDER BY id DESC",
[serviceKey]
);
res.json(rows);
});

app.post("/api/services/:serviceKey/items", async (req, res) => {
const { serviceKey } = req.params;
const { name, status } = req.body;
const [result] = await pool.query(
"INSERT INTO service_items (service_key, name, status) VALUES (?, ?, ?)",
[serviceKey, name ?? "New Item", status ?? "Active"]
);
res.status(201).json({ id: result.insertId });
});

app.listen(process.env.PORT || 5000, () => {
console.log(`API running on http://localhost:${process.env.PORT || 5000}`);
});
