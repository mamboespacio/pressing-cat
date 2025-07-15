"use client";

import { OffBit } from "@/fonts/Fonts";
import { calculateAll } from "@/lib/calculator";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import VinylPreview from "@/components/VinylPreview";

const steps = ["1: Vinyl", "2: Packaging", "3: Contact"];

export default function Calculator() {
  const methods = useForm({
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
      inserts: '',
      total: 0
    }
  });

  const { register, handleSubmit, formState: { errors }, setValue } = methods;
  const [step, setStep] = useState(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const watchedFields = useWatch({ control: methods.control });

  useEffect(() => {
    const {
      color = "",
      label = "",
      covers = "",
      shrinkwrapping = "",
      inner = "",
      inserts = "",
      quantity,
      grammage,
    } = watchedFields;

    const total = calculateAll({
      color,
      label,
      covers,
      shrinkwrapping,
      inner,
      inserts,
      quantity: parseInt(quantity as any) || 0,
      grammage: parseInt(grammage as any) || 0,
    });
    setTotalCost(total);
  }, [watchedFields]);


  const onSubmit = async (data: any) => {

    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        totalCost,
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

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  const watchedColor = useWatch({ control: methods.control, name: "color" });
  const watchedLabel = useWatch({ control: methods.control, name: "label" });
  return (
    <FormProvider {...methods}>
      <section className="px-4 py-[15vh] lg:px-8">
        <form className="grid grid-cols-12 gap-6" onSubmit={handleSubmit(onSubmit)}>
          <h1 className={`${OffBit.className} uppercase`}>{steps[step]}</h1>
          <div className="flex flex-col gap-4 col-span-7">
            {step === 0 && (
              <>
                <label className="flex flex-col gap-2">
                  <span>Cantidad</span>
                  <select {...register("quantity", { required: true })} className="p-2 text-xl border rounded-lg bg-transparent">
                    {[100, 200, 250, 300, 500, 750, 1000].map(q => <option key={q} value={q}>{q}</option>)}
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span>Color</span>
                  <select {...register("color")} className="p-2 text-xl border rounded-lg bg-transparent">
                    <option value="black">Black</option>
                    <option value="standard_colors">Standard Colors</option>
                    <option value="special_colors">Special Colors</option>
                    <option value="splatter">Splatter</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span>Grammage</span>
                  <select {...register("grammage")} className="p-2 text-xl border rounded-lg bg-transparent">
                    <option value="140">140gr</option>
                    <option value="180">180gr</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span>Label</span>
                  <select {...register("label")} className="p-2 text-xl border rounded-lg bg-transparent">
                    <option value="none">None</option>
                    <option value="1_colors">1 Color</option>
                    <option value="2_colors">2 Colors</option>
                    <option value="3_colors">3 Colors</option>
                    <option value="4_colors">4 Colors</option>
                  </select>
                </label>
              </>
            )}

            {step === 1 && (
              <>
                <label className="flex flex-col gap-2">
                  <span>Covers</span>
                  <select {...register("covers")} className="p-2 text-xl border rounded-lg bg-transparent">
                    <option value="white_3mm">Standard White, 3 mm</option>
                    <option value="color_3mm">Standard Color, 3 mm</option>
                    <option value="offset_4mm">Offset, 3/4mm Spine</option>
                    <option value="offset_5mm">Offset, 5mm Spine</option>
                    <option value="offset_7mm">Gatefold, 7mm</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span>Inner Sleeve</span>
                  <select {...register("inner")} className="p-2 text-xl border rounded-lg bg-transparent">
                    <option value="">None</option>
                    <option value="standard_white">Standard White</option>
                    <option value="standard_black">Standard Black</option>
                    <option value="polylined_white">Polylined White</option>
                    <option value="polylined_black">Polylined Black</option>
                    <option value="printed_1c">Printed 1 Color</option>
                    <option value="printed_2c">Printed 2 Colors</option>
                    <option value="printed_4c">Printed 4 Colors</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span>Inserts</span>
                  <select {...register("inserts")} className="p-2 text-xl border rounded-lg bg-transparent">
                    <option value="">None</option>
                    <option value="150g">150g</option>
                    <option value="170g">170g</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span>Shrinkwrapping</span>
                  <select {...register("shrinkwrapping")} className="p-2 text-xl border rounded-lg bg-transparent">
                    <option value="standard">Standard</option>
                    <option value="pe_sleeves">PE Sleeves</option>
                    <option value="self_closure_flap">Self Closure Flap</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span>Carton Box Packaging</span>
                  <select {...register("cartonBoxPackaging")} className="p-2 text-xl border rounded-lg bg-transparent">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </>
            )}

            {step === 2 && (
              <>
                <label className="flex flex-col gap-2">
                  <span>Email</span>
                  <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} className="p-2 text-xl border rounded-lg bg-transparent" />
                  {errors.email && <span className="text-red-500 text-sm">Email inválido</span>}
                </label>
              </>
            )}
            {/* Mostrar errores de validación */}
            {/* Botones de navegación */}
            <div className="flex justify-between gap-4 mt-4">
              <p className="text-xl">Total: <strong>{isNaN(totalCost) ? "0" : totalCost.toFixed(2)}</strong></p>
              <div className="flex gap-2">
                {step > 0 && (
                  <button type="button" onClick={prevStep} className="font-mono bg-white py-2 px-4 rounded-full text-primary-100 uppercase antialiased hover:bg-primary-50 hover:text-black transition-colors">Anterior</button>
                )}
                {step < steps.length - 1 ? (
                  <button type="button" onClick={nextStep} className="font-mono bg-white py-2 px-4 rounded-full text-primary-100 uppercase antialiased hover:bg-primary-50 hover:text-black transition-colors">Siguiente</button>
                ) : (
                  <button type="submit" className="font-mono bg-white py-2 px-4 rounded-full bg-green-500 text-white uppercase">Enviar Cotización</button>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-4 flex justify-center items-center">
            <VinylPreview color={watchedColor} label={watchedLabel} />
          </div>
        </form>
      </section>
    </FormProvider>
  );
}
