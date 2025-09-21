import { useDriverEarningQuery } from "@/redux/features/driver/driver.api";

const Earning = () => {
    const { data, isLoading } = useDriverEarningQuery({ time: "monthly" })
    console.log(data);
    return (
        <div>

        </div>
    );
};

export default Earning;