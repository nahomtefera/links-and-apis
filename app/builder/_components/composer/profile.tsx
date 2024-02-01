'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Image } from "lucide-react"

const Profile = () => {



    return (
        <div className="w-full flex flex-wrap slide-down">
            <div className="grid text-left w-full max-w-sm items-center gap-2 mb-8">
                <span className="text-left text-xs font-semibold">Image</span>
                <div className="flex max-w-sm items-center gap-3">
                    <Button className="flex justify-center items-center aspect-square h-16 w-16 rounded group dark:bg-gray-700 bg-gray-50 hover:bg-gray-700 transition-all" variant="outline" size="icon">
                        <Image className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-gray-600 dark:text-gray-100 group-hover:text-white" />
                    </Button>
                    <Button className="flex justify-center items-center aspect-square h-16 w-full rounded group dark:bg-gray-700 bg-gray-50 hover:bg-gray-700 transition-all" variant="outline" size="icon">
                        <Image className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-gray-600 dark:text-gray-100 group-hover:text-white" />
                    </Button>
                </div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-2">
                <span className="text-left text-xs font-semibold">About</span>
                <Input className="text-xs" type="name" id="name" placeholder="Name" />
                <Textarea className="text-xs" type="description" id="description" placeholder="Description" />
                {/* <Input className="text-xs" type="description" id="description" placeholder="Description" /> */}
                <br />
                <span className="text-left text-xs font-semibold">Site</span>
                <Input className="text-xs" type="url" id="url" placeholder="url" />
                <Input className="text-xs" type="watermark" id="watermark" placeholder="show watermark" />
            </div>
        </div>
    )
}

export default Profile;