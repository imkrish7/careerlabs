export function validDate(dateStr){
	let date = dateStr.toString().split(', ');
	let year = date[2] || date[1];
	let dayMonth = date[0].split(' ');
	let month;
	let day;
	if (dayMonth.length == 2) {
		month = dayMonth[1];
		if (dayMonth[0].split('th').length == 2) {
			day = dayMonth[0].split('th')[0];
		}
		if (dayMonth[0].split('st') == 2) {
			day = dayMonth[0].split('st')[0];
		}
		if (dayMonth[0].split('nd').length == 2) {
			day = dayMonth[0].split('nd')[0];
		}
	} else {
		month = dayMonth[0];
		day = '01';
	}
	let finalDate = new Date(month + ' ' + day + ', ' + year);
	return finalDate;
}