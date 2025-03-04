import { IoMdBed } from "react-icons/io";
import { Button } from "../ui/button";
import Link from "next/link";


function Logo() {
  return (
    <div>
      <Button size='icon' asChild>
        <Link href='/'>
            <IoMdBed className="w-10 h-10"/>
        </Link>
      </Button>
    </div>
  )
}

export default Logo
