export default function TopScreen(){
    return(
        <div className={'w-full bg-transparent max-h-[150px] container py-2'}>
             <div>سیمین سرمدی</div>
             <div className={'font-bold text-xl mt-2'}>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</div>
            <div className={'text-xs opacity-50'}>( گردش ثبت شده از ابتدای ماه )</div>
            <div className={'flex items-center'}>
                <div className={'h-3 w-3 rounded-full bg-red-700 ml-2'}/>
                <div>
                    پلن یاقوت
                </div>
            </div>
        </div>
    )
}