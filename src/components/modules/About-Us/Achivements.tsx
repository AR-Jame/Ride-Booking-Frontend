import award from "@/assets/images/award.jpg"
const Achivements = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Achievements</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            We're proud of the milestones we\'ve reached and the impact we\'ve made on our clients' businesses.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <img
                        src={award}
                        width="550"
                        height="310"
                        alt="Achievements"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">10+ Years in Business</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Acme Inc has been providing innovative solutions for over a decade, helping businesses of all
                                        sizes achieve their goals.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Trusted by 1,000+ Clients</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Our clients trust us to deliver exceptional results, and we're proud to have worked with over
                                        1,000 businesses across various industries.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Recognized as a Top Service Provider</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Acme Inc has been recognized as a top service provider in our industry, thanks to our commitment
                                        to excellence and innovation.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achivements;