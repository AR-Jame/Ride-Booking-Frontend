import type { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface IProp {
    location: LatLngExpression,
    popUp: string
}

const Map = ({ location, popUp }: IProp) => {
    return (
        <div className="border-[12px] rounded-3xl mt-2">
            <MapContainer className="h-72 rounded-xl" center={location} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={location}>
                    <Popup>{popUp}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;