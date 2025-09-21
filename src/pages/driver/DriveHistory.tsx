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
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";



const DriveHistory = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data } = useGetRidesQuery({ fields: "_id,createdAt,currentStatus,distance,fare", page: currentPage });

    console.log(currentPage);

    return (
        <div>
            <h3 className="text-4xl text-center pt-6 pb-10">Your Driving history history</h3>
            <Table className="max-w-6xl mx-auto border">
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

            <Pagination className="mt-9">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                    </PaginationItem>
                    {
                        Array.from({ length: data?.data?.meta?.totalPage }, (_, index) => index + 1).map(page => (
                            <PaginationItem
                                onClick={() => setCurrentPage(page)}
                                key={page}
                                className="cursor-pointer">
                                <PaginationLink isActive={currentPage == page}>{page}</PaginationLink>
                            </PaginationItem>
                        ))
                    }
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            className={currentPage === data?.data?.meta.totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default DriveHistory;
