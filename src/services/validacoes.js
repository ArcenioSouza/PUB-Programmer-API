export function validaNome(nome){
   return !!nome.match(/^(?![ ])(?!.*[ ]{2})((?:e|da|do|das|dos|de|d'|D'|la|las|el|los)\s*?|(?:[A-Z][^\s]*\s*?)(?!.*[ ]$))+$/gmu);
}

export function validaCargo(cargoFuncionario){
   const cargos = ["Gerente", "Garçon", "Copeiro", "Barman", "Cozinheiro", "Auxiliar de Cozinha"]
   const result = cargos.filter(cargo => cargoFuncionario == cargo)
   return result[0] ? true : false;
}

export function validaCPF(strCPF) {
	let Soma;
	let Resto;
	Soma = 0;
 if (strCPF == "00000000000") return false;

 for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
 Resto = (Soma * 10) % 11;

	if ((Resto == 10) || (Resto == 11))  Resto = 0;
	if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

 Soma = 0;
	for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
	Resto = (Soma * 10) % 11;

	if ((Resto == 10) || (Resto == 11))  Resto = 0;
	if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
	return true;
}


