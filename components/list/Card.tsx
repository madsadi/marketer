import {EllipsisHorizontalIcon} from "@heroicons/react/20/solid";
import {BottomSheet} from "react-spring-bottom-sheet";
import 'react-spring-bottom-sheet/dist/style.css'
import {useState} from "react";
import BottomSheetContent from "./BottomSheetContent";

export default function Card(){
    const [open,setOpen]=useState<boolean>(false)

    return(
        <div className={'flex justify-between bg-white p-2 last:border-b-0 border-b border-gray-200'}>
            <div>
                <p>محمدرضا پرتوی</p>
                <div className={'flex text-sm'}>
                    <span>
                        گردش روز گذشته :
                    </span>
                    <span className={'font-bold'}>
                        0 تومان
                    </span>
                </div>
                <div className={'flex text-sm'}>
                    <span>
                        گردش از ابتدای ماه :
                    </span>
                    <span className={'font-bold'}>
                        ۱۷،۰۰۰،۰۰۰،۰۰۰ تومان
                    </span>
                </div>
            </div>
            <div>
                <div>مشتری</div>
                <button onClick={()=>setOpen(true)}>
                    <EllipsisHorizontalIcon className={'h-4 w-4 text-gray-500'}/>
                </button>
            </div>
            <BottomSheet
                className={'bg-map bg-top bg-contain bg-no-repeat'}
                open={open}
                onDismiss={() => setOpen(false)}
                snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight]}
                skipInitialTransition={true}
            >
                <BottomSheetContent/>
            </BottomSheet>
        </div>
    )
}