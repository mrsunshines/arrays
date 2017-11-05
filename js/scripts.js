// arrays  operations
var masc = ['Adam', 'Robert', 'Wergilius', 'Bercik', 'Duposław'],
	femn = ['Adela', 'Regina', 'Weronika', 'Beata', 'Cycelia'],
	mascAndFemn = masc.concat(femn),
	newName = prompt ('Check name to to added to array'); 
if (mascAndFemn.indexOf(newName) === -1) { 
	alert(mascAndFemn.push(newName));
} else {
	alert('Try again - we know this name already - press OK, Refresh (F5) and try other name');
}