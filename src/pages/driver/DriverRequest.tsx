import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDriverRequestMutation } from "@/redux/features/driver/driver.api"
import { toast } from "sonner"
import { useNavigate } from "react-router"
import ButtonWithLoading from "@/components/ui/ButtonWIthLoading"


const driverSchema = z.object({
    drivingLicense: z.string().min(5, { message: "drivingLicense must be at least 5 characters." }),
    vehicleBrand: z.string().min(5, { message: "vehicleBrand must be at least 5 characters." }),
    vehicleModel: z.string().min(5, { message: "vehicleModel must be at least 5 characters." }),
    vehicleLicense: z.string().min(5, { message: "vehicleLicense must be at least 5 characters." }),
})

export function DriverRequest({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const [driverRequest, { isLoading }] = useDriverRequestMutation();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof driverSchema>>({
        resolver: zodResolver(driverSchema),
        defaultValues: {
            drivingLicense: "",
            vehicleBrand: "",
            vehicleModel: "",
            vehicleLicense: "",
        }

    });

    const onSubmit = async (data: z.infer<typeof driverSchema>) => {
        const driverInfo = {
            drivingLicense: data.drivingLicense,
            vehicle: {
                vehicleBrand: data.vehicleBrand,
                vehicleModel: data.vehicleModel,
                vehicleLicense: data.vehicleLicense,
            },
            availability: true
        }
        try {
            const data = await driverRequest(driverInfo).unwrap();
            console.log(data);
            if (data.statusCode === 201) {
                toast.success("Driver request received successfully.")
                navigate("/")
            }
            else {
                toast.error("We got an invalid request")
            }
        } catch (error) {
            console.log(error);
            toast.error("This user already exists in our driver database")
        }
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className={cn("flex flex-col gap-6", className)} {...props}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center text-xl">Request to be a driver</CardTitle>
                            <CardDescription className="text-center">
                                Enter your information to request as driver
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="drivingLicense"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Driving License</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your driving license" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="vehicleBrand"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Vehicle Brand</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your Vehicle Brand" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="vehicleModel"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Vehicle Model</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your Vehicle Model" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="vehicleLicense"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Vehicle License</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter your Vehicle License" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <ButtonWithLoading
                                        isLoading={isLoading}
                                        fullWidth={true}
                                        type="submit"
                                    />
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
