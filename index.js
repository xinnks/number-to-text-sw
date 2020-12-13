const numberToTextSw = (inputNumber) => {
	if(positionsCount(inputNumber) == 4){
		// thousands
		return `${thousands(parseInt(inputNumber.toString()[0]))} ${hundreds(parseInt(inputNumber.toString()[1]))} ${parseInt(inputNumber.toString()[2]) !== 0 ? 'na' : ''} ${tens(parseInt(inputNumber.toString()[0]))} ${parseInt(inputNumber.toString()[3]) !== 0 ? 'na' : ''} ${ones(parseInt(inputNumber.toString()[3]))}`
	}
	else if(positionsCount(inputNumber) == 3){
		// hundreds
		return `${hundreds(parseInt(inputNumber.toString()[0]))} ${parseInt(inputNumber.toString()[1]) !== 0 ? 'na' : ''} ${tens(parseInt(inputNumber.toString()[0]))} ${parseInt(inputNumber.toString()[2]) !== 0 ? 'na' : ''} ${ones(parseInt(inputNumber.toString()[2]))}`
	}
	else if(positionsCount(inputNumber) == 2){
		// tens
		return `${tens(parseInt(inputNumber.toString()[0]))} ${parseInt(inputNumber.toString()[1]) !== 0 ? 'na' : ''} ${ones(parseInt(inputNumber.toString()[1]))}`
	} else {
		// ones
		return `${ones(parseInt(inputNumber.toString()[0]))}`
	}
}

// helpers

const positionsCount = (val) => {
	console.log(val.toString().length)
	return val.toString().length
}

const ones = (val) => {
	switch (val) {
		case 1:
			return 'moja';
			break;
		case 2:
			return 'mbili';
			break;
		case 3:
			return 'tatu';
			break;
		case 4:
			return 'nne';
			break;
		case 5:
			return 'tano';
			break;
		case 6:
			return 'sita';
			break;
		case 7:
			return 'saba';
			break;
		case 8:
			return 'nane';
			break;
		case 9:
			return 'tisa';
			break;
		default:
			return '';
			break;
	}
}

const tens = (val) => {
	switch (val) {
		case 1:
			return 'kumi';
			break;
		case 2:
			return 'ishirini';
			break;
		case 3:
			return 'thelathini';
			break;
		case 4:
			return 'arobaini';
			break;
		case 5:
			return 'hamsini';
			break;
		case 6:
			return 'sitini';
			break;
		case 7:
			return 'sabini';
			break;
		case 8:
			return 'themanini';
			break;
		case 9:
			return 'tisini';
			break;
		default:
			return '';
			break;
	}
}

const hundreds = (val) => {
	return (1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) ? `mia ${ones(val)}` : ''
}

const thousands = (val) => {
	return (1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) ? `elfu ${ones(val)}` : ''
}