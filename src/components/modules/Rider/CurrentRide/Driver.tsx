/* eslint-disable @typescript-eslint/no-explicit-any */
import { Car } from "lucide-react";

const Driver = ({ driverData }: any) => {
    console.log(driverData);
    return (
        <div className="p-5">
            <p className="font-medium text-2xl flex items-center gap-1"> <Car /> Vehicle Info:</p>
            <p>Brand: {driverData.vehicle.vehicleBrand}</p>
            <p>Model: {driverData.vehicle.vehicleModel}</p>
            <p>License: {driverData.vehicle.vehicleLicense}</p>
        </div>
    );
};

export default Driver;