const [state, dispatch] = useReducer(reducer, initialArg, init);

// reducer: función de js que actualiza el estado. Primer elemento que recibe.
// initialArg: es el estado inicial.
// init: es una función opcional, para definir el estado inicial. Si 
// el estado inicial que había no es el estado inicial o el que yo quiero para 
// trabajar a través de esta función, puedo definir el estado inicial.

// Este hook nos devuelve un array, la posición 0 es el estado, y la posición 1 es un dispatch, que es la función que usamos para actualizar el estado.
