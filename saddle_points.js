const map = [
  [34, 15, 32, 41, 43],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 16, 51, 12, 35],
  [21, 52, 33, 13, 23]
];

function getColumnValues(column) {
  let columnValues = [];

  for (let index = 0; index < map.length; index++) {
    let value = map[index][column - 1];
    columnValues.push(value);
  }

  return columnValues;
}

function getRowValues(row) {
  return map[row - 1];
}

function findRowSaddlePoints(row, column) {
  let saddlePoints = [];
  let startingValue = map[row - 1][column - 1];
  let greatestValue = startingValue;

  getRowValues(row).forEach((value, index) => {
    if (index === column - 1) {
      return;
    }

    if (greatestValue === value) {
      saddlePoints.push({
        row,
        column: index + 1,
        value
      });
    }

    if (greatestValue < value) {
      greatestValue = value;
      saddlePoints = [{
        row,
        column: index + 1,
        value
      }];
    }
  });

  return saddlePoints;
}

function findColumnSaddlePoints(row, column) {
  let saddlePoints = [];
  let startingValue = map[row - 1][column - 1];
  let leastValue = startingValue;

  getColumnValues(column).forEach((value, index) => {
    if (index === row - 1) {
      return;
    }

    if (leastValue === value) {
      saddlePoints.push({
        row: index + 1,
        column,
        value
      });
    }

    if (value < leastValue) {
      leastValue = value;
      saddlePoints = [{
        row: index + 1,
        column,
        value
      }];
    }
  });

  return saddlePoints;
}

function findSaddlePoints(x, y) {

  let rowSaddlePoints = findRowSaddlePoints(x, y);
  let columnSaddlePoints = findColumnSaddlePoints(x, y);

  if (!rowSaddlePoints.length) {
    console.log('No Row Saddle Points.');
  } else {
    console.log('Row Saddle Points:');
    rowSaddlePoints.forEach(point => {
      console.log(`Row: ${point.row}, Column: ${point.column}, Value: ${point.value}`);
    });
  }

  if (!columnSaddlePoints.length) {
    console.log('No Column Saddle Points.');
  } else {
    console.log('Column Saddle Points:');
    columnSaddlePoints.forEach(point => {
      console.log(`Row: ${point.row}, Column: ${point.column}, Value: ${point.value}`);
    });
  }
}

findSaddlePoints(2, 4);
