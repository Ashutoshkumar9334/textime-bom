import React from "react";

export default function SummarySection({
  productName,
  quantity,
  fabricWidth,
  fabricMetersRequired = 0,
  fabricCost = 0,
  accessoriesCost = 0,
  otherCostTotal = 0,
  subtotal = 0,
  lowEstimate = 0,
  highEstimate = 0,
  perUnit = {},
}) {
  // Ensure all numeric props are numbers (prevents render issues)
  const num = (val) => (isFinite(val) ? Number(val) : 0);

  return (
    <aside className="bg-gray-200 p-6 rounded shadow">
      <h2 className="font-weight: 700 text-xl  text-center ">Summary</h2>
      <div className="space-y-3 text-sm ">
        <div className="flex justify-between">
          <span>Fabric required</span>
          <strong>{num(fabricMetersRequired).toFixed(3)} m<sup>2</sup></strong>
        </div>

        <div className="flex justify-between">
          <span>Fabric cost</span>
          <strong>₹ {num(fabricCost).toFixed(2)}</strong>
        </div>

        <div className="flex justify-between">
          <span>Accessories cost</span>
          <strong className={num(accessoriesCost) === 0 ? "text-gray-400" : ""}>
            ₹ {num(accessoriesCost).toFixed(2)}
          </strong>
        </div>

        <div className="flex justify-between">
          <span>Other cost</span>
          <strong>₹ {num(otherCostTotal).toFixed(2)}</strong>
        </div>

        <hr />

        <div className="flex justify-between text-lg">
          <span>Subtotal</span>
          <strong>₹ {num(subtotal).toFixed(2)}</strong>
        </div>

        <div className="text-xs text-gray-600">Estimate range (±5%)</div>

        <div className="flex justify-between">
          <span>Low</span>
          <strong>₹ {num(lowEstimate).toFixed(2)}</strong>
        </div>

        <div className="flex justify-between">
          <span>High</span>
          <strong>₹ {num(highEstimate).toFixed(2)}</strong>
        </div>

        <div className="mt-4 text-xs text-gray-700">
          <strong>Per unit cost:</strong>{" "}
          ₹ {num(perUnit?.totalPerUnit).toFixed(2)}
        </div>

        <div className="text-[11px] text-gray-500 mt-1">
          (Calculated based on total costs and entered accessories quantities)
        </div>
      </div>
    </aside>
  );
}
