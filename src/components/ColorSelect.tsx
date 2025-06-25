import React from 'react';

const COLORS = [
  { label: "Black", value: "black", hex: "#000000" },
  { label: "Standard Colors", value: "standard_colors", hex: "#7c3aed" },
  { label: "Special Colors", value: "special_colors", hex: "#e11d48" },
  { label: "Splatter", value: "splatter", hex: "linear-gradient(45deg, #000, #fff)" }, // puedes mejorar esto luego
];

export default function ColorSelect({ value, onChange }: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="uppercase text-xl">Color</label>
      <select
        className="p-2 text-3xl border rounded-lg bg-transparent"
        name="color"
        value={value}
        onChange={onChange}
      >
        {COLORS.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>
      <div className="mt-2 flex items-center gap-3">
        <div
          className="w-6 h-6 rounded-full border"
          style={{
            background: COLORS.find((c) => c.value === value)?.hex ?? "#ccc",
          }}
        />
        <span className="text-sm">
          {
            COLORS.find((c) => c.value === value)?.label ?? "Select color"
          }
        </span>
      </div>
    </div>
  );
}
