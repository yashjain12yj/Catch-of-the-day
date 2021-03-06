import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component{
	constructor(){
		super();
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);

		// initial states
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish){
		//update our state
		const fishes = {...this.state.fishes};
		// add in our new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		// this.state.fishes.fish1 = fish;
		//set state
		this.setState({ fishes });
	}

	loadSamples(){
		this.setState({
			fishes: sampleFishes
		});
	}

	addToOrder(key){
		// copy of the state
		const order = {...this.state.order};
		//update order
		order[key] = order[key] + 1 || 1;
		//update state
		this.setState({ order });
	}


	render(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh seafood market"/>
					<ul className="list-of-fishes">
						{
							Object
								.keys(this.state.fishes)
								.map( key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} /> )
						}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory  addFish={this.addFish} loadSamples={this.loadSamples}/>
			</div>
		);
	}
}

export default App;