import React from 'react'
import { Button } from '../ui/button'
import { AvatarImage, Avatar, AvatarFallback } from '../ui/avatar';
import { FaUser } from 'react-icons/fa';
import { currentUser } from '@/lib/current-user-server';
import Link from 'next/link';

export default async function UserProfileButton() {

    const user = await currentUser();
  return (
    <Link href={'/me'}>
      <Button className='w-8 h-8 rounded-[50%]'>
        <Avatar>
          <AvatarImage src={user?.image || ""} className="rounded" />
          <AvatarFallback className="bg-gray-800">
            <FaUser className="h-8 w-8 bg-sky-500/30 rounded-[50%] p-2" />
          </AvatarFallback>
        </Avatar>
      </Button>
    </Link>
  );
}
