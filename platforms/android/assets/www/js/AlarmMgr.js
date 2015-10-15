/* ---------------------------------- XML Functions ---------------------------------- */

//alert('Librairie XMLDisplay chargée !');

// 1969-12-31 16:00


/* Enable or disable alarm - */
function alarmSetUnset(id) {
    cordova.plugins.notification.local.schedule({
        id: id,
        title: "Production Jour fixe",
        text: "Duration 1h",
        firstAt: now,
        every: 0,
    });
}


/* Return if the alarm is on - Used to decide if toggle active or not */    
function getState(id) {
    alert('Non fonctionnel');
    /* Var state = TrucExiste(id)
     * return state
     * */
}



function CreateAlarm(id) {
    alert('Non fonctionnel');
    /* Les alarmes sont hardcodées. Pour chaque ID correspond un event
     * */
}


function InitAlarms(id) {
    alert('Non fonctionnel');
    /* Crée les alarmes activées par défaut
     * Cela inclut :
     * -La premiere anim de chaque jour
     * -Les trucs importants (style blabla dans l'amphi, là)
     * -La fin de la COIN
     * */
}


function DisableAlarm(id) {
    alert('Non fonctionnel');
    /* Désactive l'alarme donnée
     * */
}



function SwitchAlarm(id) {
    alert('Non fonctionnel');
    /* si getState(id) : Nope, 
     *  alors activer(id)       (note : Ou juste créer)
     *  sinon désactiver(id)     (note: ou détruire)
     * 
     * return state
     * */
}


