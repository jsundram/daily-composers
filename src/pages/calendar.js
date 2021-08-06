// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import {format} from 'd3-format'

import {
    heading,
} from '../components/layout.module.css'


let dateslug = (month, day) => ("/" + (month + 1) + "-" +  day);

// Step 2: Define your component
const CalendarPage = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const lengths = {
        "January": 31,
        "February": 29,
        "March": 31,
        "April": 30,
        "May": 31,
        "June": 30,
        "July": 31,
        "August": 31,
        "September": 30,
        "October": 31,
        "November": 30,
        "December": 31
    }
    const pad = (d) => format("02d")(d);
    let daylink = (month, ix, day) => (
        <a style={{padding: 12, color: "cornflowerblue"}} key={month + day} href={dateslug(ix, day)}>{pad(day)}</a>
    );
    return (
        <Layout pageTitle="Calendar">
            <h1 className={heading}>Calendar</h1>
            {

                months.map((month, ix) => (
                    <div key={month}>
                        <h3 style={{color: "gray"}}>{month}</h3>
                        {
                            Array.from({length: 4}, (_, r) => r).map(row => (
                                <p key={row}>
                                {
                                    Array.from({length: 7}, (v, i) => i+(1 + 7*row)).map(day => daylink(month, ix, day))
                                }
                                </p>
                            ))
                        }
                        <p key={4}>
                            {
                                Array.from({length: lengths[month] - 28}, (v, i) => i+29).map(day => daylink(month, ix, day))
                            }
                        </p>
                    </div>
                ))
            }
        </Layout>
    )
}

// Step 3: Export your component
export default CalendarPage
