import Card from "./components/card";

function App() {
  //add reac router
  return (
    <div  >
      <main className="bg-black h-screen  grid grid-cols-3 gap-4 ">
        <Card  strMealThumb={"https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg"}/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>

    </div>
  );
}

export default App;
