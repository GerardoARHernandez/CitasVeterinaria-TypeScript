import { generarId } from "./funciones";
import type {CitaI} from './types';


let editando = {
    value: false
};

//Objeto de Cita
const citaObj: CitaI = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
} 

export {
    editando,
    citaObj
}

//Primitive Types
// let precio: number
// let producto: string
// let disponible: boolean

// interface Producto{ //ó type Producto = {
//     precio: number;
//     producto: string;
//     disponible: boolean;
// }

// const producto: Producto = {
//     precio: 50,
//     producto: 'Monitor',
//     disponible: false
// }
