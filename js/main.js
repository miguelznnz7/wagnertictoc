	letra = "X";
 
	function joga(celula){
		let celulaclicada = document.getElementById(celula).innerHTML;
		if (celulaclicada == "X" || celulaclicada == "O"){
			alert("Opa, este quadrado já foi escolhido!");
		}else{
			document.getElementById(celula).innerHTML = letra;
			if (letra == "X"){
				letra = "O";
			}else{
				letra = "X";
			}
		}
	}

	function testa() {
		const c1 = document.getElementById('cel11').innerHTML;
		const c2 = document.getElementById('cel12').innerHTML;
		const c3 = document.getElementById('cel13').innerHTML;
		const c4 = document.getElementById('cel21').innerHTML;
		const c5 = document.getElementById('cel22').innerHTML;
		const c6 = document.getElementById('cel23').innerHTML;
		const c7 = document.getElementById('cel31').innerHTML;
		const c8 = document.getElementById('cel32').innerHTML;
		const c9 = document.getElementById('cel33').innerHTML;

		if(c1 != '' && c4 != '' && c7 != '' &&
		    c1 == c4 && c4 == c7 || // testa a primeira coluna

			c2 != '' && c5 != '' && c8 != '' &&
			c2 == c5 && c5 == c8 || // testa a segunda coluna

			// testando a terceira coluna
			c3 != '' && c6 != '' && c9 != '' &&
			c3 == c6 && c6 == c9 ||

			// testando a primeira linha
			c1 != '' && c2 != '' && c3 != '' &&
			c1 == c2 && c2 == c3 ||

			// testando a segunda linha
			c4 != '' && c5 != '' && c6 != '' &&
			c4 == c5 && c5 == c6 ||
			
			//testando a terceira linha
			c7 != '' && c8 != '' && c9 != '' &&
			c7 == c8 &&  c8 == c9 ||

			// testando a primeira linha diagonal
			 c1 != '' && c5 != '' && c7 != '' &&
			 c1 == c5 && c5 == c9 ||

			 //testando a segunda linha diagonal
			 c3 != '' && c5 != '' && c7 != '' &&
			 c3 == c5 && c5 == c7)
			{
				alert('Você Venceu!!')
			} 
			 


	}
	

	
 