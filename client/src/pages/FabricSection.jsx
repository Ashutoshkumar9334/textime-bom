import React from "react";

export default function FabricSection({
  productName, setProductName,
  quantity, setQuantity,
  fabricWidth, setFabricWidth,
  fabricPricePerMeter, setFabricPricePerMeter,
  lengthPerUnit, setLengthPerUnit,
  wastagePercent, setWastagePercent
}) {
  
  return (
    <div className="bg-gray-200 p-6 rounded shadow">
      <h2 className="font-weight: 700 text-xl mb-4">Product & Fabric</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <label className="flex flex-col">
          <span className="text-gray-600">Product name</span>
          <input class="placeholder:text-gray-500 placeholder:text-xs placeholder:text-center" className="border rounded px-2 py-1" value={productName} placeholder="---Product Name---" onChange={e => setProductName(e.target.value)} />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-600">Quantity</span>
          <input class="placeholder:text-gray-500 placeholder:text-xs placeholder:text-center" type="number" min={1} className="border rounded px-2 py-1" value={quantity} placeholder="---Quantity---" onChange={e => setQuantity(Number(e.target.value))} />
        </label>

        <label className="flex flex-col">
          <span className=" text-gray-600">Fabric width (m)</span>
          <input class="placeholder:text-gray-500 placeholder:text-xs placeholder:text-center" type="number" min={30} className="border rounded px-2 py-1" value={fabricWidth} placeholder="---Width---" onChange={e => setFabricWidth(Number(e.target.value))} />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        <label className="flex flex-col">
          <span className=" text-gray-600">Fabric Length(m)</span>
          <input class="placeholder:text-gray-500 placeholder:text-xs placeholder:text-center" type="number" className="border rounded px-2 py-1" value={lengthPerUnit} placeholder="---Fabric Length---" onChange={e => setLengthPerUnit(Number(e.target.value))} />
        </label>

        <label className="flex flex-col">
          <span className=" text-gray-600">Wastage (%)</span>
          <input class="placeholder:text-gray-500 placeholder:text-xs placeholder:text-center" type="number" className="border rounded px-2 py-1" placeholder="---Wastage---" value={wastagePercent} onChange={e => setWastagePercent(Number(e.target.value))} />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-600">Fabric price (INR/m<sup>2</sup>)</span>
          <input class="placeholder:text-gray-500 placeholder:text-xs placeholder:text-center" type="number" className="border rounded px-2 py-1" placeholder="---Price---" value={fabricPricePerMeter} onChange={e => setFabricPricePerMeter(Number(e.target.value))} />
        </label>
      </div>
    </div>
  );
}
