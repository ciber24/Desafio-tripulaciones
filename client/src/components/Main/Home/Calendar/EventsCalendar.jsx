// EventsCalendar.jsx
import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class EventsCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "today",
          start: new Date('2024-05-31T10:22:00'),
          end: new Date('2019-05-05T10:42:00')
        },
        {
          title: "Fin de Curso",
          start: new Date('2024-05-31T12:22:00'),
          end: new Date('2024-05-31T13:42:00')
        }
      ],
      newEvent: {
        title: "",
        start: "",
        end: ""
      }
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newEvent: {
        ...prevState.newEvent,
        [name]: value
      }
    }));
  };

  handleAddEvent = () => {
    const { title, start, end } = this.state.newEvent;
    const newEvent = {
      title,
      start: new Date(start),
      end: new Date(end)
    };
    this.setState(prevState => ({
      events: [...prevState.events, newEvent],
      newEvent: { title: "", start: "", end: "" }
    }));
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            name="title"
            placeholder="Título Evento"
            value={this.state.newEvent.title}
            onChange={this.handleInputChange}
          />
          <input
            type="datetime-local"
            name="start"
            placeholder="Start Date"
            value={this.state.newEvent.start}
            onChange={this.handleInputChange}
          />
          <input
            type="datetime-local"
            name="end"
            placeholder="End Date"
            value={this.state.newEvent.end}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddEvent}>Añadir Evento</button>
        </div>
        <div style={{ height: '400px' }} className="bigCalendar-container">
          <Calendar
            localizer={localizer}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            messages={{
              next: "Mes Siguiente",
              previous: "Mes Anterior",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día"
            }}
          />
        </div>
      </div>
    );
  }
}

export default EventsCalendar;