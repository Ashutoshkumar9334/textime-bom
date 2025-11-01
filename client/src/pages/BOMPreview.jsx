import React from "react";

export default function BOMPreview({
  accessories = [],
  quantity = 0,
  fabricMetersRequired = 0,
  productName = "Fabric",
  fabricPricePerMeter = 0,
  fabricCost = 0,
  otherCostPerUnit = 0,
  otherCostTotal = 0,
}) {
  const formatCurrency = (num) => `₹ ${Number(num || 0).toFixed(2)}`;
  // const formatNumber = (num) => Number(num || 0).toFixed(3);

  // 🧵 Fabric total remains same
  const totalFabricLength = Number(fabricMetersRequired);

  // 🧩 Calculate accessories total correctly
  const accessoryTotal = accessories.reduce((sum, a) => {
    
    const totalQty = Number(a.qtyPerUnit || 0) * Number(quantity||0);
    return sum + totalQty * Number(a.unitCost || 0);
  }, 0);
  
  const amountTotal = fabricCost + accessoryTotal + otherCostTotal;
  const grandTotal = (fabricCost*(1.18)) + (accessoryTotal*(1.05)) + otherCostTotal;
  const accessoriesGst = (accessoryTotal*(0.05));
  const fabricGst = (fabricCost*(0.18));
  

  return (
    <section className="mt-6 bg-gray-200 p-6 rounded shadow">
      <h2 className="font-semibold text-center">Generated BOM (Preview)</h2>
      <hr />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Item</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Unit Cost</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {/* 🧵 Fabric Row */}
            <tr className="border-b">
              <td>{productName}</td>
              <td>{totalFabricLength.toFixed(3)} m²</td>
              <td>{quantity}</td>
              <td>m</td>
              <td>{formatCurrency(fabricPricePerMeter)}</td>
              <td>{formatCurrency(fabricCost)}</td>
            </tr>

            {/* 🧩 Accessories Rows */}
            {accessories.map((a) => {
              const totalCost = Number(a.qtyPerUnit || 0) * Number(a.unitCost || 0)*Number(quantity);
              const totalQty = Number(a.qtyPerUnit || 0) * Number(quantity||0);
              
              return (
                <tr key={a.id} className="border-b">
                  <td>{a.name}</td>
                  <td></td>
                  <td>{totalQty}</td>
                  <td>pcs</td>
                  <td>{formatCurrency(a.unitCost)}</td>
                  <td>{formatCurrency(totalCost)}</td>
                </tr>
              );
            })}

            {/* 💰 Other Cost Row */}
            <tr className="border-b">
              <td>Other</td>
              <td>Misc per unit</td>
              <td>{quantity}</td>
              <td>pcs</td>
              <td>{formatCurrency(otherCostPerUnit)}</td>
              <td>{formatCurrency(otherCostTotal)}</td>
            </tr>
            <tr>
              <td col></td>
            </tr>
            {/* 🧾 Grand Total Row */}
            <tr className="border-b">
              <td colSpan="5" className="text-right pr-2">
                Amount
              </td>
              <td>{formatCurrency(amountTotal)}</td>
            </tr>
            <tr className="border-b">
              <td colSpan="5" className="text-right pr-2">Accessories GST 5% amount</td>
              <td>{formatCurrency(accessoriesGst)}</td>
            </tr>
            <tr className="border-b">
              <td colSpan="5" className="text-right pr-2">Fabric GST 18% amount</td>
              <td>{formatCurrency(fabricGst)}</td>
            </tr>
            <tr className="font-semibold bg-gray-100">
              <td colSpan="5" className="text-right pr-2">
                Total Amount
              </td>
              <td>{formatCurrency(grandTotal)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
