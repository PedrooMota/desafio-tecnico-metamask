import { Logo } from './logo';
import { Separator } from '../ui/separator';
import { ThemeSwitcher } from './theme-switcher';

export default function Header() {

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          <div className="flex items-center space-x-3">

            <Logo />

            <Separator orientation="vertical" className="h-6" />

            <nav className="flex items-center space-x-2 lg:space-x-3">
              <a href="/" className='flex h-16 items-center border-b-2 border-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-emerald-500 data-[current=true]:border-blue-400 data-[current=true]:text-accent-foreground'>
                Mercado
              </a>
            </nav>

            <Separator orientation="vertical" className="h-6" />
          </div>

          <div className="ml-auto flex">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}