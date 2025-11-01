import React from "react";

export default function AccessoriesSection({
  accessories,
  setAccessories,
  otherCostPerUnit,
  setOtherCostPerUnit,
}) {
  const addAccessory = () =>
    setAccessories((s) => [
      ...s,
      { id: Date.now(), name: "", qtyPerUnit: "", unitCost: "" },
    ]);

  const updateAccessory = (id, field, value) =>
    setAccessories((s) =>
      s.map((a) =>
        a.id === id ? { ...a, [field]: value } : a
      )
    );

  const removeAccessory = (id) =>
    setAccessories((s) => s.filter((a) => a.id !== id));

  return (
    <div className="bg-gray-200 p-6 rounded shadow">
      <h2 className="font-weight: 700 text-xl mb-4">Accessories</h2>

      {accessories.map((a) => (
        <div key={a.id} className="grid grid-cols-12 gap-2 items-center mb-2">
          {/* Accessory Name */}
          <input
            className="col-span-5 border rounded px-2 py-1"
            value={a.name ?? ""}
            onChange={(e) => updateAccessory(a.id, "name", e.target.value)}
            placeholder="Accessory name"
          />

          {/* Qty per unit (whole number only) */}
          <input
            type="number"
            min="0"
            step="1"
            className="col-span-2 border rounded px-2 py-1"
            value={a.qtyPerUnit ?? ""}
            onChange={(e) =>
              updateAccessory(a.id, "qtyPerUnit", e.target.value.replace(/\D/g, ""))
            }
            placeholder="Qty"
          />

          {/* Unit Cost */}
          <input
            type="number"
            min="0"
            className="col-span-2 border rounded px-2 py-1"
            value={a.unitCost ?? ""}
            onChange={(e) =>
              updateAccessory(a.id, "unitCost", e.target.value)
            }
            placeholder="Unit Cost"
          />

          {/* Remove Button */}
          <button
            className="col-span-3 bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => removeAccessory(a.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Add Accessory Button */}
      <button
        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
        onClick={addAccessory}
      >
        + Add accessory
      </button>

      {/* Other Cost */}
      <div className="mt-4">
        <label className="flex items-center gap-3">
          <span className="text-xs text-gray-600">Other Fee</span>
          <input
            type="number"
            min="0"
            className="border rounded px-2 py-1"
            value={otherCostPerUnit ?? ""}
            onChange={(e) => setOtherCostPerUnit(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
