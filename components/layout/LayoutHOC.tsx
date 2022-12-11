import SideBar from "./SideBar";
import Navigation from "./Navigation";
import TopScreen from "./TopScreen";

export default function LayoutHOC({children}:{children:any}){
    return(
        <div className={'flex flex-col grow h-screen bg-map bg-top bg-contain bg-no-repeat'}>
            <SideBar/>
            <TopScreen/>
            <div className={'space-y-2 flex flex-col grow overflow-y-auto custom-scrollbar pb-[50px]'}>
                {children}
            </div>
            <Navigation/>
        </div>
    )
}