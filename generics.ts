// Terminologias que não são regras, mas são bastante usadas
// S => State
// T => Type
// K => Key
// V => Value
// E = Element

// Tipando funçoes <>                       //Indica que o padrão é string
function useState<S extends number | string = string>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState};
}

// inicializacao da funcao
const newState = useState();


//newState.setState(123); // aceita number - mas por ter a definicao string como padrao e a inicializacao nao for criada tipada - quebra
//console.log(newState.getState());

newState.setState("bla"); // aceita string
console.log(newState.getState());

//newState.setState(false); // não aceita boolean
//console.log(newState.getState());