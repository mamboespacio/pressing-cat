// Calculator.tsx
"use client"

import { OffBit } from "@/fonts/Fonts";
import { calculateAll } from "@/lib/calculator";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Calculator() {
  const [totalCost, setTotalCost] = useState<number>(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      color: 'black',
      grammage: 140,
      label: 'none',
      covers: 'white_3mm',
      shrinkwrapping: 'standard',
      cartonBoxPackaging: 'yes',
      quantity: 100,
      inner: '',
      inserts: ''
    }
  });

  const formValues = watch();

  useEffect(() => {
    const total = calculateAll({
      ...formValues,
      quantity: parseInt(formValues.quantity as any) || 0,
      grammage: parseInt(formValues.grammage as any) || 0
    });
    setTotalCost(total);
  }, [formValues]);

  const onSubmit = async (data: any) => {
    const total = calculateAll(data);

    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: data.email,
        totalCost: total,
        formState: data
      })
    });

    const result = await res.json();

    if (result.success) {
      alert("¡Cotización enviada correctamente a Odoo como lead!");
    } else {
      console.error(result.error);
      alert("Error al enviar el lead a Odoo.");
    }
  };

  return (
    <section className="px-4 py-[25vh] lg:px-8 lg:py-[25vh]">
      <form className="grid lg:grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 w-full">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Record Size</h2>
          <select className="p-2 text-3xl border rounded-lg bg-transparent" disabled>
            <option value="12">12"</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Amount of items</h2>
          <select {...register("quantity", { required: true })} className="p-2 text-3xl border rounded-lg bg-transparent">
            {[100, 200, 250, 300, 500, 750, 1000].map(q => <option key={q} value={q}>{q}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Color</h2>
          <select {...register("color", { required: true })} className="p-2 text-3xl border rounded-lg bg-transparent">
            <option value="black">Black</option>
            <option value="standard_colors">Standard Colors</option>
            <option value="special_colors">Special Colors</option>
            <option value="splatter">Splatter</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Grammage</h2>
          <select {...register("grammage", { required: true })} className="p-2 text-3xl border rounded-lg bg-transparent">
            <option value="140">140gr</option>
            <option value="180">180gr</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Label</h2>
          <select {...register("label", { required: true })} className="p-2 text-3xl border rounded-lg bg-transparent">
            <option value="none">None</option>
            <option value="1_colors">1 Color</option>
            <option value="2_colors">2 Colors</option>
            <option value="3_colors">3 Colors</option>
            <option value="4_colors">4 Colors</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Covers</h2>
          <select {...register("covers", { required: true })} className="p-2 text-3xl border rounded-lg bg-transparent">
            <option value="white_3mm">Standard White, 3 mm</option>
            <option value="color_3mm">Standard Color, 3 mm</option>
            <option value="offset_4mm">Offset, 3/4mm Spine</option>
            <option value="offset_5mm">Offset, 5mm Spine</option>
            <option value="offset_7mm">Gatefold, 7mm</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Inner Sleeve</h2>
          <select {...register("inner")} className="p-2 text-3xl border rounded-lg bg-transparent">
            <option value="none">None</option>
            <option value="standard_white">Standard White</option>
            <option value="standard_black">Standard Black</option>
            <option value="polylined_white">Polylined White</option>
            <option value="polylined_black">Polylined Black</option>
            <option value="printed_1c">Printed 1 Color</option>
            <option value="printed_2c">Printed 2 Colors</option>
            <option value="printed_4c">Printed 4 Colors</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Inserts</h2>
          <select {...register("inserts")} className="p-2 text-3xl border rounded-lg bg-transparent">
            <option value="">None</option>
            <option value="150g">150g</option>
            <option value="170g">170g</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Shrinkwrapping</h2>
          <select {...register("shrinkwrapping", { required: true })} className="p-2 text-3xl border rounded-lg bg-transparent">
            <option value="standard">Standard</option>
            <option value="pe_sleeves">PE Sleeves</option>
            <option value="self_closure_flap">Self Closure Flap</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Carton Box Packaging</h2>
          <select {...register("cartonBoxPackaging", { required: true })} className="p-2 text-3xl border rounded-lg bg-transparent">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Email</h2>
          <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} className="p-2 text-3xl border rounded-lg bg-transparent" />
          {errors.email && <span className="text-red-500 text-sm">Email inválido</span>}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className={`${OffBit.className} uppercase text-xl`}>Total Cost</h2>
          <div className="flex justify-between">
            <p className="p-2 text-3xl border rounded-lg bg-transparent">
              {isNaN(totalCost) ? "0" : totalCost.toFixed(2)}
            </p>
            <button className="bg-white text-primary-100 p-2 rounded-lg" type="submit">
              Send Quote
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
