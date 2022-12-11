import {EllipsisHorizontalIcon} from "@heroicons/react/20/solid";
import {useState} from "react";
import Modal from "./Modal";
import DetailModal from "./DetailModal";

export default function TransactionCard(){
    const [open,setOpen]=useState(false);
    const [openDetail,setOpenDetail]=useState(false);

    return(
        <div className={'bg-white last:border-b-0 border-b border-gray-20 p-2'}>
            <div className={'flex justify-between mb-3'}>
                <span>شهریور 1400</span>
                <button className={'bg-gray-300 px-1 rounded text-sm'} onClick={()=>setOpen(true)}>
                    تایید و درخواست
                </button>
            </div>
            <div className={'flex justify-between items-center text-sm'}>
                <div>
                    <div className={'flex'}>
                        <span className={'text-gray-400 ml-2'}>گردش ثبت شده :</span>
                        <span className={'font-bold'}>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</span>
                    </div>
                    <div className={'flex'}>
                        <span className={'text-gray-400 ml-2'}>سود خالص ماه :</span>
                        <span className={'font-bold'}>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</span>
                    </div>
                </div>
                <button onClick={()=>setOpenDetail(true)}>
                    <EllipsisHorizontalIcon className={'h-4 w-4 text-gray-500'}/>
                </button>
            </div>
            <Modal title={'درخواست پرداخت'} open={open} setOpen={setOpen}>
                <h1 className={'text-xl my-3'}>
                    شما درخواست پرداخت سود شهریور ماه ۱۴۰۰ را دارید
                </h1>
                <button className={'bg-gray-500 text-white w-full py-2'}>تایید میکنم</button>
                <button className={'w-full py-2'}>مشاهده جزییات</button>
            </Modal>
            <DetailModal setOpen={setOpenDetail} open={openDetail} title={'شهریور 1400'}>
                <div className={'bg-white divide-y pb-1'}>
                    <div className={'p-2'}>
                        <div className={'flex justify-between'}>
                            <span>گردش ثبت شده</span>
                            <span>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</span>
                        </div>
                        <div className={'flex justify-between'}>
                            <span className={'whitespace-pre'}>کل سود ثبت شده شهریور (پلن یاقوت)</span>
                            <span className={'whitespace-nowrap'}>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</span>
                        </div>
                        <div className={'flex justify-between'}>
                            <span>بستانکاری حسن انجام کار تیر ۱۴۰۰</span>
                            <span>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</span>
                        </div>
                    </div>
                    <div className={'p-2'}>
                        <div className={'flex justify-between'}>
                            <span className={'text-red-600'}>کسر حسن انجام کار</span>
                            <span>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</span>
                        </div>
                        <div className={'flex justify-between'}>
                            <span className={'text-red-600'}>۱۰ درصد کسورات قانونی</span>
                            <span>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</span>
                        </div>
                    </div>
                    <div className={'p-2'}>
                        <div className={'flex justify-between'}>
                            <span>سود ناخالص ماه</span>
                            <span>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</span>
                        </div>
                        <div className={'flex justify-between'}>
                            <span className={'text-red-600'}>۳۰ درصد حق بیمه</span>
                            <span>۱۷،۱۲۰،۵۰۰،۰۰۰ تومان</span>
                        </div>
                    </div>
                    <div className={'bg-gray-400 flex justify-between py-3 px-2'}>
                        <span>سود خالص ماه</span>
                        <span>۶۶،۱۵۱،۸۵۹ تومان</span>
                    </div>
                </div>
                <div className={'h-10 torn relative bg-white'}>
                    <span className={'absolute top-1/2 -translate-y-1/2 border border-dashed border-gray-500 w-full right-[20px]'}>

                    </span>
                </div>
                <div className={'bg-white p-2 pt-0'}>
                    <button className={'bg-gray-500 text-white rounded p-1 px-3'}>
                        تایید مبلغ سود و درخواست پرداخت
                    </button>
                </div>
            </DetailModal>
        </div>
    )
}