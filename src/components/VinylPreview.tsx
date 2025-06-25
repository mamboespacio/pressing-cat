import React from "react";

interface VinylPreviewProps {
  color: string;
  label: string;
  grammage: number;
  inner: string;
  covers: string;
  inserts: string;
  shrinkwrapping: string;
}

export const VinylPreview: React.FC<VinylPreviewProps> = ({
  color,
  label,
  grammage,
  inner,
  covers,
  inserts,
  shrinkwrapping
}) => {
  const vinylStyles: Record<"black" | "standard_colors" | "special_colors" | "splatter", string> = {
    black: "#1a1a1a",
    standard_colors: "#cfcfcf",
    special_colors: "linear-gradient(45deg, #ff0080, #8000ff)",
    splatter: "radial-gradient(circle at center, #1a1a1a 50%, #ff0000 52%, transparent 55%)"
  };

  const innerColorMap: Record<"white" | "black" | "poly_white" | "poly_black", string> = {
    white: "#ffffff",
    black: "#000000",
    poly_white: "#e0e0e0",
    poly_black: "#333333"
  };

  const vinylColor = vinylStyles[color as keyof typeof vinylStyles] || "#1a1a1a";
  const innerColor = innerColorMap[inner as keyof typeof innerColorMap] || "transparent";

  return (
    <div className="flex justify-center items-center my-8">
      <div className="relative w-[280px] h-[280px]">
        {/* COVER */}
        {covers !== "" && (
          <div
            className="absolute w-full h-full rounded-lg border"
            style={{
              backgroundColor: "#f1f1f1",
              borderColor: "#ccc",
              zIndex: 0
            }}
          />
        )}

        {/* INSERT */}
        {inserts && (
          <div
            className="absolute w-[90%] h-[90%] top-[5%] left-[5%] rounded-md"
            style={{
              backgroundColor: "#eaeaea",
              border: "2px dashed #ccc",
              zIndex: 1
            }}
          />
        )}

        {/* INNER SLEEVE */}
        {inner && (
          <div
            className="absolute rounded-full"
            style={{
              width: "80%",
              height: "80%",
              top: "10%",
              left: "10%",
              backgroundColor: innerColor,
              zIndex: 2
            }}
          />
        )}

        {/* VINYL */}
        <div
          className="absolute rounded-full shadow"
          style={{
            width: grammage >= 180 ? "75%" : "65%",
            height: grammage >= 180 ? "75%" : "65%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: vinylColor,
            zIndex: 3
          }}
        >
          {/* Label */}
          {label === "yes" && (
            <div
              className="absolute rounded-full"
              style={{
                width: "20%",
                height: "20%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#f5f5f5"
              }}
            />
          )}
          {/* Center Hole */}
          <div
            className="absolute rounded-full border"
            style={{
              width: "6px",
              height: "6px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderColor: "#fff"
            }}
          />
        </div>

        {/* SHRINKWRAPPING effect */}
        {shrinkwrapping !== "none" && (
          <div
            className="absolute w-full h-full rounded-lg"
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(1px)",
              border: "2px solid rgba(255,255,255,0.3)",
              zIndex: 5
            }}
          />
        )}
      </div>
    </div>
  );
};
