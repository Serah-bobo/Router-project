
const Home = () => {
    return (
        <div
        style={{WebkitBackgroundSize:'cover',
        backgroundImage:'url(/img/home-hero.png)',
        MozBackgroundSize:'cover',
        OBackgroundSize:'cover',
       }}
        className=" bg-no-repeat  bg-center bg-gradient-to-b from-black via-transparent to-transparent 
        text-white p-10 bg-cover min-h-96 "
       
        >
           
       <h1 className="font-bold  text-2xl">You got the travel plans, we got the travel van.</h1> 
       <p className="leading-6">Add adventure to your life by joining the #vanlife movement.
        Rent the perfect van to make your perfect road trip.
       </p>
       
        </div>
      )
}

export default Home