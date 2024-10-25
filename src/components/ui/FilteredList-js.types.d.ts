// Derived from src/components/ui/FilteredList.js

export interface TodoItemData {
    id: string;
    // Add other properties of TodoItemData as needed
}

export interface FilteredListProps {
    items: TodoItemData[];
    changeStatus: (id: string) => void;
}
