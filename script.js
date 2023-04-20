let variableCount = 0;

function removeRow() {
	document.getElementById("expnces");
	console.log("expences");
}

function addExpence() {
	variableCount += 1;
	
	const theLocation = document.getElementById('expenceMade').value;
	const theAmount = document.getElementById('amountSpent').value;
	const theDate = document.getElementById('theDate').value;
	const table = document.getElementById('expences');
	const newRow = table.insertRow();
	let newButton = document.createElement('BUTTON');
	
	newButton.setAttribute('id', `${variableCount}`);
	newRow.setAttribute('id', `${variableCount}`);
	
	const deleteRow = document.createTextNode('DELETE');
	const cellOne = newRow.insertCell(0);
	const cellTwo = newRow.insertCell(1);
	const cellThree = newRow.insertCell(2);
	const cellFour = newRow.insertCell(3);

	cellOne.innerHTML = theLocation;
	cellTwo.innerHTML = theAmount;
	cellThree.innerHTML = theDate;
	newButton.appendChild(deleteRow);
	cellFour.appendChild(newButton);
	
	newButton.onclick = function deleteRow() {
		if (newButton.id === newRow.id)
			document.getElementById("expences").deleteRow();
	};
}