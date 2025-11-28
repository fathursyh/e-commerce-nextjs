# **E-Commerce Next**

A solid and scalable **Next.js frontend** for an e-commerce platform.
This project consumes APIs from a **Laravel backend** and includes both **storefront pages** and future-ready **admin functionalities**.
The architecture focuses on clarity, modularity, and ease of understanding.

---

## 🚀 **Tech Stack**

* **Next.js** (App Router)
* **TanStack Query** with SSR
* **Zustand Persist** (Global client state)
* **Axios API Layer**
* **Clean folder structure with domain segmentation**

---

## ✨ **Features**

* ⚡ **Modular and intuitive folder structure**
* 🔥 **TanStack Query with SSR support**
* 📦 **Zustand store with persistence**
* 🌐 **Axios instance with abstraction helpers**
* 🧩 **Reusable components and providers**
* 🛒 **Cart store with global provider**
* 💡 Designed for maintainability and readability

---

## 📁 **Project Structure**

```
app/
 ├─ (public)/                # Public-facing routes using App Router
 │   ├─ products/            # Products listing & detail pages
 │   ├─ layout.tsx           # Layout for public pages
 │   ├─ navbar.tsx           # Shared public navbar
 │   └─ page.tsx             # Homepage
 │
 ├─ api/                     # API abstraction layer
 │   ├─ auth.api.ts          # Auth-related API endpoints
 │   ├─ helper.ts            # Small API helper utilities
 │   ├─ index.ts             # Central API export
 │   └─ product.api.ts       # Product-related API endpoints
 │
 ├─ hooks/                   # Reusable hooks (React + Query)
 │
 ├─ lib/
 │   └─ axios.ts             # Axios instance + interceptors
 │
 ├─ providers/
 │   └─ cart-store-provider.tsx  # Provides Zustand cart store to the app
 │
 ├─ shared/
 │   ├─ components/          # UI components shared across features
 │   └─ models/              # Shared TypeScript interfaces / DTOs
 │
 ├─ store/
 │   └─ cart-store.ts        # Zustand store (persist enabled)
 │
 └─ utils/
     ├─ error.ts             # Error handling helpers
     └─ helper.ts            # General utility helpers
```

---

## 🛠️ **Installation**

```bash
npm install
# or
yarn install
# or
pnpm install
```

Dependencies used:

```bash
npm install @tanstack/react-query zustand axios
npm install zustand/middleware
```

---

## ▶️ **Usage**

### Development Mode

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

## 🌐 **API Configuration**

Configure your Laravel backend API:

```
HOST_URL=https://your-backend.com/api
```

All requests go through:

```
lib/axios.ts
```

---

## 🧭 **Roadmap**

* [ ] Add admin routes & dashboard
* [ ] Add login & protected route middleware
* [ ] Cart checkout flow
* [ ] Product filters & search
* [ ] User order history
* [ ] Improve error handling UX
* [ ] Add unit + E2E tests
* [ ] CI/CD & GitHub Actions
* [ ] Add skeleton loaders and UI polish

---

## 📄 **License**

Licensed under **MIT**.

---