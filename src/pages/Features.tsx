import { ArrowUpRight } from "lucide-react";
import travaller from "@/assets/images/traveller.jpg"
import journey from "@/assets/images/journey.jpg"
import car from "@/assets/images/car.jpg"
import driver from "@/assets/images/driver.jpg"
import travel from "@/assets/images/travel.jpg"
import { Card, CardContent } from "@/components/ui/card";

type ServiceProps = {
    title: string;
    image: string;
    url: string;
};

const services: ServiceProps[] = [
    {
        title: "SAFE",
        image: travel,
        url: "",
    },
    {
        title: "FAST",
        image: travaller,
        url: "",
    },
    {
        title: "EASY TO USE",
        image: journey,
        url: "",
    },
    {
        title: "TRUST",
        image: car,
        url: "",
    },
    {
        title: "LOYALITY",
        image: driver,
        url: "",
    },
];

const Features = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-3">
                <div className="flex flex-col justify-between lg:col-span-1">
                    <div>
                        <h2 className="text-foreground mb-4 text-4xl font-medium md:text-6xl">
                            Featured Services
                        </h2>
                        <p className="text-muted-foreground w-72 text-base tracking-tight">
                            We offer comprehensive digital solutions to help your business
                            grow. From web development to mobile apps, we deliver quality
                            results that exceed expectations.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
                    {/* Featured Services - First 2 */}
                    {services.slice(0, 2).map((service, idx) => (
                        <a
                            key={idx}
                            href={service.url}
                            className="group block overflow-hidden rounded-xl"
                        >
                            <Card className="relative aspect-[3/4] overflow-hidden p-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                                    <div className="pr-4 font-semibold text-white">
                                        {service.title}
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}

                    {/* Secondary Services - Remaining 3 */}
                    <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {services.slice(2).map((service, idx) => (
                            <a
                                key={idx + 2}
                                href={service.url}
                                className="group block overflow-hidden rounded-xl"
                            >
                                <Card className="relative aspect-[4/3] overflow-hidden p-0">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <CardContent className="absolute inset-0 flex flex-col justify-start p-4">
                                        <div className="pr-4 text-sm font-semibold text-white">
                                            {service.title}
                                        </div>
                                    </CardContent>
                                    <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white transition-transform group-hover:scale-110" />
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Features };
