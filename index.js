const removeHashChar = hexCode => {
  let hashRemovedHexCode = hexCode.substr(1);
  return hashRemovedHexCode;
};

const hexCodeParser = hashlessHexCode => {
  console.log(hashlessHexCode);
  let r, g, b, a;

  const isShort = hashlessHexCode.length === 3 || hashlessHexCode === 4;

  if (isShort === true) {
    r = `${hashlessHexCode.slice(0, 1)}${hashlessHexCode.slice(0, 1)}`;
    g = `${hashlessHexCode.slice(1, 2)}${hashlessHexCode.slice(1, 2)}`;
    b = `${hashlessHexCode.slice(2, 3)}${hashlessHexCode.slice(2, 3)}`;
    a = `${hashlessHexCode.slice(3, 4)}${hashlessHexCode.slice(3, 4)}`;
    console.log(hashlessHexCode.slice(3, 4));
  } else {
    r = hashlessHexCode.slice(0, 2);
    g = hashlessHexCode.slice(2, 4);
    b = hashlessHexCode.slice(4, 6);
    a = hashlessHexCode.slice(6, 8) || "ff";
  }

  return { r, g, b, a };
};

const hexPartsToDecimalNumbers = ({ r, g, b, a }) => ({
  r: parseInt(r, 16),
  g: parseInt(g, 16),
  b: parseInt(b, 16),
  a: +(parseInt(a, 16) / 255).toFixed(2)
});

const isNumeric = number => {
  if (!isNaN(parseFloat(number)) && isFinite(number)) {
    return true;
  } else {
    return false;
  }
};

const convertRGB = (decimalNumbers, alphaValue) => {
  const { r, g, b, a: alphaFromHexCode } = decimalNumbers;
  const a = isNumeric(alphaValue) ? alphaValue : alphaFromHexCode;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const hexToRgba = (hexCode, alpha) => {
  hashlessHex = removeHashChar(hexCode);

  const hexPartsObject = hexCodeParser(hashlessHex);
  const decimalNumbers = hexPartsToDecimalNumbers(hexPartsObject);

  return convertRGB(decimalNumbers, alpha);
};

module.exports = hexToRgba;
