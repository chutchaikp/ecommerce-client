export const toCurrencyFormated = (price) => {

	return price.toLocaleString('th-TH', {
		style: 'currency',
		currency: 'THB',
	});
}