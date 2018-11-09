// import GeoData from '../../services/GeoData';
import Map from '../Map';
import React from "react";

import { getLatest } from '../../services/GeoData';
import { Slider } from 'antd';
import { Brush, LineChart, ReferenceLine, XAxis, YAxis, Tooltip, CartesianGrid, Line } from 'recharts';

import './Tracker.scss';


export default class Tracker extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			currentDataPoint: {
				speed: 0,
				rssi: 0,
			},
			currentTimestamp: 0,
			data: [],
			minTimestamp: 0,
			maxTimestamp: 32503680000000,
		}
  }

  componentDidMount() {
  	this.init();
  }

  handleSliderChange(value) {
  	const currentDataPoint = this.state.data
  		.map(d => Object.assign({}, d, { timeDiff:Math.abs(d.timestamp - value) }))
  		.reduce((p,c)=>c.timeDiff<p.timeDiff?c:p,{ timeDiff:Infinity }) || { speed:-1, rssi: -1 };
    this.setState( Object.assign({}, this.state, { currentDataPoint, currentTimestamp:value }) );
  }

  init() {
  	// const data = await GeoData.getLatest();
  	// this.setState({ data });
  	getLatest()
  		.then(data => this.setState(data))
  		.catch(err => console.error(err));
  }

  render() {
  	const data = this.state.data.filter(d => d.timestamp <= this.state.currentTimestamp)

		return <div id="tracker">
			<section id="title" row="1">
				<h1>Vehicle Statistics</h1>
			</section>

			<aside id="dates" row="1">
				dates
			</aside>

			<section id="map" row="2">
				<Map data={this.state.data} currentTimestamp={this.state.currentTimestamp} currentDataPoint={this.state.currentDataPoint} />
        		<Slider min={this.state.minTimestamp} max={this.state.maxTimestamp} onChange={value => this.handleSliderChange(value)} />
        		<div id="readout">
        			<span>{this.state.currentDataPoint.speed} mph</span>
        			,
        			<span>{this.state.currentDataPoint.rssi} bars</span>
        		</div>
			</section>

			<aside id="charts" row="2">
				<section id="signal">
					<h2>Signal</h2>
					<LineChart
					  width={400}
					  height={200}
					  data={this.state.data}
					  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
					>
					  <XAxis dataKey="timestamp" type="number" domain={['dataMin','dataMax']} interval="preserveStartEnd" tickFormatter={val => (new Date(val).toLocaleString())} />
					  <YAxis />
					  <Brush />
					  <ReferenceLine x={this.state.currentTimestamp} stroke="red" label="Current Time" />
					  <Tooltip />
					  <CartesianGrid stroke="#f5f5f5" />
					  <Line type="monotone" dataKey="rssi" stroke="#40bf40" yAxisId={0} />
					  {/*<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />*/}
					</LineChart>
				</section>
				<section id="speed">
					<h2>Speed</h2>
					<LineChart
					  width={400}
					  height={200}
					  data={this.state.data}
					  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
					>
					  <XAxis dataKey="timestamp" type="number" domain={['dataMin','dataMax']} interval="preserveStartEnd" tickFormatter={val => (new Date(val).toLocaleString())} />
					  <YAxis />
					  <Brush />
					  <ReferenceLine x={this.state.currentTimestamp} stroke="red" label="Current Time" />
					  <Tooltip />
					  <CartesianGrid stroke="#f5f5f5" />
					  <Line type="monotone" dataKey="speed" stroke="#40bfbf" yAxisId={0} />
					  {/*<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />*/}
					</LineChart>
				</section>
				<section id="acceleration">
					<h2>Acceleration</h2>
					<LineChart
					  width={400}
					  height={200}
					  data={this.state.data}
					  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
					>
					  <XAxis dataKey="timestamp" type="number" domain={['dataMin','dataMax']} interval="preserveStartEnd" tickFormatter={val => (new Date(val).toLocaleString())} />
					  <YAxis type="number" domain={['dataMin','dataMax']} />
					  <Brush />
					  <ReferenceLine x={this.state.currentTimestamp} stroke="red" label="Current Time" />
					  <Tooltip />
					  <CartesianGrid stroke="#f5f5f5" />
					  <Line type="monotone" dataKey="acceleration" stroke="#4040bf" yAxisId={0} />
					  {/*<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />*/}
					</LineChart>
				</section>
			</aside>

		</div>;
  }
}