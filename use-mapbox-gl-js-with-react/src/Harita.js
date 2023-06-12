import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.js';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

class Map extends Component {
  mapRef = React.createRef();

  componentDidMount() {
    // Maps and navigation
    mapboxgl.accessToken = "pk.eyJ1IjoiaGd1bmdvciIsImEiOiJjbGhzYWZydWcwbmYzM2lvYWZrMnRjc3lnIn0.6qtKL43P-0kBeyyyFrUXYg";
    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.props.konum.longitude, this.props.konum.latitude], 
      zoom: 13,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });

    map.addControl(directions, 'top-left');

    // route creation
    directions.on('route', (e) => {
      console.log(e.route); // Route data
    });

    // route creation when destination is updated
    directions.setDestination([this.props.hedefKonum.longitude, this.props.hedefKonum.latitude]);

    this.map = map;
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return <div ref={this.mapRef} className="harita" />;
  }
}

export default Map;
