import PieChart from "./PieChart";
import BarChart from "./BarChart";

export default function BottomSheetContent() {
    return (
        <div className={'container pb-5'}>
            <div className={'border-r-2 border-black pr-3'}>
                محمدرضا
            </div>
            <div
                className={'flex w-full items-center rounded-full divide-x-reverse divide-x text-center overflow-hidden bg-white border border-gray-200 mt-16'}>
                <div className={'bg-activeIcon text-white grow py-1'}>
                    روز گذشته
                </div>
                <div className={'grow py-1'}>
                    ماه جاری
                </div>
                <div className={'grow py-1'}>
                    گزارش دوره ای
                </div>
            </div>
            <div className={'bg-white p-2 mt-5'}>
                <div className={'flex justify-between'}>
                    <div className={'text-gray-400'}>گردش روز گذشته</div>
                    <div>0 تومان</div>
                </div>
                <div className={'flex justify-between'}>
                    <div className={'text-gray-400'}>سود روز گذشته</div>
                    <div>0 تومان</div>
                </div>
            </div>
            <div className={'bg-white p-2 mt-5'}>
                <div className={'font-bold'}>سهم از گردش روز گذشته</div>
                <div className={'flex justify-between'}>
                    <div className={'text-gray-400'}>کل گردش روز گذشته</div>
                    <div>0 تومان</div>
                </div>
                <PieChart/>
            </div>
            <BarChart/>
        </div>
    )
}