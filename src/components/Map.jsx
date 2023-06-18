import React from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryDataUsingLatlng } from '../actions/actions';
import L from 'leaflet'
import markerIconPng from '../marker.png'
import { setCoordinates } from '../actions/actions';

const Map = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector(state => state.fetchApi.coordinates)
  console.log(coordinates)

  const markerIcon = L.icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41]
  })

  // HANDLECLICK TO GET LATITUDE AND LONGITUDE 

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    dispatch(setCoordinates(lat, lng))
    dispatch(fetchCountryDataUsingLatlng(lat, lng))

  };


  const MapEvents = ({ handleMapClick }) => {
    useMapEvents({
      click: (event) => {
        handleMapClick(event);
      },
    });


    return null;
  };

  let { latitude, longitude } = coordinates;

  return (
    <MapContainer center={[latitude, longitude]} zoom={4} scrollWheelZoom={false} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapEvents handleMapClick={handleMapClick} />
      <Marker position={[latitude, longitude]} icon={markerIcon} >

      </Marker>
    </MapContainer>

  );
};

export default Map;
