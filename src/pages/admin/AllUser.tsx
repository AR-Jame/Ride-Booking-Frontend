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
import { Link } from "react-router";
import { useAllUserQuery } from "@/redux/features/user/user.api";
const AllUser = () => {
    const { data } = useAllUserQuery(undefined);
    console.log(data);
    return (
        <div>
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
                            data?.data?.map((ride: any, idx: number) => (
                                <TableRow key={idx} className="cursor-pointer">
                                    <TableCell className="font-medium">{idx + 1}</TableCell>
                                    <TableCell>{ride.createdAt}</TableCell>
                                    <TableCell>{ride.isActive}</TableCell>
                                    <TableCell>{ride.distance} KM</TableCell>
                                    <TableCell>{ride.fare}</TableCell>
                                    <TableCell className="text-right"><Button size={"sm"}><Link to={`/rider/rides/${ride._id}`}>Details</Link></Button></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>

                {/* <Pagination className="mt-9">
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
                </Pagination> */}
            </div>
        </div>
    );
};




// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";
// import { useAllUserQuery, useDeleteUserMutation, useUpdateProfileMutation } from "@/redux/features/user/user.api";
// import { useState } from "react";
// import { toast } from "sonner";

// const AllUser = () => {
//     const [search, setSearch] = useState("");
//     const [roleFilter, setRoleFilter] = useState("");
//     const [page, setPage] = useState(1);

//     const { data, isLoading, error } = useAllUserQuery({
//         searchTerm: search,
//         role: roleFilter === "all" ? "" : roleFilter,
//         page,
//         limit: 10,
//     });

//     const [deleteUser] = useDeleteUserMutation();
//     const [updateActiveStatus] = useUpdateProfileMutation();

//     const users = data?.data || [];
//     const meta = data?.meta;

//     const handleDelete = async (id: string) => {
//         console.log("handle delete clicked", id);
//         try {
//             await deleteUser(id);
//             toast.success("User deleted successfully");
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleBlockUnblock = async (id: string, currentStatus: string) => {
//         const newStatus = currentStatus === "active" ? "blocked" : "active";

//         const updateStatus = { id, status: newStatus };

//         try {
//             await updateActiveStatus(updateStatus).unwrap();
//         } catch (err) {
//             console.error("Failed to update status:", err);
//         }
//     };

//     if (isLoading)
//         return <Skeleton className="h-5 w-[100px] rounded-full" />;
//     if (error) return <p className="text-red-500">Failed to load users</p>;

//     return (
//         <div className="space-y-4 border p-4 rounded-xl">
//             {/* Search + Filter */}
//             <div className="flex items-center justify-between gap-4">
//                 <Input
//                     placeholder="Search by name or email..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className="w-1/3"
//                 />
//                 <Select
//                     value={roleFilter}
//                     onValueChange={(value) => setRoleFilter(value)}
//                 >
//                     <SelectTrigger className="w-[180px]">
//                         <SelectValue placeholder="Filter by role" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="all">All</SelectItem>
//                         <SelectItem value="admin">Admin</SelectItem>
//                         <SelectItem value="driver">Driver</SelectItem>
//                         <SelectItem value="rider">Rider</SelectItem>
//                     </SelectContent>
//                 </Select>
//             </div>

//             {/* Users Table */}
//             <Table>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Serial</TableHead>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Role</TableHead>
//                         <TableHead>Status</TableHead>
//                         <TableHead>Created At</TableHead>
//                         <TableHead>Actions</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {users.map((user: any, index: number) => (
//                         <TableRow key={user._id}>
//                             <TableCell>{index + 1}</TableCell>
//                             <TableCell>{user.name}</TableCell>
//                             <TableCell>{user.email}</TableCell>
//                             <TableCell className="capitalize">{user.role}</TableCell>
//                             <TableCell>
//                                 <span
//                                     className={`px-2 py-1 rounded text-xs ${user.status === "active"
//                                         ? "bg-green-100 text-green-700"
//                                         : "bg-red-100 text-red-700"
//                                         }`}
//                                 >
//                                     {user.status}
//                                 </span>
//                             </TableCell>
//                             <TableCell>
//                                 {new Date(user.createdAt).toLocaleDateString()}
//                             </TableCell>
//                             <TableCell className="flex gap-2">
//                                 <AlertDialog>
//                                     <AlertDialogTrigger asChild>
//                                         <Button
//                                             size="sm"
//                                             variant={
//                                                 user.status === "active" ? "destructive" : "default"
//                                             }
//                                         >
//                                             {user.status === "active" ? "Block" : "Unblock"}
//                                         </Button>
//                                     </AlertDialogTrigger>
//                                     <AlertDialogContent>
//                                         <AlertDialogHeader>
//                                             <AlertDialogTitle>
//                                                 {user.status === "active"
//                                                     ? "Block this user?"
//                                                     : "Unblock this user?"}
//                                             </AlertDialogTitle>
//                                             <AlertDialogDescription>
//                                                 {user.status === "active"
//                                                     ? "This will prevent the user from accessing the system."
//                                                     : "This will allow the user to access the system again."}
//                                             </AlertDialogDescription>
//                                         </AlertDialogHeader>
//                                         <AlertDialogFooter>
//                                             <AlertDialogCancel>Cancel</AlertDialogCancel>
//                                             <AlertDialogAction
//                                                 onClick={() =>
//                                                     handleBlockUnblock(user?._id, user?.status)
//                                                 }
//                                             >
//                                                 {user.status === "active"
//                                                     ? "Confirm Block"
//                                                     : "Confirm Unblock"}
//                                             </AlertDialogAction>
//                                         </AlertDialogFooter>
//                                     </AlertDialogContent>
//                                 </AlertDialog>

//                                 {/* <DeleteConfirmation
//                   onConfirm={() => {
//                     handleDelete(user?._id);
//                   }}
//                 >
//                   <Button
//                     size="sm"
//                     variant="destructive"
//                     className="cursor-pointer"
//                   >
//                     Delete
//                   </Button>
//                 </DeleteConfirmation> */}
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>

//             {/* Pagination */}
//             <div className="flex justify-between items-center pt-4">
//                 <Button
//                     size="sm"
//                     variant="outline"
//                     disabled={page === 1}
//                     onClick={() => setPage((p) => p - 1)}
//                 >
//                     Previous
//                 </Button>
//                 <p>
//                     Page {meta?.page} of {meta?.totalPage}
//                 </p>
//                 <Button
//                     size="sm"
//                     variant="outline"
//                     disabled={page === meta?.totalPage}
//                     onClick={() => setPage((p) => p + 1)}
//                 >
//                     Next
//                 </Button>
//             </div>
//         </div>
//     );
// }

export default AllUser;