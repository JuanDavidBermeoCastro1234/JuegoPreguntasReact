export default function HomePage() {
  return (
    <div className="container">
    <img src="/img/img.png" alt="Logo Millonario" className="logo" />
      <h1 className="title">¿Quien quiere ser programador?</h1>
      <p>¡Pon a prueba tus conocimientos en programación y gana puntos!</p>
      <div className="section_botones">
        <button className="boton main">Jugar</button>
        <button className="boton">Instrucciones</button>
      </div>
    </div>
  );
}
