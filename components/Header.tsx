import NavWidget from './NavWidget';

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <h1 className='text-xl font-bold'>Payment Accounting</h1>
      <NavWidget />
    </header>
  );
}
