# Vue to do list

Creiamo una to do list utilizzando vue js.

Parto dalla creazione di un array di oggetti all'interno del data, ognuno con un testo del todo e un valore booleano done, che sarà false di base.

#### MILESTONE 1 

Una volta creato il primo elemento della lista in html, vado a duplicarlo con un `v-for` tante volte quante sono gli oggetti nell'array, e ne assegno il valore del testo. Con un if, verifico se la key done è true o false, e, nel caso in cui sia true, aggiungo una classe al li per la sottolineatura.

#### MILESTONE 2

Dispongo una `x` accanto ad ogni li, al cui click si scatenerà una funzione che andrà a rimuovere l'oggetto corrispondente al todo dall'array.

#### MILESTONE 3

Creo un campo testuale con un bottone, al cui click si scatenerà una funzione, che tramite un push aggiungerà all'array un nuovo oggetto che avrà:
- come testo il valore del campo imput, preso tramite `v-model`
- come valore done di base false

#### BONUS 1

Inserisco la funzione per aggiungere todo anche all'interno di un evento con `keyup.enter`;

#### BONUS 2

Aggiungo un evento al li del todo, al cui click si scatenerà una funzione che andrà a cambiare lo stato di done
