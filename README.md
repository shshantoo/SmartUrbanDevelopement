# Smart Urban Development — Dashboard + MySQL (phpMyAdmin) Setup Guide

This project uses:
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MySQL (via XAMPP) managed with **phpMyAdmin**

> Important: React does **not** connect to MySQL directly.  
> React calls the **backend API**, and the backend reads/writes MySQL.

---

## 1) Prerequisites

Install:
- Node.js (LTS)
- Git
- XAMPP (Apache + MySQL + phpMyAdmin)

---

## 2) Clone the repository

```bash
git clone <YOUR_REPO_URL>
cd <YOUR_PROJECT_FOLDER>


---

# 2) What to Modify — File-by-File (Most Important Section)

## FRONTEND (React)

### ✅ `src/pages/Dashboard.tsx`
**Purpose:** Main dashboard layout + sidebar routing (switches pages/components)

Modify when you want to:
- Add new page keys (ex: `water`, `publicTransport`)
- Change which component shows for each menu item
- Change menu labels (sidebar text)

---

### ✅ `src/components/Sidebar.tsx`
**Purpose:** Sidebar UI (menu sections, icons, active highlight)

Modify when you want to:
- Add/remove sidebar menu items
- Change icons
- Change sidebar behavior (disabled items, layout)

---

### ✅ `src/components/TopBar.tsx`
**Purpose:** Top bar UI (title, admin profile, notifications badge)

Modify when you want to:
- Change header title/subtitle
- Change user info UI
- Add search/filter inputs at top

---

### ✅ `src/components/DashboardHome.tsx`
**Purpose:** Dashboard page content only (charts/cards on dashboard)

Modify when you want to:
- Add more dashboard cards
- Replace demo chart with real chart data later
- Add KPIs (Total reports, Active alerts, etc.)

---

### ✅ `src/components/ServiceTable.tsx`
**Purpose:** Service pages (Traffic/Parking/etc.) table + button actions

Modify when you want to:
- Change **what happens on Add/Edit/Delete**
- Add real forms (modal, inputs)
- Change table columns
- Display database rows

> **Button actions are coded here** (onClick handlers), but they call the backend.

---

### ✅ `src/lib/api.ts`
**Purpose:** Central place for frontend API calls (`fetch`)

Modify when you want to:
- Add new backend endpoints (e.g., `/api/traffic/reports`)
- Rename endpoints
- Add auth headers later
- Keep API code out of components (clean structure)

---

### ✅ `src/styles/dashboard.css`
**Purpose:** All CSS (combined in one file)

Modify when you want to:
- Change theme colors
- Change spacing, card design, responsiveness
- Add new page styling (keep future page styles here too)

---

### ✅ `vite.config.ts`
**Purpose:** Proxy frontend `/api` calls to backend during development

Modify when you want to:
- Change backend port (if backend runs on a different port)
- Ensure `/api` calls work without CORS issues

Example:
```ts
server: {
  proxy: { "/api": "http://localhost:5000" }
}
