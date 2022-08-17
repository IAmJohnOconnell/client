import react, { useState, useEffect } from "react"
import "./App.css"

function importAll(r) {
	let images = {}
	r.keys().map((item, index) => {
		images[item.replace("./", "")] = r(item)
	})
	return images
}

const Photos = importAll(require.context("./assets/", true, /\.png$/))

console.log(Photos)

function App() {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch("/api")
			.then((res) => res.json())
			.then((data) => setData(data))
	}, [])

	return (
		<div className='App'>
			<p>{!data ? "Loading..." : data.message}</p>
		</div>
	)
}

export default App
