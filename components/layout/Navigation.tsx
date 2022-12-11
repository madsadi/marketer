import {QueueListIcon, PresentationChartLineIcon, WalletIcon, GlobeAltIcon} from '@heroicons/react/24/outline';
import {useRouter} from "next/router";
import Link from "next/link";

export default function Navigation() {
    const router = useRouter()
    const pages = [
        {
            id: 1,
            title: 'لیست',
            icon: <QueueListIcon className={'w-5 h-5'}/>,
            link: '/'
        },
        {
            id: 2,
            title: 'گزارشات',
            icon: <PresentationChartLineIcon className={'w-5 h-5'}/>,
            link: '/reports'
        },
        {
            id: 3,
            title: 'کیف پول',
            icon: <WalletIcon className={'w-5 h-5'}/>,
            link: '/wallet'
        },
        {
            id: 4,
            title: 'درباره شعبه',
            icon: <GlobeAltIcon className={'w-5 h-5'}/>,
            link: '/about'
        },
    ]

    return (
        <div className={'fixed bottom-3 w-full right-0 container'}>
            <div className={'flex space-x-reverse space-x-3'}>
                {pages.map((page: any) => {
                    return (
                        <Link href={page.link} key={page.id}>
                            <a className={`flex grow text-center items-center transition-all p-1 space-x-reverse space-x-2 ${router.pathname === page.link ? 'bg-white rounded-full shadow-md text-activeIcon' : 'opacity-50'}`}>
                                <span className={'mx-auto flex'}>
                                    <span className={`${router.pathname === page.link ? '' : 'mx-auto'}`}>
                                    {page.icon}
                                    </span>
                                    {router.pathname === page.link && <span>
                                    {page.title}
                                    </span>}
                                </span>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}