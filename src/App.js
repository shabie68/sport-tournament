import logo from './logo.svg';
import './App.css';
import react from 'react'



function Match(prop) {
	return(
		<div>
			<div>
				<label>Team 1: </label>
				<input name="team_1" onChange={prop.set_team_1}/>
			</div>

			<div>
				<label>Team 2: </label>
				<input name="team_2" onChange={prop.set_team_2}/>
			</div>

			<div><button onClick={prop.match_result}>Submit</button></div>
		</div>
	)
}
function App() {
	const [team1, setTeam1] = react.useState('');
	const [team2, setTeam2] = react.useState('');

	// const [teams, setTeam] = react.useState(
	// 	[
	// 		{
	// 			"name": "Aus",
	// 			"ranking": 1,
	// 			"rating": 0,
	// 			"win": 0,
	// 			"loss": 0
	// 		},

	// 		{
	// 			"name": "Ind",
	// 			"ranking": 2,
	// 			"rating": 0,
	// 			"win": 0,
	// 			"loss": 0
	// 		},

	// 		{
	// 			"name": "Eng",
	// 			"ranking": 3,
	// 			"rating": 0,
	// 			"win": 0,
	// 			"loss": 0
	// 		},

	// 		{
	// 			"name": "Pak",
	// 			"ranking": 4,
	// 			"rating": 0,
	// 			"win": 0,
	// 			"loss": 0
	// 		},
	// 	]
	// )

	const [team, setTeam] = react.useState(
		{
			teamp: "Pak",
			teama: "Aus",
		});



	function team_1(e) {

		setTeam1(e.target.value)
	}

	function team_2(e) {
		setTeam2(e.target.value)
	}



	function setMatchResult() {
	
		

		// let _team_1 = Object.keys(team).find(k=> {return team[k] == team1}) + "_info"
		// let _team_2 = Object.keys(team).find(k=>{return team[k] == team2}) + "_info"
	
		// const currentTeam = {...team.teamp_info, win: "3"}
		// const nextTeam = {...team, team_info: currentTeam}

		// setTeam(nextTeam)



		setTeam(team=> ({
		   ...team,
		   teama: 'Afghanistan'
		}));

		console.log("here is the team")

		// setTeam({
		// 	...team,
			
		// 	teamp_info: {
		// 		...team.teamp_info,
		// 		win: 1
		// 	}
		// })



	}
	return (

		<div>
			<button onClick={setMatchResult}>Update</button>
			<Match set_team_1 = {team_1} set_team_2 = {team_2} match_result = {setMatchResult}/>

		</div>
	    
	);

}


export default App;
