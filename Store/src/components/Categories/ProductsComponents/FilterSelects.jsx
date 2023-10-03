import React from 'react'
import { Select, SelectItem } from '@nextui-org/react';

const filters = [
    { label: 'Most Purchased', value: "most-purchased" },
    { label: 'Limited Edition', value: 'limited-edition' },
    { label: 'Newest', value: 'newest' },
    { label: 'Seasonal', value: 'seasonal' },
];

export default function FilterSelects() {
    return (
        <Select
            items={filters}
            label="Sort by"
            className="max-w-sm font-bold"
        >
            {(filters) => <SelectItem key={filters.value}>{filters.label}</SelectItem>}
        </Select>
    );
}