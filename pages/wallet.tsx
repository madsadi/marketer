import TransactionCard from "../components/wallet/TransactionCard";

export default function Wallet() {
    return (
        <div className={'container flex flex-col grow'}>
            <div className={'flex justify-between bg-white p-1 my-5 rounded'}>
                <div className={'flex'}>
                    <img src="/logo.svg" className={'h-5 w-5 ml-2'} alt="bank"/>
                    <span>بلو بانک - سامان</span>
                </div>
                <div>
                    1234-4567-8975-3246
                </div>
            </div>
            <div className={'flex justify-between mb-4'}>
                <div className={'flex'}>
                    <input type={'radio'} name={'all'}/>
                    <label htmlFor="all">همه</label>
                </div>
                <div className={'flex'}>
                    <input type={'radio'} name={'paid'}/>
                    <label htmlFor="paid">پرداخت شده</label>
                </div>
                <div className={'flex'}>
                    <input type={'radio'} name={'unpaid'}/>
                    <label htmlFor="unpaid">پرداخت نشده</label>
                </div>
            </div>
            <div className={'relative grow overflow-y-scroll'}>
                <div className={'absolute w-full'}>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                </div>
            </div>
        </div>
    )
}