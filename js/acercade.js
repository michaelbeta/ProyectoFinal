let names = document.querySelector('#names');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }else{
            var mensajeModal = '<div class="modal_wrap">'+
            '<div class="mensaje_modal">'+
                '<h3>Mensaje Enviado</h3>'+
                
                '<span id="btnClose">Cerrar</span>'+
            '</div>'+
        '</div>'
        document.getElementById("email").value="";
            document.getElementById("mensaje").value="";
            document.getElementById("phone").value="";
            document.getElementById("names").value="";

$('body').append(mensajeModal);

    

        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
            
        });
    });

});

