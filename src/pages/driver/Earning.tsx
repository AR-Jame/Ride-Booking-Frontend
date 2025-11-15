import { useDriverEarningQuery } from "@/redux/features/driver/driver.api";

const Earning = () => {
    const { data } = useDriverEarningQuery({ time: "monthly" })
    console.log(data);
    return (
        <div>

        </div>
    );
};

export default Earning;