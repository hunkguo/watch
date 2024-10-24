import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,

  } from "@/components/ui/navigation-menu"
import {TooltipProvider} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image";

export default function Demo() {
  return (
    <>
        <header className="border-b py-4">
            <div className="sm:items-centerm mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:px-6 md:flex-nowrap lg:px-8">
                <h1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">Your Next Store</h1>
                <div className="mr-auto">
                    <NavigationMenu >
                        <NavigationMenuList>
                                <NavigationMenuItem >
                                    <NavigationMenuLink >
                                        sss
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem >
                                    <NavigationMenuLink >
                                        sss2
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem >
                                    <NavigationMenuLink >
                                        sss2
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div>111</div>
                <div className="flex items-center justify-start gap-x-6">
                    1sss
                </div>
            </div>
        </header>
		<TooltipProvider>
            <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-6 sm:px-6 lg:px-8">
                <section className="rounded bg-neutral-100 py-8 sm:py-12">
                    <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
                        <div className="max-w-md space-y-4">
                            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">hero.title</h2>
                            <p className="text-pretty text-neutral-600">1</p>
                        </div>
                    </div>
                </section>


                <section className="w-full py-8">
                    <div className="grid gap-8 lg:grid-cols-2">
                        cat
                    </div>
                </section>
            </main>

            <footer className="w-full bg-neutral-50 p-6 text-neutral-800 md:py-12">
                <div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-sm sm:justify-between">
                    <div className="">
                        <div className="flex w-full max-w-sm flex-col gap-2">
                            <h3 className="font-semibold">newsletterTitle</h3>
                            Newsletter
                        </div>
                    </div>

                    <nav className="grid grid-cols-2 gap-16">
                        link
                    </nav>
                </div>
                <div className="container mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
                    <div>
                        <p>© 2024 Your Next Store</p>
                        <p>Delightfully commerce for everyone</p>
                    </div>
                </div>
            </footer>
        </TooltipProvider>

    </>
  )
}
