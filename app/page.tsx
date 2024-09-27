"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SquareArrowOutUpRightIcon } from "lucide-react"
import Link from "next/link"
import { shallow } from "zustand/shallow"

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: new Date(),
    to: undefined,
  })

  return (
    <div className="container mx-auto p-4 font-sans">
      <div style={{width: "100%" , padding:"1rem",backgroundColor:'#022c43', boxShadow:' 0 0 5px 0 #3dec97', borderRadius:'0.6rem' }}>

      <h1  style ={{color:"#3dec97"}} className="text-3xl font-bold mb-8 text-center">Calendar Components Date Picker</h1>
      </div>

      <div className="flex justify-center m-8 gap-4 font-medium col-white" style={{color:'white'}}>
        For Recurrance Date Picker, click here : {""}
        <Link  className="text-blue-600 hover:text-black underline inline-flex items-start gap-2"
          href={"/datepicker"} style={{color:'red'}}>
          Recurrence Date Picker <SquareArrowOutUpRightIcon size={15} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5"  >
        <Card style={{backgroundColor:'#022c43',  boxShadow:' 0 0 10px 0 #3dec97',  color:'red'}}>
          <CardHeader>
            <CardTitle >Single Date Selection</CardTitle>
            <CardDescription>Select a single date</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <div className="mt-4 text-medium font-sans">
              <p>Selected date: {date?.toDateString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card style={{backgroundColor:'#022c43',  boxShadow:' 0 0 10px 0 #3dec97',  color:'red'}}>
          <CardHeader>
            <CardTitle>Date Range Selection</CardTitle>
            <CardDescription>Select a range of dates</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={(range) => setDateRange({ from: range?.from, to: range?.to })}
              className="rounded-md border"
              numberOfMonths={2}
            />
            <div className="mt-4">
              <p>Start date: {dateRange.from?.toDateString()}</p>
              <p>End date: {dateRange.to?.toDateString()}</p>
            </div>
          </CardContent>
        </Card  >
        <Card className="mt-8" style={{backgroundColor:'#022c43',  boxShadow:' 0 0 10px 0 #3dec97',  color:'red'}}>
          <CardHeader>
            <CardTitle>Calendar with Custom Styling</CardTitle>
            <CardDescription>A calendar with custom styling and disabled dates</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={{
                disabled: [
                  { before: new Date() },
                  { after: new Date(new Date().setMonth(new Date().getMonth() + 3)) },
                ],
                highlight: [new Date(new Date().setDate(new Date().getDate() + 7))],
              }}
              modifiersStyles={{
                disabled: { color: "gray" },
                highlight: { backgroundColor: "lightblue" },
              }}
              footer={
                <div className="mt-4 flex justify-center">
                  <Button onClick={() => setDate(new Date())}>Today</Button>
                </div>
              }
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
