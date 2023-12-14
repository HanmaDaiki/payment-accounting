import NavWidget from './NavWidget';

export default function Header() {
  return (
    <header className='flex items-center justify-between pb-10'>
      <h1 className='text-xl font-bold'>Учет оплаты услуг</h1>
      <NavWidget />
    </header>
  );
}
