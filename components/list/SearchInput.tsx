import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";

export default function SearchInput(){
    return(
        <div className={'container mt-2'}>
            <div className={'relative w-full'}>
                <input type="text" dir={'rtl'} className={'bg-white p-1 px-2 rounded-full w-full placeholder:text-sm'} placeholder={'جستجو مشتری'}/>
                <MagnifyingGlassIcon className={'absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500'}/>
            </div>
        </div>
    )
}