(function(){
    // en esta parte del codigo al dejar  [...document.querySelectorAll('.testimony__body')];
    // lo tomara como array
    const sliders = [...document.querySelectorAll('.testimony__body')];
    //seleccionara para cada selector sumandolo a la constante creada
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    //en esta parte si dejamos un console.log(sliders) = mostrara los numeros de cada estudiante
    let value;   
    // con la funcion se dara asignara un numero por cada click
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        //tomara que numero esta acualmente se le sumara un 1
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');

    }

})(); //en esta parte siempre se cierra asi para no mezclarse con otros archivos

//

