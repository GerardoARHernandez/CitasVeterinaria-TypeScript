import { formulario } from "../selectores";

type NotificacionType = {
    texto: string;
    tipo: 'error' | 'exito' | '';
}

export default class Notificacion{

    notificacion : NotificacionType = {
        texto: '',
        tipo: ''
    }

    constructor({texto, tipo} : NotificacionType){
        this.notificacion.texto = texto;
        this.notificacion.tipo = tipo;

        this.mostrar();
    }

    mostrar(){
        //Crear la notificación
        const alerta = document.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        //Eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert');
        // if (alertaPrevia) {
        //     alertaPrevia.remove();
        // }
        alertaPrevia?.remove(); //Hace lo mismo que el if de arriba

        //Si es de tipo error, agrega una clase
        this.notificacion.tipo === 'error' ? alerta.classList.add('bg-red-500') :alerta.classList.add('bg-green-500');

        //Mensaje de error
        alerta.textContent = this.notificacion.texto;

        //Insertar en el DOM
        formulario?.parentElement?.insertBefore(alerta, formulario);

        //Quitar despues de 3s
        setTimeout(() => {
            alerta.remove();
        }, 3000);

    }
}
