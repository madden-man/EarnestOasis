import { useState } from 'react';

import FullCalendar from '@fullcalendar/react' /* { formatDate } */
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listWeekPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'

import { Container } from '../components/Container';

import { INITIAL_EVENTS, createEventId } from './event-utils'

import './calendar.css';


const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
};

const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
};

export const Calendar = () =>  {
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleEvents = (events) => {
        setCurrentEvents(events);
    };

    console.log(currentEvents);

    return (
        <Container>
            <h1>Calendar View</h1>
            <div style={{ width: '50rem', paddingBottom: '2rem' }}>
              <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, listWeekPlugin, interactionPlugin]}
                  headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                  }}
                  initialView='timeGridWeek'
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={true}
                  initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                  select={handleDateSelect}
                  eventContent={renderEventContent} // custom render function
                  eventClick={handleEventClick}
                  eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                  /* you can update a remote database when these fire:
                  eventAdd={function(){}}
                  eventChange={function(){}}
                  eventRemove={function(){}}
                  */
              />
            </div>
        </Container>
    );
}

// a custom render function
function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }