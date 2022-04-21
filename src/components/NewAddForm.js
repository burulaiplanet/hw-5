import Form from './Form'
import FormItem from './FormItem'
import './NewAddForm.css'
function NewAddForm(props) {
	function saveData(data) {
		const dataWithId = {
			...data,
			id: Math.random().toString(),
		}
		props.onSaveDatToList(dataWithId)
		console.log(dataWithId)
	}
	return (
		<div className='list'>
			<Form onSaveData={saveData} />

			{props.addData.map((element) => {
				return (
					<FormItem
						date={element.date}
						text={element.text}
						key={element.key}
					/>
				)
			})}
		</div>
	)
}

export default NewAddForm
