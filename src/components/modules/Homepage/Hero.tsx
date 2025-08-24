import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import car from '@/assets/images/car.jpg'
import driver from '@/assets/images/driver.jpg'
import traveller from '@/assets/images/traveller.jpg'

function Hero() {
    return (
        <div className="w-full pb-20 lg:py-10">
            <div className="container mx-auto px-10 lg:px-0">
                <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
                    <div className="flex gap-4 flex-col">
                        <div>
                            {/* <Badge variant="outline">We&apos;re live!</Badge> */}
                        </div>
                        <div className="flex gap-4 flex-col">
                            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                                Ride Your Way, Anytime
                            </h1>
                            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                                Connecting riders and drivers on one seamless platform.
                                Whether you’re booking a quick trip across town or looking to earn
                                as a driver, our system makes it simple, safe, and reliable.
                                Enjoy stress-free journeys with real-time tracking, secure payments,
                                and support you can count on—every ride, every time.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Button size="lg" className="gap-4" variant="outline">
                                Jump on a call <PhoneCall className="w-4 h-4" />
                            </Button>
                            <Button size="lg" className="gap-4">
                                Sign up here <MoveRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="aspect-square">
                            <img src={car} alt="Car" className="w-full h-full object-cover rounded-md" />
                        </div>
                        <div className="row-span-2">
                            <img src={traveller} alt="Driver" className="w-full h-full object-cover rounded-md" />
                        </div>
                        <div className="aspect-square">
                            <img src={driver} alt="Driver" className="w-full h-full object-cover object-top rounded-md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Hero };
