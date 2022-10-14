import './Hero.css';

function Hero(){
  return (
    <>
      <section className="row-nav" data-height="600" id="hero">
        <div id="herocontainer">
          <div className="main">
            <h1 className="he">Estamos enfocados en fabricar con precisión, diseños diversos,
              en grandes volúmenes y a la mayor velocidad.</h1>
          </div>
          <video autoPlay loop id="video-background" muted>
            <source src="images/hero/videoorange.mp4" type="video/mp4" />
          </video>
        </div>
      </section>  
    </>
  );
}

export default Hero;