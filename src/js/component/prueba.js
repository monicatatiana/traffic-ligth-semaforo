export function Semaforo() {
	//Declaramos Estado:
	const [nombre, setNombre] = useState("Tomas");
    setNombre("Monica");

     //Condición      ? Lo que pasa si la condición es true  : Lo que pasa si la condición es false
   nombre == "Tomas" ? console.log("Mi nombre es ", nombre) : console.log("Mi nombre no es ese");

	return (
	<div className="text-center mt-5">
			<div id="app"></div>
			<div>
				<div id="traffic top"></div>
				<div id="container">
                    {green == "Prendida" ? 
                    <div>
                        <img src="prendido.jpg" />
                    </div> : 
                    <div>
                        <img src="apagado.jpg" />
                    </div>}
					<div className="luzred"></div>
					<div className="luzgreen"></div>
					<div className="luzyellow"></div>
					<h1>{nombre}</h1>
				</div>
			</div>
		</div>
	);
}