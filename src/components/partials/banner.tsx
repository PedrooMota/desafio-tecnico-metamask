import { BannerSvg } from '@/assets/banner-svg';

interface Props {
    name: string;
    image: string;
    symbol: string
}

function WelcomeBanner({ name, symbol, image }: Props) {
    return (
        <div className="relative bg-emerald-100 dark:bg-emerald-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
            {/* Background illustration */}
            <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
                <BannerSvg />
            </div>

            {/* Content */}
            <div className="relative flex items-center gap-2">
                <img src={image} className='w-12 h-12' />
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">{name} - ({symbol && symbol.toLocaleUpperCase()})</h1>
            </div>
        </div>
    );
}

export default WelcomeBanner;