// ✅ Utility functions for BOM Calculator

// Calculate total fabric meters (with wastage)
export const calculateFabricMeters = (
  lengthPerUnit,
  fabricWidth,
  quantity,
  wastagePercent
) => {
  const base = Number(lengthPerUnit || 0) * Number(fabricWidth || 0)*Number(quantity);
  const withWastage = base * ((100 + Number(wastagePercent || 0)) / 100);
  return Number.isFinite(withWastage) ? withWastage : 0;
};

// ✅ Calculate subtotal and per-unit costs
export const calculateSubtotal = ({
  fabricMetersRequired,
  fabricPricePerMeter,
  accessories,
  quantity,
  otherCostPerUnit,
  lengthPerUnit,
  wastagePercent,
}) => {
  // 🧵 Fabric cost
  const fabricCost =
    Number(fabricMetersRequired || 0) * Number(fabricPricePerMeter || 0);

  // 🧩 Accessories total (each = qtyPerUnit × quantity × unitCost)
  const accessoriesCost = (accessories || []).reduce((sum, a) => {
    const qtyPerUnit = parseFloat(a.qtyPerUnit) || 0;
    const unitCost = parseFloat(a.unitCost) || 0;
    return sum + qtyPerUnit * unitCost * quantity ;
  }, 0);

  // 💰 Other costs
  const otherCostTotal = Number(otherCostPerUnit || 0);
  

  // 📊 Subtotals
  const subtotal = fabricCost + accessoriesCost + otherCostTotal;
  const lowEstimate = subtotal * 0.95;
  const highEstimate = subtotal * 1.05;

  // 🔹 Per-unit breakdown
  const perUnitFabric =
    Number(lengthPerUnit || 0) * (1 + Number(wastagePercent || 0) / 100);
  const perUnitFabricCost = perUnitFabric * Number(fabricPricePerMeter || 0);

  const perUnitAccessories = (accessories || []).reduce((sum, a) => {
    const qtyPerUnit = parseFloat(a.qtyPerUnit) || 0;
    const unitCost = parseFloat(a.unitCost) || 0;
    return sum + qtyPerUnit * unitCost;
  }, 0);

  // const perUnitOther = Number(otherCostPerUnit || 0);
  const totalPerUnit = perUnitFabricCost + perUnitAccessories + Number(otherCostTotal/quantity);
  // console.log(quantity);
  
  

  return {
    fabricCost,
    accessoriesCost,
    otherCostTotal,
    subtotal,
    lowEstimate,
    highEstimate,
    perUnit: {
      totalPerUnit,
      perUnitFabric,
      perUnitFabricCost,
      perUnitAccessories,
      otherCostTotal,
    },
  };
};
