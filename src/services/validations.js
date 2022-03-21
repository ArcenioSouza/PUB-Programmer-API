import MethodsEmployees from "../DAO/MethodsEmployees.js";

export function validationsName(name){
   return !!name.match(/^(?![ ])(?!.*[ ]{2})((?:e|da|do|das|dos|de|d'|D'|la|las|el|los)\s*?|(?:[A-Z][^\s]*\s*?)(?!.*[ ]$))+$/gmu);
}

export async function validationId(id){
		const method = new MethodsEmployees()
		const response = await method.getEmployeeId(id);
	if (response) {
		true;
	} else {
		false;
	}
}

console.log(validationId(2))

export function validationsOffice(officeEmployee){
   const offices = ["Gerente", "Garçon", "Copeiro", "Barman", "Cozinheiro", "Auxiliar de Cozinha"]
   const result = offices.filter(office => officeEmployee == office)
   return result[0] ? true : false;
}

export function validationsCPF(strCPF) {
	let Sum;
	let Rest;
	Sum = 0;
 if (strCPF == "00000000000") return false;

 for (let i=1; i<=9; i++) Sum = Sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);
 Rest = (Sum * 10) % 11;

	if ((Rest == 10) || (Rest == 11))  Rest = 0;
	if (Rest != parseInt(strCPF.substring(9, 10)) ) return false;

 Sum = 0;
	for (let i = 1; i <= 10; i++) Sum = Sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
	Rest = (Sum * 10) % 11;

	if ((Rest == 10) || (Rest == 11))  Rest = 0;
	if (Rest != parseInt(strCPF.substring(10, 11) ) ) return false;
	return true;
}


