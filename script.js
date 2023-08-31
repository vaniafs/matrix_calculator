document.addEventListener("DOMContentLoaded", function() {
    const matrixA = document.getElementById("matrixA");
    const matrixB = document.getElementById("matrixB");
    const resetBtn = document.getElementById("reset");
    const resultTable = document.getElementById("result");
    const operations = document.querySelectorAll(".operation");
  
    // Create matrix input tables
    function createMatrixInputTable(element) {
      element.innerHTML = "";
      const numRows = 2;
      const numCols = 2;
  
      for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < numCols; j++) {
          const cell = document.createElement("td");
          const input = document.createElement("input");
          input.type = "number";
          cell.appendChild(input);
          row.appendChild(cell);
        }
        element.appendChild(row);
      }
    }
  
    // Get matrix data from a table
    function getMatrixData(matrixElement) {
      const rows = matrixElement.querySelectorAll("tr");
      const matrixData = [];
  
      for (const row of rows) {
        const rowData = [];
        const inputs = row.querySelectorAll("input");
        for (const input of inputs) {
          rowData.push(parseFloat(input.value));
        }
        matrixData.push(rowData);
      }
  
      return matrixData;
    }
  
    // Add two matrices
    function addMatrices(matrixA, matrixB) {
      const result = [];
      for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
          row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
      }
      return result;
    }
  
    // Subtract two matrices
    function subtractMatrices(matrixA, matrixB) {
      const result = [];
      for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
          row.push(matrixA[i][j] - matrixB[i][j]);
        }
        result.push(row);
      }
      return result;
    }
  
    // Display matrix data in a table
    function displayMatrix(tableElement, matrixData) {
      tableElement.innerHTML = "";
      for (const row of matrixData) {
        const tableRow = document.createElement("tr");
        for (const value of row) {
          const cell = document.createElement("td");
          cell.textContent = value;
          tableRow.appendChild(cell);
        }
        tableElement.appendChild(tableRow);
      }
    }
  
    // Calculate matrix based on selected operation
    function calculateMatrix(operation) {
      const matrixAData = getMatrixData(matrixA);
      const matrixBData = getMatrixData(matrixB);
  
      if (!matrixAData || !matrixBData) {
        alert("Please fill in all matrix cells.");
        return;
      }
  
      let resultData;
  
      if (operation === "add") {
        resultData = addMatrices(matrixAData, matrixBData);
      } else if (operation === "subtract") {
        resultData = subtractMatrices(matrixAData, matrixBData);
      }
  
      displayMatrix(resultTable, resultData);
    }
  
    // Calculate button click event
    for (const operation of operations) {
      operation.addEventListener("click", function() {
        const selectedOperation = this.getAttribute("data-operation");
        calculateMatrix(selectedOperation);
      });
    }
  
    // Reset button click event
    resetBtn.addEventListener("click", function() {
      matrixA.innerHTML = "";
      matrixB.innerHTML = "";
      resultTable.innerHTML = "";
      createMatrixInputTable(matrixA);
      createMatrixInputTable(matrixB);
    });
  
    // Initialize matrix input tables
    createMatrixInputTable(matrixA);
    createMatrixInputTable(matrixB);
  });
  