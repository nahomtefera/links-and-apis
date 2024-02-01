import { Button } from "@/components/ui/button"
import { Activity, Brush, Layers, User, Menu } from "lucide-react"

const ComposerToolbar = ({handleComposerPageChange}:any) => {

    return (
        <div className="bg-gray-100 dark:bg-gray-700 mx-auto rounded p-2 mb-2 flex justify-center items-center">
            <Button data-ui="active" onClick={()=>{handleComposerPageChange("Profile")}} 
                className="mx-1 group active:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-900 transition-all" variant="outline" size="icon" 
            >    
                <User className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 group-hover:text-white dark:text-white" />
                <span className="sr-only">Account</span>
            </Button>
            <Button onClick={()=>{handleComposerPageChange("Layers")}} 
                className="mx-1 group dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-900 transition-all" variant="outline" size="icon"
            >    
                <Layers className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 group-hover:text-white dark:text-white" />
                <span className="sr-only">Layers</span>
            </Button>
            <Button onClick={()=>{handleComposerPageChange("Brush")}} 
                className="mx-1 group dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-900 transition-all" variant="outline" size="icon"
            >    
                <Brush className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 group-hover:text-white dark:text-white" />
                <span className="sr-only">Brush</span>
            </Button>
            <Button onClick={()=>{handleComposerPageChange("Activity")}} 
                className="mx-1 group dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-900 transition-all" variant="outline" size="icon"
            >    
                <Activity className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 group-hover:text-white dark:text-white " />
                <span className="sr-only">Activity</span>
            </Button>
            <Button onClick={()=>{handleComposerPageChange("Menu")}} 
                className="mx-1 group dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-900 transition-all" variant="outline" size="icon"
            >    
                <Menu className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 group-hover:text-white dark:text-white " />
                <span className="sr-only">Activity</span>
            </Button>
        </div>
    )
}

export default ComposerToolbar;