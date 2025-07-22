# Gym Tracker
<img width="1817" height="761" alt="image" src="https://github.com/user-attachments/assets/d61cb069-97d8-4736-9cea-e7331fa22383" />

**Gym Tracker** is a web application that helps you track your workouts and nutrition. Built with [Astro](https://astro.build/), [Supabase](https://supabase.com/), and styled using [Tailwind CSS](https://tailwindcss.com/), it offers an intuitive and responsive experience for managing your fitness routine.

## ✨ Features

- **Workout Logging**: Select muscle groups and add exercises with sets, reps, and weights.
- **Warm-Up & Cardio Tracking**: Log your warm-up and cardio sessions with flexible, customizable options.
- **Nutrition Tracking**: Add daily meals and foods, tracking calories, protein, carbs, and fats.
- **Weekly & Monthly Shopping List**: Automatically generates shopping lists based on your meal plans, with an interactive checklist to track purchased and pending items.
- **Data Persistence**: All workouts and nutrition data are stored securely using Supabase.
- **Modern UI**: Clean, responsive, and mobile-first interface using Astro components and Tailwind CSS.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── components/      # Astro UI components (e.g. WarmupSection, CardioSection, MuscleGroupSelector)
│   ├── layouts/         # Layout components
│   ├── lib/             # Supabase integration and helpers
│   └── pages/           # Application pages (index, workout, nutrition)
│       └── index.astro
└── package.json
```

- Pages are defined in `src/pages/` using `.astro` or `.md` files and map directly to routes.
- UI components are located in `src/components/`.
- Static files (e.g., images, icons) belong in the `public/` directory.

## 🧞 Commands

Run these commands from the project root:

| Command                   | Description                                        |
|---------------------------|----------------------------------------------------|
| `pnpm install`            | Install project dependencies                       |
| `pnpm dev`                | Start the local development server at `localhost:4321` |
| `pnpm build`              | Build the site for production in the `./dist/` folder |
| `pnpm preview`            | Preview the production build locally               |
| `pnpm astro ...`          | Run Astro CLI commands like `astro add` or `astro check` |
| `pnpm astro -- --help`    | Display help information for the Astro CLI         |

## 🛠️ Tech Stack

- **Astro** – Static site generator and UI framework.
- **Supabase** – Backend as a service (database + authentication).
- **Tailwind CSS** – Utility-first CSS framework for styling.

## 📦 Environment Variables

Create a `.env` file based on the `.env.example` and add your Supabase credentials:

```
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 👀 Want to learn more?

- [Astro documentation](https://docs.astro.build)
- [Astro Discord server](https://astro.build/chat)
- [Supabase](https://supabase.com/docs)

---

Feel free to open an issue or submit a pull request if you have suggestions or improvements!
