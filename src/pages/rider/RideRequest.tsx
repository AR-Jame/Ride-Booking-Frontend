/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormField,
    FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useRideRequestMutation } from "@/redux/features/ride/ride.api";
import ButtonWithLoading from "@/components/ui/ButtonWIthLoading";
import { toast } from "sonner";

// ------------------ Zod Schema ------------------
const formSchema = z.object({
    arrival: z.tuple([z.number(), z.number()]),
    destination: z.tuple([z.number(), z.number()]),
});

type FormValues = z.infer<typeof formSchema>;



// ------------------ Marker Logic ------------------
function LocationPicker({
    onSelect,
}: {
    onSelect: (pos: { lat: number; lng: number }) => void;
}) {
    useMapEvents({
        click(e) {
            onSelect(e.latlng);
        },
    });
    return null;
}

export default function RideRequest() {
    const [pickup, setPickup] = useState<{ lat: number; lng: number } | null>(null);
    const [destination, setDestination] = useState<{ lat: number; lng: number; } | null>(null);

    const [rideRequest, { isLoading }] = useRideRequestMutation();

    // Initialize form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            arrival: [0, 0],
            destination: [0, 0],
        },
    });


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                setPickup({ lat, lng });
                form.setValue("arrival", [lng, lat]);
            },
            () => {
                setPickup({ lat: 23.8103, lng: 90.4125 });
                form.setValue("arrival", [90.4125, 23.8103]);
            }
        );
    }, [form]);


    const onSubmit = async (values: FormValues) => {
        try {
            const res = await rideRequest(values).unwrap();
            if (res.statusCode === 201) {
                toast.success("Ride request accepted successfully. wait for driver.")
            } else {
                toast.error(`Operation failed. message: ${res?.data?.message}`)
            }
            console.log(res.data);
        } catch (error: any) {
            console.log(error);
            toast.error(`Operation failed. message: ${error?.data?.message}`)
        }
    };

    return (
        <section className="w-full min-h-screen flex justify-center items-center p-6">
            <div className="w-full max-w-4xl space-y-6">
                <h1 className="text-3xl font-bold text-center">Request a Ride</h1>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6 bg-white shadow-xl rounded-2xl p-6"
                    >
                        {/* Pickup Card */}
                        <Card className="shadow-md">
                            <CardHeader>
                                <CardTitle>Pickup Location</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {pickup && (
                                    <div className="h-72 w-full rounded overflow-hidden">
                                        <MapContainer
                                            center={[pickup.lat, pickup.lng]}
                                            zoom={14}
                                            style={{ height: "100%", width: "100%" }}
                                        >
                                            <TileLayer
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
                                            />
                                            <LocationPicker
                                                onSelect={(pos) => {
                                                    setPickup(pos);
                                                    form.setValue("arrival", [pos.lng, pos.lat]);
                                                }}
                                            />
                                            {pickup && <Marker position={pickup} />}
                                        </MapContainer>
                                    </div>
                                )}
                                {pickup && (
                                    <p className="text-sm text-gray-600 mt-2">
                                        Selected Pickup: {pickup.lat.toFixed(5)},{" "}
                                        {pickup.lng.toFixed(5)}
                                    </p>
                                )}
                                <FormField
                                    control={form.control}
                                    name="arrival"
                                    render={() => <FormMessage />}
                                />
                            </CardContent>
                        </Card>

                        {/* Destination Card */}
                        <Card className="shadow-md">
                            <CardHeader>
                                <CardTitle>Destination Location</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-72 w-full rounded overflow-hidden">
                                    <MapContainer
                                        center={
                                            destination
                                                ? [destination.lat, destination.lng]
                                                : pickup
                                                    ? [pickup.lat, pickup.lng]
                                                    : [23.8103, 90.4125]
                                        }
                                        zoom={13}
                                        style={{ height: "100%", width: "100%" }}
                                    >
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
                                        />
                                        <LocationPicker
                                            onSelect={(pos) => {
                                                setDestination(pos);
                                                form.setValue("destination", [pos.lng, pos.lat]);
                                            }}
                                        />
                                        {destination && <Marker position={destination} />}
                                    </MapContainer>
                                </div>
                                {destination && (
                                    <p className="text-sm text-gray-600 mt-2">
                                        Selected Destination: {destination.lat.toFixed(5)},{" "}
                                        {destination.lng.toFixed(5)}
                                    </p>
                                )}
                                <FormField
                                    control={form.control}
                                    name="destination"
                                    render={() => <FormMessage />}
                                />
                            </CardContent>
                        </Card>

                        <div className="flex justify-center">
                            <ButtonWithLoading
                                fullWidth={true}
                                isLoading={isLoading}
                                type="submit"
                                text="Confirm Ride Request"
                            />
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
}
