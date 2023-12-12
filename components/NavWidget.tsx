'use client';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1'>
          {session.user?.image && (
            <Image src={session.user?.image} alt='avatar' width={40} height={40} className='rounded-full' />
          )}
          <span className='text-sm font-bold'>{session.user?.name}</span>
        </div>
        <br />
        <button
          onClick={() => signOut()}
          className='rounded text-sm bg-blue-500 p-2 text-white hover:bg-blue-600 focus:bg-blue-700'
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => signIn()}
        className='rounded text-sm bg-blue-500 p-2 text-white hover:bg-blue-600 focus:bg-blue-700'
      >
        Sign in
      </button>
    </>
  );
}

export default function NavWidget() {
  return (
    <div className='flex items-center gap-[2.5rem]'>
      <AuthButton />
    </div>
  );
}
