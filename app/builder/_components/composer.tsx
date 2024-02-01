'use client'
import Profile from './composer/profile'

const Composer = ({page}:any) => {

    return(
        <div className="flex flex-wrap justify-center">
            { page.toLowerCase() === 'profile' && <Profile /> }
        </div>
    )
}

export default Composer;