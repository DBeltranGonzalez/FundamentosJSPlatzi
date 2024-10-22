function calculateDiscountPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}

const originalPrice = 235;
const discountPercentage = 20;
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage);

console.log(`Original price: ${originalPrice}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Price with discount: ${finalPrice}`);

/* 1. Pasar funciones dentro de otras funciones como argumentos -> callback

    function a() {};
    function b(a) {};
    b(a);

    2. Retornar funciones

    function a() {
        function b() {}
        return b
    };

    3. Asignar funciones a variables: no es necesario ponerle nombre a la función -> Expresión de función

    const a = function() {};

    4. Tener propiedades y métodos

    function a () {}
    const obj = {}
    a.call(obj);

    5. Anidar funciones -> nested functions

    function a() {
        function b() {
            function c() {
            
            }
            c();
        }
        b();
    }
    a();

    6. Almacenar funciones en objetos -> métodos
    */

    const rocket = {
        name: 'Falcon 9',
        launchMessage: function launchMessage() {
            console.log('Despegue')
        }
    }

    rocket.launchMessage()