

  <img src="<img width="1917" height="852" alt="web" src="https://github.com/user-attachments/assets/98af88c2-c292-4d10-8a3c-c7b1a82a153e" />


<h1 align="center">My Items — React CRUD App</h1>

<p align="center">
  A simple, client-side CRUD (Create, Read, Update, Delete) application built with React, TypeScript, and modern CSS — featuring a glassmorphism UI over a full-screen wallpaper background.
</p>

---

## ✨ Features

- **Create** — Add new items to a list via a text input
- **Read** — View all items rendered live from state
- **Update** — Edit an existing item's name in place
- **Delete** — Remove an item from the list
- No backend required — all data lives in React state (`useState`)
- Modern **glassmorphism** styling (blurred glass card, backdrop-filter)
- Full-page **wallpaper background** support
- Fully typed with **TypeScript**

---

## 🛠️ Tech Stack

- **React** (Hooks: `useState`)
- **TypeScript** (`.tsx`)
- **CSS3** (Flexbox, `backdrop-filter`, responsive full-viewport layout)

---

## 📂 Project Structure

```
src/
├── Crud.tsx        # Main CRUD component (logic + JSX)
├── App.css          # Glassmorphism + wallpaper styling
└── main.tsx / App.tsx
public/
└── wallpaper.jpg     # Background image (replace with your own)
```

---

## 🚀 How It Works

### State
```tsx
const [items, setItems] = useState<IItems[]>([]);
const [name, SetName] = useState<string>('');
const [id, Setid] = useState<number | null>(null);
```

### CRUD Operations

| Operation | Function      | Description                                  |
|-----------|---------------|-----------------------------------------------|
| Create    | `addItem`     | Pushes a new `{ id, name }` object into state |
| Read      | `.map()`      | Renders the `items` array as a list           |
| Update    | `updateItem`  | Finds item by `id` and replaces its `name`    |
| Delete    | `deleteItem`  | Filters out the item by `id`                  |

---

## 🖼️ Setting the Wallpaper

1. Place your image in the `public/` folder (e.g. `public/wallpaper.jpg`)
2. In `App.css`, update the background path on the `.app` class:

```css
.app {
  background-image: url('/wallpaper.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

---

## ▶️ Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

---

## 📌 Notes / Known Improvements

- Add form validation (prevent duplicate/empty names)
- Add persistence (e.g. `localStorage`) so items survive a page refresh
- Add confirmation before delete
- Extract CRUD logic into a reusable custom hook (`useCrud`) for larger apps

---

## 📄 License

Free to use and modify for personal or educational projects.
</file_text>
