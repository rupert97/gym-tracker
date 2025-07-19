import { useEffect, useState } from 'preact/hooks';
import exercises from '../data/exercises.json';

type ExerciseMap = {
    [key: string]: string[];
};

export default function ExerciseSelect() {
    const [selectedGroup, setSelectedGroup] = useState<string>('');
    const [exerciseList, setExerciseList] = useState<string[]>([]);

    useEffect(() => {
        const handleGroupSelected = (event: Event) => {
            const customEvent = event as CustomEvent;
            const group = customEvent.detail as string;
            setSelectedGroup(group);

            const groupExercises = (exercises as ExerciseMap)[group] || [];
            setExerciseList(groupExercises);
        };

        window.addEventListener('muscleGroupSelected', handleGroupSelected);
        return () => window.removeEventListener('muscleGroupSelected', handleGroupSelected);
    }, []);

    function handleSelectClick(e: Event) {
        if (!selectedGroup) {
            e.preventDefault();
            alert('Please select a muscle group first.');
        }
    }

    return (
        <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-700">Select exercise</label>
            <select
                class="w-full p-2 border border-gray-300 rounded-lg text-sm"
                onClick={handleSelectClick}
            >
                <option value="">Select exercise</option>
                {exerciseList.map((exercise) => (
                    <option value={exercise.toLowerCase().replace(/\s+/g, '-')}>{exercise}</option>
                ))}
            </select>

            {!selectedGroup && (
                <p class="mt-2 text-sm text-red-500">⚠️ Please select a muscle group.</p>
            )}

            {selectedGroup && (
                <p class="mt-2 text-sm text-gray-500">
                    Muscle group selected: <strong class="capitalize">{selectedGroup}</strong>
                </p>
            )}
        </div>
    );
}
