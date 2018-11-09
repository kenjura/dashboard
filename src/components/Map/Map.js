import GoogleMapReact from 'google-map-react';
import React from "react";


import './Map.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Dot = props => <div class="dot" intensity={props.intensity}></div>;

export default class Map extends React.Component {
	static defaultProps = {
    center: {
      lat: 37.5714,
      lng: -122.33099
    },
    currentDataPoint: {
      lat: 0,
      long: 0,
    },
    data: [],
    minTimestamp: 0,
    maxTimestamp: 32503680000000,
    zoom: 11
  };
  
  constructor(props) {
		super(props);

    this.state = {
      currentTimestamp: this.props.minTimestamp
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return Math.random() > 0.9;
  // }

  render() {
    const data = Array.isArray(this.props.data) && this.props.data || [];
    const dots = data
      .filter(d => d.timestamp <= this.props.currentTimestamp)
      .map(d => <Dot lat={d.lat} lng={d.long} key={`${d.timestamp}_${Math.random()}`} />);
    return <div id="map" style={{ height:'100%', width:'100%' }}>
			<GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBUCNw8Cg01s-PIUVtllO4CeTAeD0Xn914' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {dots}
          <Dot
            intensity="high"
            lat={this.props.currentDataPoint.lat}
            lng={this.props.currentDataPoint.long}
          />
        </GoogleMapReact>

	</div>;
  }
}