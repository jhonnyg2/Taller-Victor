// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function(){

	var formulario = document.formulario_registro,
		elementos = formulario.elements;
	// Funcion que se ejecuta cuando el evento click es activado
	
	var validarInputs = function(){
		for (var i = 0; i < elementos.length; i++) {
			// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
			if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type =="number" || elementos[i].type =="date") {
				// Si es tipo texto, email o numerico vamos a comprobar que esten completados los input
				if (elementos[i].value.length == 0) {
					console.log('El campo ' + elementos[i].name + ' esta incompleto');
					elementos[i].className = elementos[i].className + " error";
					return false;
				} else {
					elementos[i].className = elementos[i].className.replace(" error", "");
				}
			}
		}
		return true;
	};
	var valiletras= function () {
		const input = document.getElementById('nombre').value;
		const regex = /^[a-zA-Z\s]+$/g;
		const textoValido = regex.test(input.value);

		if (!textoValido) {
			input.value = input.value.replace(/[^a-zA-Z\s]+$/g, '');
		}
		return true;
	};
	var valicorre= function(){ 
		var cor= document.getElementById("correo").value;
		var ValidaCorreos = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		if (elementos[i].type == "email"){
			if(ValidaCorreos.test(cor.value) ){
				alert('Correo Electrónico Válido');
				return true;
			}else{
				alert('Correo Electrónico Inválido');
				return false;
			}
		}
		return true;
	};
	var valinumeros= function () {
		var num = document.getElementById("telefono").value;
		var patt = new RegExp(/^[0-9\s]+$/g);
		if (elementos[i].getElementById =="telefono") {
			if (patt.test(num.value)) {
				alert('telefono valido');
				return true;
			}else{
				alert('telefono no valido')
				return false;
			}
		}
		return true;
	};
	var valiedad= function () {
			// Obtener el valor del input por su ID
			const fechaInput = document.getElementById('fecha').value;
		  
			// Obtener la fecha actual
			const fechaActual = new Date();
		  
			// Obtener la fecha de nacimiento a partir del input
			if (elementos[i].getElementById =="fecha") {
			var partes = fechaInput.split('-');
			const year = parseInt(partes[0], 10);
			const month = parseInt(partes[1], 10);
			const day = parseInt(partes[2], 10);
			const fechaNacimiento = new Date(year, month - 1, day);
		  // Calcular la diferencia en milisegundos entre las dos fechas
			const diferencia = fechaActual - fechaNacimiento;
				// Calcular la edad dividiendo la diferencia en milisegundos entre la cantidad de milisegundos en un año
			var edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
			return true;
			}else{
				alert('Fecha no valida')
				return false;
			}
		return edad;

	};
	var valipeso= function () {
		var peso = document.getElementById("peso").value;
		var patt = new RegExp(/^[0-9\s]+$/g);
		if (elementos[i].getElementById =="peso") {
			if (patt.test(peso.value)) {
				alert('peso valido');
				return true;
			}else{
				alert('peso no valido')
				return false;
			}
		}
		return true;
	};
	var validarRadios = function(){
		var opciones = document.getElementsByName('sexo'),
			resultado = false;
	
		for (var i = 0; i < elementos.length; i++) {
			if(elementos[i].type == "radio" && elementos[i].name == "sexo"){
				// Recorremos los radio button
				for (var o = 0; o < opciones.length; o++) {
					if (opciones[o].checked) {
						resultado = true;
						break;
					}
				}
	
				if (resultado == false) {
					elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
					console.log('El campo sexo esta incompleto');
					return false;
				} else {
					// Eliminamos la clase Error del radio button
					elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
					return true;
				}
			}
		}
		return true;
	};
	
	var validaroption = function(){
		var opciones = document.getElementsByName('opcion'),
			resultado = false;
	
		for (var i = 0; i < elementos.length; i++) {
			if(elementos[i].type == "radio" && elementos[i].name == "opcion"){
				// Recorremos los radio button
				for (var o = 0; o < opciones.length; o++) {
					if (opciones[o].checked) {
						resultado = true;
						break;
					}
				}
	
				if (resultado == false) {
					elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
					console.log('El campo ciudad esta incompleto');
					return false;
				} else {
					// Eliminamos la clase Error del radio button
					elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
					return true;
				}
			}
		}
		return true;
	};

	var validarCheckbox  = function(){
		var opciones = document.getElementsByName('terminos'),
			resultado = false;
	
		for (var i = 0; i < elementos.length; i++) {
			if(elementos[i].type == "checkbox"){
				for (var o = 0; o < opciones.length; o++) {
					if (opciones[o].checked) {
						resultado = true;
						break;
					}
				}
	
				if (resultado == false) {
					elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
					console.log('El campo checkbox esta incompleto');
					return false;
				} else {
					// Eliminamos la clase Error del checkbox
					elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
					return true;
				}
			}
		}
		return true;
	};

	
	var enviar = function(e){
		if (!validarInputs()) {
			console.log('Falto validar los Input');
			e.preventDefault();
		}else if (!valiletras()) {
			console.log('Nombre Inválido');
			e.preventDefault();
		} else if (!validarRadios()) {
			console.log('Falto validar los Radio Button');
			e.preventDefault();
		}else if(!validaroption()){
			console.log('Falto validar los Checkbox de ciudad');
			e.preventDefault();
		} else if (!validarCheckbox()) {
			console.log('Falto validar Checkbox');
			e.preventDefault();
		}else if (!valicorre) {
			console.log('Falto validar el correo');
			e.preventDefault();
		}else if(!valinumeros){
			console.log('Falto validar el telefono');
			e.preventDefault();
		}else if(!valiedad){
			console.log('Falto validar la edad');
			e.preventDefault();
		}else if(!valipeso){
			console.log('Falto validar el peso');
			e.preventDefault();
		}else {
			
			alert(' Tiquete ')
		}
	};
	var focusInput = function(){
		this.parentElement.children[1].className = "label active";
		this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
	};
	
	var blurInput = function(){
		if (this.value <= 0) {
			this.parentElement.children[1].className = "label";
			this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
		}
	};
	
	// --- Eventos ---
	formulario.addEventListener("submit", enviar);
	
	for (var i = 0; i < elementos.length; i++) {
		if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "number" || elementos[i].type == "date") {
			elementos[i].addEventListener("focus", focusInput);
			elementos[i].addEventListener("blur", blurInput);
		}
	}
	
}());