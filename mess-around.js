const person = {
	fName: 'Michael',
	lName: 'Stump',
	fullName: function(){
		return `${this.fName} ${this.lName}`
	}
}

// console.log(person.fullName())

const person2 = {
	fullName: function(fName, lName){
		return `${this.fName} ${this.lName}`
	}
}

const mike = {
	fName: 'James',
	lName: 'Bond'
}

// console.log(person2.fullName.call(mike))

// console.log(person2.fullName.call({fName: 'Bobby', lName: 'LongJon'}))

// console.log(person2.fullName.call('Joshua', 'Paul'))

const s = 'This is cool man!'

const reserveString = (string) => {
	return string.split('').reverse().join('')
}

const reverseLongWay = (string) => {
	let result = ''
	for(let i = string.length-1; i >= 0; i--){
		// console.log(string.split('')[i])
		result += string.split('')[i]
	}
	return result
}

console.log(reserveString(s))
console.log(reverseLongWay(s))