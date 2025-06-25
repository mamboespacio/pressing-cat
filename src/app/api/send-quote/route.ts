// app/api/send-quote/route.ts
import { form } from "motion/react-client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    email,
    totalCost,
    formState,
  } = body;

  const payload = {
  name: `Cotización vinilo – ${email}`,
  email_from: email,
  type: "lead",
  x_color: String(formState.color),
  x_grammage: String(formState.grammage),
  x_label: String(formState.label),
  x_cover_type: String(formState.covers),
  x_inner: String(formState.inner),
  x_inserts: String(formState.inserts),
  x_quantity: String(formState.quantity),
  x_shrinkwrapping: String(formState.shrinkwrapping),
  x_carton_box: String(formState.cartonBoxPackaging),
  x_total_estimate: parseFloat(totalCost.toFixed(2)),
  description: `
Color: ${formState.color}
Peso: ${formState.grammage}
Cantidad: ${formState.quantity}
Covers: ${formState.covers}
Shrinkwrap: ${formState.shrinkwrapping}
Inner: ${formState.inner}
Inserts: ${formState.inserts}
Costo estimado: € ${totalCost.toFixed(2)}
  `
}



  try {
    if (!process.env.ODOO_URL) {
      throw new Error("ODOO_URL environment variable is not defined");
    }
    const res = await fetch(process.env.ODOO_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        id: new Date().getTime(),
        params: {
          service: "object",
          method: "execute_kw",
           args: [
            process.env.ODOO_DB,
            Number(process.env.ODOO_USER_ID),
            process.env.ODOO_API_KEY,
            "crm.lead",
            "create",
            [payload]
          ]
        }
      })
    });

    
    const raw = await res.text();
console.log("Respuesta cruda de Odoo:", raw);
const result = JSON.parse(raw);


    if (result.error) {
      console.log("Odoo response:", result);
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, leadId: result.result });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
