import "../css/main.css";

function Main(propes)
{
  console.log(propes);
    return(
      <section>
        <h1>Cars Collaction</h1>
        <div>
          {
          propes.cars.map((cars , index)=>{
            return(
              <main key={index}>
                <h2>{cars.company}</h2>
                <img src={cars.img} alt="" />
                <h3>{cars.modelname}</h3>
                <p>{cars.category}</p>
                <p class="price">{cars.price}</p>
              </main>
            )
          })
          }
        </div>
      </section>
    )
}

export default Main;
