/*
OPERADORES DE COMPARACIÓN

== Si un valor es igual al otro
=== Igual que el anterior pero verificando que también tengan el mismo tipo de dato
!= Diferente de...
!== Diferente en el valor y en el tipo de dato
>
>=
<
<=
*/

const a = 10;
const b = 20;
const c = '10';

a == b; // false
a == c; // true
a === c; // false
a != b; // true
a !== c; // true

/*
OPERADORES LÓGICOS

&& = and
|| = or
! = distinto
*/

!(a === c) // true