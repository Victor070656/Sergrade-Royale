(function() {
	"use strict";
        document.addEventListener('DOMContentLoaded', function() {
            var calendarEl = document.getElementById('calendar');

            var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                right: 'prev,next',
                center: 'title',
                left: 'today'
            },
            initialDate: '2024-03-30',
            navLinks: true, // can click day/week names to navigate views
            businessHours: true, // display business hours
            editable: true,
            selectable: true,
            events: [
                {
                    title: 'Project Deadline',
                    start: '2024-03-03',
                },
                {
                    title: 'Team Meeting',
                    start: '2024-03-13',
                },
                {
                    title: 'Meeting with Mary',
                    start: '2024-03-18',
                },
            ],
        }); 
        calendar.render();
    });
    
})();