export interface NutritionItem {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

export interface FoodItem extends NutritionItem {
    name: string;
}

export interface Ingredient {
    name: string;
    quantity: string;
}

export interface MealData {
    items?: FoodItem[];
    ingredients?: Ingredient[];
    meal_total?: NutritionItem;
}

export interface DayData {
    breakfast: MealData;
    morning_snack: MealData;
    lunch: MealData;
    afternoon_snack: MealData;
    dinner: MealData;
    day_total: NutritionItem;
}

export interface NutritionPlan {
    monday?: DayData;
    tuesday?: DayData;
    wednesday?: DayData;
    thursday?: DayData;
    friday?: DayData;
    saturday?: DayData;
    sunday?: DayData;
}

export interface MealDefinition {
    id: 'breakfast' | 'morning_snack' | 'lunch' | 'afternoon_snack' | 'dinner';
    name: string;
    icon: string;
}
