import { LuUser } from 'react-icons/lu'
import { currentUser, auth } from '@clerk/nextjs/server'
import Image from 'next/image';

async function UserIcon() { 


  const user = await currentUser() 

  const profileImage = user?.imageUrl; 

  if (profileImage){ 
    return <img src={profileImage} alt='user profile pic' className='w-6 h-6 rounded-full object-cover'></img>
  }
  return (
    <LuUser className='w-6 h-6 bg-primary rounded-full text-white'/>
  )
}

export default UserIcon