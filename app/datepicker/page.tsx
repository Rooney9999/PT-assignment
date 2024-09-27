import { RecurringDatePicker } from "@/components/RecurringDatePicker";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="mt-14 container mx-auto p-4 font-sans">
            <div style={{width: "100%" , padding:"1rem",backgroundColor:'#022c43', boxShadow:' 0 0 5px 0 #3dec97', borderRadius:'0.6rem' }}>

        <h1  style ={{color:"#3dec97"}} className="text-3xl font-bold mb-8 text-center">Recurrance Date Selection</h1>
            </div>

            <h1  className="text-3xl font-bold mb-8 text-center">Recurrance Date Selection</h1>

            <div className="flex justify-center m-8 gap-4 font-medium">
                <span style={{color:'white'}}>  For Date Selection, click here : {""} </span>
                <Link className="text-blue-600 hover:text-black underline inline-flex items-start gap-2"
                    href={"/"}>
                    Recurrence Date Picker <SquareArrowOutUpRightIcon size={15} />
                </Link>
            </div>
            <RecurringDatePicker  />
        </div>
    );
}