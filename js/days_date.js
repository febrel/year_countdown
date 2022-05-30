export function happy_birthday(days_c, hours_c, mins_c, seconds_c, title, valor) {

    let fecha = new Date();

    let $coutDays = document.querySelector(days_c);
    let $coutHours = document.querySelector(hours_c);
    let $coutMins = document.querySelector(mins_c);
    let $coutSeconds = document.querySelector(seconds_c);
    let $title = document.querySelector(title);

    const datos_dias = [{
        id: '0',
        nombre: 'Luis Febre',
        date: `${fecha.getFullYear()},06,06`
    }, {
        id: '1',
        nombre: 'Mariuxi Febre',
        date: `${fecha.getFullYear()},02, 6`
    }, {
        id: '2',
        nombre: 'Lupe Paucar',
        date: `${fecha.getFullYear()},12,12`
    }, {
        id: '3',
        nombre: 'Fernando Febre',
        date: `${fecha.getFullYear()},10,29`
    },
    {
        id: '4',
        nombre: 'Mayte Febre',
        date: `${fecha.getFullYear()},08,12`
    }
    ];


    let retorno_date = datos_dias[valor].date;


    // Condicion que compara si el mes siempre sea >= al que esta almacenado
    if (retorno_date.split(',')[1] >= ('0' + (fecha.getMonth() + 1)).slice(-2)) {

        let countDownDate = new Date(datos_dias[valor].date).getTime(); // Lo trasformo a Milisegundos

        // Utilizar un Interval
        let countDownTempo = setInterval(() => {


            // Ahora
            let now = new Date().getTime();
            let limitTime = countDownDate - now;

            // 1000 mil seg(60) * hr(60) dia(24hr)
            let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
            // Necesito el residuo para las siguienets operaciones y seguir sacando su residuo
            let hours = ('0' + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2);
            let minutes = ('0' + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2);
            let seconds = ('0' + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

            $title.textContent = `Happy birthday "${datos_dias[valor].nombre}" 🎂`
            $coutDays.textContent = days;
            $coutHours.textContent = hours;
            $coutMins.textContent = minutes;
            $coutSeconds.textContent = seconds;



        }, 1000);



        // Si cambia actualiza el tempo (Para limpiar )
        document.addEventListener('change', (e) => {

            clearInterval(countDownTempo);
        });

    } else {
        // Contenido por defecto
        $title.textContent = `Lo siento "${datos_dias[valor].nombre}" tu dia ya paso 😅`
        $coutDays.textContent = '00';
        $coutHours.textContent = '00';
        $coutMins.textContent = '00';
        $coutSeconds.textContent = '00';

    }

} 