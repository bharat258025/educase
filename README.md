# PopX — React JS Intern/Fresher Assignment

> **Qualifier task** — Built in React JS as per the Adobe XD design specification.  
> Design Reference: [Adobe XD Link](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd)

---

## 🔗 Submission Links

| | Link |
|---|---|
| 🐙 **GitHub Repository** | `https://github.com/YOUR_USERNAME/popx-app` |
| 🚀 **Live Hosted URL** | `https://popx-app.vercel.app` |

> ⚠️ Replace the above with your actual GitHub repo URL and Vercel/Netlify deployment URL before submitting.

---

## 📌 About the Project

PopX is a mobile-first React application featuring a complete authentication flow — from account creation to a protected profile settings page. The UI is centered on desktop to replicate a mobile app experience, built pixel-perfect to the given Adobe XD design.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React JS** (v18) | UI library — functional components only |
| **Vite** | Fast dev server & build tool |
| **Tailwind CSS** | Utility-first styling |
| **React Router DOM** (v6) | Client-side routing & navigation |
| **localStorage** | Simulated auth & user data persistence |

---

## 📁 Project Structure

```
popx-app/
├── index.html                  ← HTML entry point
├── vite.config.js              ← Vite configuration
├── tailwind.config.js          ← Tailwind configuration
├── postcss.config.js           ← PostCSS for Tailwind
├── vercel.json                 ← Vercel SPA routing fix
├── netlify.toml                ← Netlify SPA routing fix
├── package.json
└── src/
    ├── main.jsx                ← Mounts React app to DOM
    ├── App.jsx                 ← All routes defined here
    ├── index.css               ← Tailwind base imports
    ├── components/
    │   ├── InputField.jsx      ← Reusable labeled input field
    │   ├── Button.jsx          ← Reusable primary/secondary button
    │   └── ProtectedRoute.jsx  ← Auth guard for /account page
    └── pages/
        ├── Welcome.jsx         ← Route: /
        ├── Signup.jsx          ← Route: /signup
        ├── Login.jsx           ← Route: /login
        └── Account.jsx         ← Route: /account (protected)
```

---

## ⚙️ Local Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/popx-app.git

# 2. Enter the project directory
cd popx-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in your browser
# → http://localhost:5173
```

---

## 🔁 App Flow

```
/ (Welcome)
  ├── "Create Account" ──→ /signup
  │     └── Submit form ──→ saves to localStorage ──→ /login
  │           └── Login with credentials ──→ /account (protected)
  │                 └── Logout ──→ / (Welcome)
  │
  └── "Already Registered? Login" ──→ /login
```

### Page Routes

| Route | Page | Access |
|---|---|---|
| `/` | Welcome | Public |
| `/signup` | Create Account | Public |
| `/login` | Sign In | Public |
| `/account` | Account Settings | 🔒 Protected |

---

## 🔒 Authentication Logic

- On **Signup**: user data `{ fullName, phone, email, password, company, isAgency }` is stored in `localStorage` as `popxUser`
- On **Login**: credentials are matched against `popxUser` in localStorage
- On **success**: `localStorage.setItem("isAuthenticated", "true")` is set
- **ProtectedRoute** checks for `isAuthenticated` before rendering `/account`; if absent, redirects to `/login`
- On **Logout**: `localStorage.removeItem("isAuthenticated")` is called and user is sent to `/`

---

## 🚀 Deployment Guide

### Option A — Deploy on Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Build the project
npm run build

# 3. Deploy
vercel

# Follow prompts → your app will be live at https://your-app.vercel.app
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) — it auto-deploys on every push.

---

### Option B — Deploy on Netlify

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Build the project
npm run build

# 3. Deploy
netlify deploy --prod --dir=dist
```

Or drag & drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop).

> **Note:** Both `vercel.json` and `netlify.toml` are included in this project to ensure React Router works correctly on refresh (SPA routing fix).

---

### Option C — Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "feat: complete PopX internship assignment"

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/popx-app.git

# Push
git push -u origin main
```

---

## ✅ Assignment Checklist

- [x] Coded in React JS (functional components)
- [x] Pixel-perfect mobile UI centered on webpage
- [x] Seamless navigation between all pages
- [x] Form validation with error messages
- [x] localStorage-based auth simulation
- [x] Protected route for Account Settings
- [x] Clean, well-formatted, commented code
- [x] Deployment config for Vercel & Netlify
- [ ] GitHub repository made public ← **do this before submitting**
- [ ] Live URL added to submission ← **add after deploying**

---

## 🧠 Key Concepts Used

| Concept | Where Used |
|---|---|
| `useState` | Form fields, error messages, user state |
| `useEffect` | Fetching user from localStorage on mount |
| `useNavigate` | Programmatic navigation after form submit |
| `React Router` | `BrowserRouter`, `Routes`, `Route`, `Navigate` |
| `localStorage` | Saving user data and auth status |
| `Props` | Passing data to reusable components |
| `Controlled inputs` | All form fields (value + onChange) |
| `Component composition` | `ProtectedRoute` wraps the Account page |

---

## 📸 Design Reference

Adobe XD: https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd

---

## 👤 Author

**Your Name**  
Intern Applicant — React JS Role  
GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
