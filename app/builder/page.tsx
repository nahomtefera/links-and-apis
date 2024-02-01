'use client'

import Footer from "@/components/ui/footer";
import Composer from "./_components/composer";
import Preview from "./_components/preview";
import ComposerToolbar from './_components/composer/composerToolbar';
import { useState } from "react";

const BuilderPage = () => {
  const [composerPage, setComposerPage] = useState("profile")

  const handleComposerPageChange = (pageName:string) => {
      console.log(`going to ${pageName}`)
      setComposerPage(pageName)
  }

  return ( 
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <div className="w-full">
          <div className="flex">
              <div className="w-1/2 px-4 flex items-center justify-center"> 
                  <Composer page={composerPage} />
              </div>
              <div className="w-1/2 flex items-center justify-center border-l border-l-gray-100 dark:border-l-gray-900"> 
                  <Preview />
              </div>
          </div>
        </div>
      </div>

      <ComposerToolbar handleComposerPageChange={handleComposerPageChange}/>

      <Footer />
    </div>
   );
}
 
export default BuilderPage;
