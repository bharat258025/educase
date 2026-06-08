# Educase — React JS Intern/Fresher Assignment

## 🔗 Submission Links

| | Link |
|---|---|
| 🐙 **GitHub Repository** | `https://github.com/bharat258025/educase` |
| 🚀 **Live Hosted URL** | `https://educase-three-eta.vercel.app/` |

---

## 📌 About the Project

Educase is a mobile-first React application featuring a complete authentication flow — from account creation to a protected profile settings page. The UI is centered on desktop to replicate a mobile app experience, built pixel-perfect to the given Adobe XD design.

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
educase-app/
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
git clone https://github.com/bharat258025/educase

# 2. Enter the project directory
cd educase

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

- On **Signup**: user data `{ fullName, phone, email, password, company, isAgency }` is stored in `localStorage` as `educaseUser`
- On **Login**: credentials are matched against `educaseUser` in localStorage
- On **success**: `localStorage.setItem("isAuthenticated", "true")` is set
- **ProtectedRoute** checks for `isAuthenticated` before rendering `/account`; if absent, redirects to `/login`
- On **Logout**: `localStorage.removeItem("isAuthenticated")` is called and user is sent to `/`

---


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

## 👤 Author

**Bharat suthar**   
GitHub: [@bharat258025](https://github.com/bharat258025)
