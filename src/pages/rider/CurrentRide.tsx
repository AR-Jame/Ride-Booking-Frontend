import Driver from "@/components/modules/Rider/CurrentRide/Driver";
import RideMap from "@/components/modules/Rider/CurrentRide/RideMap";
import { useCurrentRideQuery } from "@/redux/features/ride/ride.api";

const CurrentRide = () => {
    const { data } = useCurrentRideQuery(undefined);
    console.log(data);
    if (data?.data === null) {
        return (
            <h1 className="h-full flex justify-center items-center font-semibold text-6xl">You currently don't in any ride.</h1>
        )
    }
    return (
        <div className="w-full h-full grid grid-cols-3">
            <div className="border h-full w-full col-span-2">
                <div>
                    <RideMap data={data?.data?.destination} />
                </div>
                <div>

                </div>
            </div>
            <div className="border h-full w-full">
                {
                    data?.data?.driver ?
                        < Driver driverData={data?.data?.driver} />
                        :
                        <h5 className="text-5xl font-medium text-center">No driver selected.</h5>
                }
            </div>
        </div>
    );
};

export default CurrentRide;