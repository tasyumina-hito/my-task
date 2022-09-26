import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar() {
    return (
        <FullCalendar
            height="auto"
            plugins={[dayGridPlugin]}
            locale="ja"
            initialEvents={[{ title: 'initial event', start: new Date() }]}
        />
    )
}