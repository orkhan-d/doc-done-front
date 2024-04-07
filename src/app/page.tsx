import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div className={`flex flex-col items-center gap-10`}>
            <div>
                <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Stop wasting your time!
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    working with documents — it is boring, isn&#39;t it?
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    It is service to automatically format your documents and make them beauty.
                    It is too easy believe me 😎
                </p>
            </div>
            <Button>
                How to do it?
            </Button>
        </div>
    );
}
