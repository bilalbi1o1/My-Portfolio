import Link from 'next/link';
import  {Button} from './ui/button';

//Components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className='container mx-auto max-xl:justify-between flex items-center'>
        {/* logo */}
        <Link href="/">
          <h1 classname="text-4xl font-semibold">
            Bilal
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav*/}
        <div className="hidden xl:flex  gap-8 mx-auto">
        <Nav />  
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header