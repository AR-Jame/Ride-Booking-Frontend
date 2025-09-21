import { useRideDetailsQuery } from "@/redux/features/ride/ride.api";
import { useParams } from "react-router";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import { MapPin } from "lucide-react";
import Map from "@/components/modules/Rider/Map";
import { format } from "date-fns";
import {
    Timeline,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline"
import { useDriverDetailsQuery } from "@/redux/features/driver/driver.api";

const RideDetails = () => {

    const { id } = useParams();
    console.log(id);
    const { data, isLoading } = useRideDetailsQuery({ _id: id });
    console.log(data);
    const { data: driverData, isLoading: driverLoading } = useDriverDetailsQuery({ user: data?.data?.driver }, { skip: !data })
    console.log(driverData);
    if (isLoading || driverLoading) return <p>loading</p>

    const driver = driverData?.data?.[0];
    const destination: LatLngExpression = [data?.data?.destination[1], data?.data?.destination[0]];
    const arrival: LatLngExpression = [data?.data?.arrival[1], data?.data?.arrival[0]]
    return (
        <div>
            {/* Map */}
            <div className="grid grid-cols-3 gap-3">
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
            {/* Timestamps */}
            <div className="mt-10">
                <p className="font-semibold text-2xl my-2">Activity timeline</p>
                <Timeline defaultValue={3} orientation="horizontal">
                    {data.data.status.map((item: { status: string; at: Date }, idx: number) => (
                        <TimelineItem key={idx} step={idx}>
                            <TimelineHeader>
                                <TimelineSeparator />
                                <TimelineTitle>{item.status}</TimelineTitle>
                                <TimelineDate>{format(item.at, "PPpp")}</TimelineDate>
                                <TimelineIndicator />
                            </TimelineHeader>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>

            <div className="mt-10 flex items-start gap-20">
                <div>
                    <p className="font-semibold text-xl">Driver Info </p>
                    <p>Driving: {driver?.user?.name}</p>
                    <p>Driving: {driver?.user?.email}</p>
                    <p>Driving License: {driver?.drivingLicense}</p>
                </div>
                <div>
                    <p className="font-semibold text-xl">Car Info</p>
                    <p>Brand: {driver?.vehicle?.vehicleBrand}</p>
                    <p>Model: {driver?.vehicle?.vehicleModel}</p>
                    <p>License: {driver?.vehicle?.vehicleLicense}</p>
                </div>
                <div>
                    <p className="font-semibold text-xl">Ride Info </p>
                    <p>Fare: {data?.data?.fare} Tk</p>
                    <p>Distance: {data?.data?.distance} km</p>
                    <p>Current Status: {data?.data?.currentStatus}</p>

                </div>
            </div>
        </div>
    );
};

export default RideDetails;