function processData(dataRow) {
  const yearlyAverages = {
    Year: Number(dataRow.Year) || 0.0,
    Annual: Number(dataRow["J-D"]) || 0.0,
    Seasonal: [
      Number(dataRow.DJF) || 0.0,
      Number(dataRow.MAM) || 0.0,
      Number(dataRow.JJA) || 0.0,
      Number(dataRow.SON) || 0.0
    ],
    Monthly: [
      Number(dataRow.Jan) || 0.0,
      Number(dataRow.Feb) || 0.0,
      Number(dataRow.Mar) || 0.0,
      Number(dataRow.Apr) || 0.0,
      Number(dataRow.May) || 0.0,
      Number(dataRow.Jun) || 0.0,
      Number(dataRow.Jul) || 0.0,
      Number(dataRow.Aug) || 0.0,
      Number(dataRow.Sep) || 0.0,
      Number(dataRow.Oct) || 0.0,
      Number(dataRow.Nov) || 0.0,
      Number(dataRow.Dec) || 0.0
    ]
  };

  return yearlyAverages;
}

export default processData;
