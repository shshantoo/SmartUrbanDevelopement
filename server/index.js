import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
host: process.env.DB_HOST || "localhost",
/* The line `port: Number(process.env.DB_PORT || 3306)` in the code snippet is setting the port for the
MySQL database connection. Here's what it does: */
port: Number(process.env.DB_PORT || 3306),
user: process.env.DB_USER || "root",
password: process.env.DB_PASS || "",
database: process.env.DB_NAME || "smart_urban",
waitForConnections: true,
connectionLimit: 10,
});

app.get("/api/health", async (_req, res) => {
const [rows] = await pool.query("SELECT 1 AS ok");
res.json({ ok: true, db: rows[0] });
});

app.get("/api/services/:serviceKey/items", async (req, res) => {
const { serviceKey } = req.params;

const [rows] = await pool.query(
"SELECT id, name, status FROM service_items WHERE service_key=? ORDER BY id DESC",
[serviceKey]
);

res.json(rows);
});

app.post("/api/services/:serviceKey/items", async (req, res) => {
const { serviceKey } = req.params;
const { name, status } = req.body;

const safeName = (name ?? "New Item").toString();
const safeStatus = status === "Inactive" ? "Inactive" : "Active"; // ✅ validate

const [result] = await pool.query(
"INSERT INTO service_items (service_key, name, status) VALUES (?, ?, ?)",
[serviceKey, safeName, safeStatus]
);

res.status(201).json({ id: result.insertId });
});

app.listen(process.env.PORT || 5000, () => {
console.log(`API running on http://localhost:${process.env.PORT || 5000}`);
});
// DASHBOARD: read analytics bars
app.get("/api/dashboard/home-analytics", async (_req, res) => {
  const [rows] = await pool.query(
    "SELECT metric_key, metric_label, value_percent FROM dashboard_home_analytics ORDER BY id ASC"
  );
  res.json(rows);
});

// DASHBOARD: update a single metric (optional, for admin later)
app.put("/api/dashboard/home-analytics/:metricKey", async (req, res) => {
  const { metricKey } = req.params;
  const { value_percent } = req.body;

  const value = Number(value_percent);
  if (!Number.isFinite(value) || value < 0 || value > 100) {
    return res.status(400).json({ error: "value_percent must be 0..100" });
  }

  const [result] = await pool.query(
    "UPDATE dashboard_home_analytics SET value_percent=? WHERE metric_key=?",
    [Math.round(value), metricKey]
  );

  res.json({ updated: result.affectedRows });
});
