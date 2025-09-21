/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetRidesQuery } from "@/redux/features/ride/ride.api";
import { Link } from "react-router";

const Rides = () => {

    const { data } = useGetRidesQuery({ fields: "_id,createdAt,currentStatus,distance,fare" });

    console.log(data);

    return (
        <div>
            <h3 className="text-4xl text-center pt-6 pb-10">Your Ride history</h3>
            <Table className="max-w-6xl mx-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Serial</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Distance</TableHead>
                        <TableHead>Fare</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.data?.data?.map((ride: any, idx: number) => (
                            <TableRow key={idx} className="cursor-pointer">
                                <TableCell className="font-medium">{idx + 1}</TableCell>
                                <TableCell>{ride.createdAt}</TableCell>
                                <TableCell>{ride.currentStatus}</TableCell>
                                <TableCell>{ride.distance} KM</TableCell>
                                <TableCell>{ride.fare}</TableCell>
                                <TableCell className="text-right"><Button size={"sm"}><Link to={`/rider/rides/${ride._id}`}>Details</Link></Button></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default Rides;