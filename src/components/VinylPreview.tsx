// components/VinylPreview.tsx
import React from "react";

type VinylPreviewProps = {
  color: string;
  label: string;
};

const vinylColors: Record<string, string> = {
  black: "#111",
  standard_colors: "#5555aa",
  special_colors: "#c12b5e",
  splatter: "#d8b347", // podés usar un patrón más adelante si querés
};

const labelColors: Record<string, string> = {
  none: "#000",
  "1_colors": "#999",
  "2_colors": "#ccc",
  "3_colors": "#ddd",
  "4_colors": "#fff",
};

export default function VinylPreview({ color, label }: VinylPreviewProps) {
  const vinylFill = vinylColors[color] || "#111";
  const labelFill = labelColors[label] || "#000";

  return (
    <div className="flex justify-center">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill={vinylFill} />
        <circle cx="100" cy="100" r="25" fill={labelFill} />
        <circle cx="100" cy="100" r="5" fill="#000" />
      </svg>
    </div>
  );
}
