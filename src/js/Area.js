/* que recibe un número que indica el lado del cuadrado y retorna el área del mismo.*/
const getSquareArea = (c) => {
    return c*c;
};
getSquareArea();

const getSquareTriangle =(b,a)=>{

};
getSquareTriangle();
/*  Este fichero debe tener otra función llamada  que recibe un número con la base y otro con la altura del triángulo y retorna el área del mismo.


Este fichero debe exportar un objeto con las dos funciones dentro. */
const objectToExport = {
    getSquareArea: getSquareArea, 
    getSquareTriangle: getSquareTriangle
};
export default objectToExport; 

