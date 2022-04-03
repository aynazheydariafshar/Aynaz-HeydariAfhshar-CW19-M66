import './App.css';
import Form from './Components/Form';
import MyCard from './Components/MyCard';

function App() {
  const handleonclick = () => {
    console.log('click it')
  }
  return (
    <div className="App">
      <Form />
      <MyCard image={'https://picsum.photos/id/237/200/300'} title={"my title"} price={35000000} handleclick={handleonclick}/>
    </div>
  );
}

export default App;
