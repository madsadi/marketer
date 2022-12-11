import {FunnelIcon} from "@heroicons/react/20/solid";
import Card from "./Card";

export default function ListSection(){
    return(
        <div className={'container flex flex-col grow'}>
            <div className={'flex justify-between my-5'}>
                <div className={'flex'}>
                    <span>نمایش مشتریان فعال</span>
                    <div>toggle</div>
                </div>
                <div className={'bg-fadePurple rounded-sm p-1 text-center'}>
                    <FunnelIcon className={'h-5 w-5 text-activeIcon'}/>
                </div>
            </div>
            <div className={'relative grow overflow-y-scroll'}>
                <div className={'absolute w-full'}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}