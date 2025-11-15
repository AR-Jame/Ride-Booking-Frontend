/* eslint-disable @typescript-eslint/no-explicit-any */
import Stepper from "@/components/comp-517";
import { Button } from "@/components/ui/button";
import { useCurrentRideQuery, useUpdateRideStatusMutation } from "@/redux/features/ride/ride.api";
import type { LatLngExpression } from "leaflet";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { Link } from "react-router";
import { toast } from "sonner";

const CurrentRide = () => {

    const { data, isLoading: dataLoading } = useCurrentRideQuery(undefined);

    const [updateRideStatus, { isLoading }] = useUpdateRideStatusMutation()
    if (dataLoading || isLoading) return <p>Data is laoding</p>
    const destination: LatLngExpression = [data?.data?.destination[1], data?.data?.destination[0]];
    const arrival: LatLngExpression = [data?.data?.arrival[1], data?.data?.arrival[0]]

    console.log(data);
    const handleNext = async (next: string) => {
        console.log(next, "From frontend");
        try {
            const res = await updateRideStatus({ status: next, id: data?.data?._id })
            console.log(res);
            if (res?.data?.statusCode === 200) {
                toast.success("Status updated successfully")
            } else {
                toast.error("An internal error occured successfully.")
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message || "An internal server error")
        }
    }

    if (!data?.data) return (
        <div className="w-full h-full gap-4 flex flex-col justify-center items-center">
            <p className="text-4xl">You Don't in any active ride</p>
            <Button><Link to={"/driver/ride-requests"}>Please select an ride first</Link></Button>
        </div>
    )

    return (
        <div>
            <p className="text-3xl font-medium text-center">Your Current ride is here</p>
            <div className="">
                <MapContainer className="max-w-xl h-72" center={arrival} zoom={10}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    />
                    <Polyline positions={[arrival, destination]} pathOptions={{ color: "red" }} />
                </MapContainer>
            </div>
            <Stepper history={data?.data?.status} onNext={handleNext} />
        </div>
    );
};

export default CurrentRide;