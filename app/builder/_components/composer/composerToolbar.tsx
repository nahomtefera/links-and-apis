import { Button } from "@/components/ui/button"
import { Activity, Brush, Layers, User } from "lucide-react"

const ComposerToolbar = ({handleComposerPageChange}) => {

    return (
        <div className="bg-gray-100 mx-auto rounded p-2 mb-4 flex justify-center items-center">
            <Button onClick={()=>{handleComposerPageChange("Profile")}} className="mx-1 group hover:bg-gray-800 transition-all" variant="outline" size="icon" >
                <User className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 group-hover:text-white dark:-rotate-90 dark:scale-0" />
                <span className="sr-only">Account</span>
            </Button>
            <Button onClick={()=>{handleComposerPageChange("Layers")}} className="mx-1 group hover:bg-gray-800 transition-all" variant="outline" size="icon">
                <Layers className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 group-hover:text-white dark:-rotate-90 dark:scale-0" />
                <span className="sr-only">Layers</span>
            </Button>
            <Button onClick={()=>{handleComposerPageChange("Brush")}} className="mx-1 group hover:bg-gray-800 transition-all" variant="outline" size="icon">
                <Brush className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 group-hover:text-white dark:-rotate-90 dark:scale-0" />
                <span className="sr-only">Brush</span>
            </Button>
            <Button onClick={()=>{handleComposerPageChange("Activity")}} className="mx-1 group hover:bg-gray-800 transition-all" variant="outline" size="icon">
                <Activity className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 group-hover:text-white dark:-rotate-90 dark:scale-0 " />
                <span className="sr-only">Activity</span>
            </Button>
        </div>
    )
}

export default ComposerToolbar;