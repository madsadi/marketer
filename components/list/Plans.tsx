export default function Plans() {
    const planOptions = [
        {
            id: 1,
            title: 'پلن مرواید',
            color: 'bg-white',
            value: '0 %',
            minRange: 0,
            maxRange: 5,
        },
        {
            id: 2,
            title: 'پلن فیروزه',
            color: 'bg-sky-500',
            value: '15 %',
            minRange: 5,
            maxRange: 10,
        },
        {
            id: 3,
            title: 'پلن عقیق',
            color: 'bg-amber-800',
            value: '20 %',
            minRange: 10,
            maxRange: 15,
        },
        {
            id: 4,
            title: 'پلن یاقوت',
            color: 'bg-red-500',
            value: '25 %',
            minRange: 15,
            maxRange: 20,
        },
        {
            id: 5,
            title: 'پلن زمرد',
            color: 'bg-green-500',
            value: '30 %',
            minRange: 20,
            maxRange: 30,
        },
        {
            id: 6,
            title: 'پلن الماس',
            color: null,
            icon: 'diamond',
            value: '35 %',
            minRange: 30,
            maxRange: null,
        }
    ]
    return (
        <div className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-auto custom-scrollbar">
            {/* Replace with your content */}
            <div className="absolute inset-0 px-4 sm:px-6">
                <div className="h-full space-y-3"
                     aria-hidden="true">
                    {planOptions.map((plan: any) => {
                        return (
                            <div key={plan.id} className={'rounded-lg bg-palePurple p-2 '}>
                                <div className={'flex justify-between'}>
                                    <div className={'flex items-center'}>
                                        {plan.color ? <div className={`h-4 w-4 rounded-full ${plan.color} ml-3`}/>:
                                            <img src="/diamond.svg" className={'w-4 h-4 ml-3'} alt="diamond"/>}
                                        <div>
                                            {plan.title}
                                        </div>
                                    </div>
                                    <div className={'bg-white rounded p-1 text-black text-center'}>
                                        {plan.value}
                                    </div>
                                </div>
                                <div className={'relative bg-gray-500 rounded p-1 w-full my-2'}>

                                </div>
                                <div className={'justify-between flex text-sm'}>
                                    <span>{plan.minRange} میلیارد تومان</span>
                                    {plan.maxRange ? <span>{plan.maxRange} میلیارد تومان</span>:<span>بدون محدودیت</span>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* /End replace */}
        </div>
    )
}