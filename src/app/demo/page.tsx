import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,

  } from "@/components/ui/navigation-menu"
import Link from "next/link"
  

export default function Demo() {
  return (

	<header className="border-b py-4">
        <div className="sm:items-centerm mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:px-6 md:flex-nowrap lg:px-8">
            
                <h1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">Your Next Store</h1>
            

            <div className="sm:mr-auto">
                <NavigationMenu >
                    <NavigationMenuList>
                            <NavigationMenuItem >
                                <NavigationMenuLink >
                                    sss
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem >
                                <NavigationMenuLink >
                                    sss
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex items-center justify-start gap-x-6">
                1sss
            </div>
        </div>
    </header>
  )
}
