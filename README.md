# 🚀 NextGenAI - AI & Digital Solutions Platform 

👉 <a href="https://next-gen-ai-dun.vercel.app/" target="_blank">Vercel Live Demo</a> <br>
👉 <a href="https://nextgenaiproject.netlify.app/" target="_blank">Netlify Live Demo</a>  👉 <a href="https://nextgenainew.netlify.app/" target="_blank">Netlify Live 2.0</a> <br>
👉 <a href="https://9x20vp58-5173.asse.devtunnels.ms/" target="_blank">Development Live Demo</a> <br>

NextGenAI is a full-stack marketing website for AI and digital services businesses. It includes a public-facing React frontend, a secure Express backend, MongoDB data storage, and an admin dashboard for content management.

---

# 📌 What’s Included

- Public website pages: Home, About, Services, Blog, Contact, FAQ, Policies
- Blog CMS with listing and details pages
- Contact form with email and database storage
- Admin dashboard with secure JWT login
- Content management for blogs, services, FAQs, testimonials, portfolio, and team
- Cloudinary file uploads and email notifications
- Dark mode support and responsive UI

---

# 🧱 Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- Zustand

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- nodemailer
- multer

---

# 📂 Repository Structure

```
NextGenAI/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── cards/
│   │   │   ├── common/
│   │   │   ├── footer/
│   │   │   ├── forms/
│   │   │   ├── layout/
│   │   │   ├── loaders/
│   │   │   ├── navigation/
│   │   │   ├── sections/
│   │   │   └── ui/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── context/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── seo/
│   │   ├── services/
│   │   ├── store/
│   │   ├── styles/
│   │   └── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.html
│   ├── index.css
│   ├── main.jsx
│   ├── package.json
│   └── package-lock.json
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── emails/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── validators/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── .env.example
├── docs/
│   ├── API.md
│   ├── DATABASE.md
│   └── PROJECT_PLAN.md
├── .gitignore
├── LICENSE
└── README.md
```

---

# ⚙️ Prerequisites

- Node.js 18+ / 20+
- npm 10+
- MongoDB Atlas or local MongoDB instance
- Git

---

# 🚀 Setup

## 1. Clone repository

```bash
git clone https://github.com/yourusername/nextgenai.git
cd nextgenai
```

## 2. Install dependencies

```bash
cd server
npm install
cd ../client
npm install
```

## 3. Configure environment variables

### Server environment

Create `server/.env` using these variables:

```env
PORT=5000
MONGO_URI=mongodb+srv://manikhstu1_db_user:<password>@nextgenai.bpkckgo.mongodb.net/nextgenai?retryWrites=true&w=majority&authSource=admin
JWT_SECRET=nextgenai_a_long_random_secret_2026_change_this
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
```

### Optional fallback

If Atlas SRV DNS lookup fails, use a standard connection string or local MongoDB:

```env
MONGO_URI=mongodb://127.0.0.1:27017/nextgenai
MONGO_URI_FALLBACK=mongodb://127.0.0.1:27017/nextgenai
```

### Client environment

Create `client/.env` if needed:

```env
VITE_API_URL=http://localhost:5000/api
```

---

# ▶️ Run Locally

## Start backend

```bash
cd server
npm run dev
```

Backend URL: `http://localhost:5000`

## Start frontend

```bash
cd client
npm run dev
```

Frontend URL: `http://localhost:5173`

---

# 🔐 Admin Login

Default seeded admin account:
- Email: `admin@nextgenai.com`
- Password: `Admin@123`

Login page:

```text
http://localhost:5173/login
```

Admin dashboard:

```text
http://localhost:5173/admin/dashboard
```

---

# 🧪 Database Seeding

If your database is empty, seed initial data and the default admin user:

```bash
cd server
node src/database/seed.js
```

If seeding fails, verify `MONGO_URI` and that MongoDB is reachable.

---

# 🔧 Troubleshooting

## Backend health check

Verify the API is available:

```text
http://localhost:5000/api/health
```

## Fix login issues

1. Confirm backend is running.
2. Confirm the seed script created the admin user.
3. Confirm `server/.env` contains the correct `MONGO_URI`.
4. If using Atlas, allow your IP in Atlas Network Access.
5. Switch to a standard MongoDB URI if SRV lookups fail.

## Common environment issues

- `Invalid email or password` usually means the backend cannot read the admin user from the DB.
- `querySrv ECONNREFUSED` means Atlas SRV DNS is blocked or the URI is invalid.

---

# 📦 Scripts

## Frontend

```bash
cd client
npm run dev
npm run build
```

## Backend

```bash
cd server
npm run dev
```

---

# 🧩 Architecture Overview

## Frontend
- Component-driven React app
- Route-based pages and admin protection
- Global theme support
- Data requests via Axios services
- Reusable UI components and custom hooks

## Backend
- Express REST API
- MongoDB models with Mongoose
- Authentication using JWT
- Request validation and error handling middleware
- File upload support and Cloudinary integration
- Email notifications via Nodemailer

---

# 📌 Notes

- Keep `server/.env` private and out of source control.
- Use `server/.env.example` as a template.
- Update MongoDB credentials before deploying.
- Rerun the seed script if the default admin account is missing.

---

# 📫 Support

If you need help, start by checking these:
- backend status
- MongoDB connection
- seed script output
- `.env` values

Then retry login after confirming the database and server are both healthy.


## Navigate

```bash
cd nextgenai
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd ../server
npm install
```

---

# ▶️ Run Development Server

## Frontend

```bash
cd client
npm run dev
```

---

## Backend

```bash
cd server
npm run dev
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the server directory.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173

EMAIL_USER=your_email

EMAIL_PASS=your_password

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

# 🎨 Frontend Architecture

The frontend follows a component-based architecture.

- Reusable Components
- Layout System
- Dynamic Routing
- Custom Hooks
- Context API
- Data Layer
- API Layer
- Global Theme
- Responsive UI

---

# ⚙ Backend Architecture

The backend follows REST API architecture.

- MVC Pattern
- Controllers
- Services
- Middleware
- Models
- Validation Layer
- Authentication Layer
- Error Handling

---

# 🔒 Security Best Practices

- JWT Authentication
- Password Hashing
- Helmet Security Headers
- CORS Configuration
- Express Rate Limiter
- MongoDB Injection Prevention
- XSS Protection
- Input Validation

---

# ⚡ Performance Optimization

- Lazy Loading
- Code Splitting
- Image Optimization
- Compression
- CDN Ready
- Caching
- Minified Assets

---

# 📱 Responsive Design

Optimized for

- Mobile
- Tablet
- Laptop
- Desktop
- Large Displays

---

# 🌎 Browser Support

- Chrome
- Edge
- Firefox
- Safari
- Opera

---

# 📌 Future Improvements

- Multi-language Support
- Dark Mode
- Payment Gateway
- Live Chat
- Appointment Booking
- AI Chatbot
- Push Notifications
- Multi-Admin Support

---

# 👨‍💻 Development Guidelines

- Follow ESLint Rules
- Use Reusable Components
- Keep Components Small
- Write Clean Code
- Follow MVC Architecture
- Use Environment Variables
- Maintain Folder Structure

---

# 📄 License

This project is licensed under the MIT License.

---

# 👤 Author

**NextGenAI Development Team**

---

# 📬 Contact

Email: mainkhstu1@gmail.com

Website: https://manikhossain.in/
---

# ⭐ Support

If you find this project useful, please consider giving it a ⭐ on GitHub.

---

# 🙏 Acknowledgements

Thanks to the open-source community and the creators of React, Node.js, Express, MongoDB, Tailwind CSS, and all other libraries used in this project.
