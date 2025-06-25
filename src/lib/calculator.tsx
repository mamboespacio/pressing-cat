type CalculateAllParams = {
  quantity: number;
  color: string;
  grammage: number;
  label: string;
  inner: string;
  inserts: string;
  covers: string;
  shrinkwrapping: string;
};

const baseCosts = 452;
const testPressing = 50;

function calculateAll({
  quantity,
  color,
  grammage,
  label,
  inner,
  inserts,
  covers,
  shrinkwrapping,
}: CalculateAllParams): number {
  const calcBase = calculateBase(baseCosts, testPressing);
  const calcOverhead = calculateOverhead(quantity);
  const calcColors = calculateColors(color, grammage, quantity);
  const calcLabel = calculateLabel(label, quantity);
  const calcInner = calculateInner(inner, quantity);
  const calcInserts = calculateInserts(inserts, quantity);
  const calcCover = calculateCover(covers, quantity);
  const calcShrink = calculateShrink(shrinkwrapping, quantity);
  const calcCarton = calculateCarton(quantity);

  return calculateTotal(calcBase, calcOverhead, calcInner, calcLabel, calcColors, calcInserts, calcCover, calcShrink, calcCarton);
}

function calculateBase(baseCosts: number, testPressing: number): number {
  return baseCosts + testPressing;
}

function calculateOverhead(quantity: number): number {
  return quantity * 0.9553;
}

function calculateColors(color: string, grammage: number, quantity: number): number {
  const baseCost = grammage === 140 ? 160 : grammage === 180 ? 200 : 0;
  const multiplier = color === 'black' ? 2.175 :
    color === 'standard_colors' ? 2.690 :
      color === 'special_colors' ? 2.92 :
        color === 'splatter' ? 2.92 * 1.5 : 0;
  return (baseCost * quantity / 1000) * multiplier;
}

function calculateLabel(label: string, quantity: number): number {
  if (label === 'yes') {
    switch (quantity) {
      case 100: return 39.21;
      case 200: return 45.95;
      case 250: return 50.68;
      case 300: return 52.70;
      case 500: return 66.19;
      case 750: return 87.10;
      case 1000: return 99.91;
      default: return 0;
    }
  }
  return 0;
}

function calculateInner(inner: string, quantity: number): number {
  const unitPrices: Record<string, number> = {
    white: 0.121,
    black: 0.1426,
    poly_white: 0.1499,
    poly_black: 0.1711,
  };

  if (unitPrices[inner]) {
    return unitPrices[inner] * quantity;
  }

  const printedPrices: Record<string, number> = {
    printed_1c_100: 162.54,
    printed_2c_100: 172.31,
    printed_4c_200: 199.22,
  };

  if (printedPrices[inner]) {
    return printedPrices[inner];
  }

  return 0;
}

function calculateInserts(inserts: string, quantity: number): number {
  if (inserts === '150g') {
    switch (quantity) {
      case 100: return 76.26;
      case 200: return 82.98;
      case 250: return 89.48;
      case 300: return 102.48;
      case 500: return 128.48;
      case 750: return 183.30;
      case 1000: return 233.56;
      default: return 0;
    }
  } else if (inserts === '170g') {
    switch (quantity) {
      case 100: return 92.27;
      case 200: return 100.40;
      case 250: return 108.27;
      case 300: return 124;
      case 500: return 155.46;
      case 750: return 221.79;
      case 1000: return 282.61;
      default: return 0;
    }
  }
  return 0;
}

function calculateCover(covers: string, quantity: number): number {
  switch (covers) {
    case 'white_3mm': return 0;
    case 'color_3mm': return 0;
    case 'offset_4mm':
      switch (quantity) {
        case 100: return 198.73;
        case 200: return 212.98;
        case 250: return 277.80;
        case 300: return 227.24;
        case 500: return 271.14;
        case 750: return 343.05;
        case 1000: return 372.53;
        default: return 0;
      }
    case 'offset_5mm':
      switch (quantity) {
        case 100: return 213.37;
        case 200: return 246.26;
        case 250: return 264.39;
        case 300: return 271.15;
        case 500: return 344.32;
        case 750: return 452.82;
        case 1000: return 518.89;
        default: return 0;
      }
    case 'offset_7mm':
      switch (quantity) {
        case 100: return 309.53;
        case 200: return 360.56;
        case 250: return 396.84;
        case 300: return 411.58;
        case 500: return 507.99;
        case 750: return 656.57;
        case 1000: return 734.89;
        default: return 0;
      }
    default: return 0;
  }
}

function calculateShrink(shrinkwrapping: string, quantity: number): number {
  switch (shrinkwrapping) {
    case 'standard': return quantity * 0.25;
    case 'pe_sleeves': return quantity * 0.14;
    case 'self_closure_flap': return quantity * 0.11;
    default: return 0;
  }
}

function calculateCarton(quantity: number): number {
  return (1.4 * (quantity / 80)) + (0.65 * (quantity / 20));
}

function calculateTotal(
  calcBase: number,
  calcOverhead: number,
  calcInner: number,
  calcLabel: number,
  calcColors: number,
  calcInserts: number,
  calcCover: number,
  calcShrink: number,
  calcCarton: number
): number {
  return (calcBase + calcOverhead + calcInner + calcLabel + calcColors + calcInserts + calcCover + calcShrink + calcCarton) * 1.5;
}

export {
  calculateAll,
  calculateBase,
  calculateOverhead,
  calculateColors,
  calculateLabel,
  calculateInner,
  calculateInserts,
  calculateCover,
  calculateShrink,
  calculateCarton,
  calculateTotal,
};