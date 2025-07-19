import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Workout functions
export async function saveWorkout(workoutData) {
    const { data, error } = await supabase.from("workouts").insert([workoutData])

    if (error) throw error
    return data
}

export async function getWorkouts(userId) {
    const { data, error } = await supabase
        .from("workouts")
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: false })

    if (error) throw error
    return data
}

// Nutrition functions
export async function saveMealPlan(mealData) {
    const { data, error } = await supabase.from("meal_plans").insert([mealData])

    if (error) throw error
    return data
}

export async function getMealPlans(userId, date) {
    const { data, error } = await supabase.from("meal_plans").select("*").eq("user_id", userId).eq("date", date)

    if (error) throw error
    return data
}

// Shopping list functions
export async function saveShoppingList(listData) {
    const { data, error } = await supabase.from("shopping_lists").insert([listData])

    if (error) throw error
    return data
}
