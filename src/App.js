import { useState } from 'react'
import './App.css';
import NewAddForm from './components/NewAddForm';
 
const addData=[]


function App() {
  const [data, setData] = useState(addData)
	function saveDatToList(dataWithId) {
		setData((prevState) => {
			return [ ...prevState,dataWithId]
		})
	}
  return (
    <NewAddForm onSaveDatToList={saveDatToList}
	addData={data}
	
	/>
  );
}


export default App;
