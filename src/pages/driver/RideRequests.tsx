/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useAcceptRideMutation, useAllRidesQuery } from "@/redux/features/ride/ride.api";
import { format } from "date-fns";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { toast } from "sonner";

const RideRequests = () => {
    const { data } = useAllRidesQuery({ currentStatus: "REQUESTED" });
    const [acceptRide] = useAcceptRideMutation();
    console.log(data);
    const handleSubmit = async (id: string) => {
        try {
            const result = await acceptRide(id).unwrap();
            if (result.statusCode === 200) {
                toast.success("Ride request accepted successfully.")
            }
            else (
                toast.error("An internal server error ")
            )
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message || "An internal server error.")
        }
    }
    return (
        <div>
            <h3 className="text-center text-3xl font-medium">Ride requests</h3>
            <div className="flex flex-wrap justify-center gap-10">
                {
                    data?.data?.map((req: any) => (
                        <div key={req._id} className="border p-5 w-full max-w-xl">
                            <MapContainer className="max-w-xl h-72" center={[req.arrival[1], req.arrival[0]]} zoom={10}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                                />
                                <Polyline positions={[[req.arrival[1], req.arrival[0]], [req.destination[1], req.destination[0]]]} pathOptions={{ color: "red" }} />
                            </MapContainer>
                            <div>
                                <p className="text-xl font-semibold pt-8 pb-2">Ride Info</p>
                                <p>Distance: {req.distance}</p>
                                <p>Fare: {req.fare}</p>
                                <p>Requested at: {format(req.createdAt, "PPpp")}</p>
                            </div>
                            <div>
                                <Button onClick={() => handleSubmit(req._id)} className="w-full mt-4">Accept</Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RideRequests;

// {[req?.arrival?.[1], [req?.arrival?.[0]]}

/**[req.arrival[1], req.arrival[0]]
 * 
 * 
 * <div className="grid grid-cols-3 gap-3">
                <div>
                    <p className="pl-5 text-lg flex items-center gap-1 font-medium"><MapPin />Your arrival location</p>
                    <Map location={arrival} popUp="this is your arrival location" />
                </div>
                <div>
                    <p className="pl-5 text-lg flex items-center gap-1 font-medium"><MapPin />Your Destination</p>
                    <div>
                        <Map location={destination} popUp="This is your destination" />
                    </div>
                </div>
            </div>
 * 
 * 
 * 
 * */