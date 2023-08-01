import { useState } from 'react'
import './App.css'

import Editor from './editor/editor';

function App() {
	const [withPlugin, setWithPlugin] = useState(false);
	const [withOnChange, setWithOnChange] = useState(false);
	const [, setEditorValue1] = useState(null);
	const [, setEditorValue2] = useState(null);
	const [, setValue] = useState(0);

	return (
		<>
			<label>
				<input type="checkbox" checked={withPlugin} onChange={e => setWithPlugin(e.target.checked)} />
				<span>with plugin</span>
			</label>
			<label>
				<input type="checkbox" checked={withOnChange} onChange={e => setWithOnChange(e.target.checked)} />
				<span>with onchange</span>
			</label>
			<Editor withPlugin={withPlugin} withOnChange={withOnChange} onChange={setEditorValue1} />
			<Editor withPlugin={withPlugin} withOnChange={withOnChange} onChange={setEditorValue2} />
			<Editor withPlugin={withPlugin} />
			<button onClick={() => setValue(Math.random())}>set some other state</button>
		</>
	);
}

export default App
