function validar() {
    var Usu=document.getElementById("Usuario");
    var con=document.getElementById("Contra");
    if((con.value== null || con.value=="") && (Usu.value==null || Usu.value=="")){
        alert("Los datos son obligatorios");
        return false;
    }
    else if(Usu.value== null || Usu.value=="") {
        alert("El Usuario es obligatorio");
        return false;
    }
    else if(con.value==null || con.value==""){
            alert("La contraseña es obligtorio");
            return false;
    }
    else{
            
            window.location.href ="vistas/index.html";
            alert("Datos Correctos");
        }
}