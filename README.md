# Gym Tracker

Gym Tracker is a web application that helps you track your workouts and nutrition, built with [Astro](https://astro.build/) and [Supabase](https://supabase.com/). It provides an intuitive interface for logging your exercises, warm-ups, cardio, and daily meal plans.

## ✨ Features

- **Workout Logging**: Select muscle groups, add exercises, sets, reps, and weights for each workout.
- **Warm-Up & Cardio Sections**: Easily log your warm-up and cardio routines with customizable options.
- **Nutrition Tracking**: Add meals and foods to your daily plan, and monitor calories, proteins, carbs, and fats.
- **Data Persistence**: All workouts and nutrition data are saved using Supabase.
- **Modern UI**: Clean and responsive design using Astro components and Tailwind CSS.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── components/      # Astro UI components (e.g., WarmupSection, CardioSection, MuscleGroupSelector)
│   ├── layouts/         # Layout components
│   ├── lib/             # Supabase integration and helpers
│   └── pages/           # Application pages (index, workout, nutrition)
│       └── index.astro
└── package.json
```

- Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
- Components for the interface are in `src/components/`.
- Static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |

## 🛠️ Tech Stack

- [Astro](https://astro.build/) for static site generation and UI framework.
- [Supabase](https://supabase.com/) for authentication and database.
- [Tailwind CSS](https://tailwindcss.com/) for styling.

## 📦 Environment Variables

You will need to set the following environment variables (see `.env.example`):

```
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 👀 Want to learn more?

- Check out [Astro documentation](https://docs.astro.build)
- Join the [Astro Discord server](https://astro.build/chat)
- Learn more about [Supabase](https://supabase.com/docs)

---

Feel free to open an issue or submit a pull request if you have suggestions or improvements!
