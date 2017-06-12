let map = [
  [34, 21 , 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23]
];

function getNextLocation(cellValue) {
  let tmp = cellValue.toString();
  return { x: tmp[0], y: tmp[1] };
}

function getCellValue(location) {
  let value = map[location.x - 1][location.y - 1];
  return value;
}

function findTreasure(x, y) {
  let currentCellValue = getCellValue({ x, y });
  let lastValue = currentCellValue;

  console.log(`starting cell: (${x}, ${y}) = ${currentCellValue}`);

  if (currentCellValue === undefined) {
    return 'That location doesn\'t exist on the map.';
  }

  for (let i = 0; i < 100; i++) {
    let location = getNextLocation(currentCellValue);
    currentCellValue = getCellValue(location);

    if (lastValue === currentCellValue) {
      return `The treasure was found at cell: (${location.x}, ${location.y})`;
    }

    console.log(`cell: (${location.x}, ${location.y}) = ${getCellValue(location)}`);

    lastValue = currentCellValue;
  }

  return 'The pirates got lost while searching for the treasure.';
}

console.log(findTreasure(1, 1));
