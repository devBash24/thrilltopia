import { useRouter } from "next/navigation"
import { MouseEvent } from "react"


interface IRouteChange {
    event?: MouseEvent<HTMLButtonElement>
    options:{
        location?: string
        action: "push" | "replace" | "reload"
    }
}



export const useCNavigation = () => {
    const router = useRouter()

    const onRouteChange = ({event, options}: IRouteChange) => {
        if(event){
            event.preventDefault()
        }

        if(options.location && options.action === "push"){
            router.push(options.location)
        }
        if(options.location && options.action === "replace"){
            router.replace(options.location)
        }
        if(options.action === "reload"){
            router.refresh()
        }
        
    }

    return { onRouteChange } 
}
