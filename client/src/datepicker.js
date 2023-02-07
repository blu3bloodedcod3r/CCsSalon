// import { Datepicker, CalendarPrev, CalendarNav, CalendarNext, CalendarToday, SegmentedGroup, SegmentedItem, setOptions } from '@mobiscroll/react';

// setOptions({
//     theme: 'ios',
//     themeVariant: 'dark'
// });

// function Calendar() {
//     const [type, setType] = React.useState('q4');
//     const calType = React.useMemo(() => type === 'year' ? 'year' : 'month', [type]);
//     const [selectedDate, setDate] = React.useState(new Date());
//     const [activeDate, setActiveDate] = React.useState(new Date());

//     const changeView = React.useCallback((event) => {
//         const tp = event.target.value;
//         const year = activeDate.getFullYear();
//         let date;
//         switch (tp) {
//             case 'q1':
//                 date = new Date(year, 0, 1);
//                 break;
//             case 'q2':
//                 date = new Date(year, 3, 1);
//                 break;
//             case 'q3':
//                 date = new Date(year, 6, 1);
//                 break;
//             case 'q4':
//                 date = new Date(year, 9, 1);
//                 break;
//             case 'year':
//                 date = new Date(year, activeDate.getMonth(), 1);
//                 break;
//             default:
//                 break;
//         }
//         setType(tp);
//         setDate(date);
//         setActiveDate(date);
//     }, [activeDate]);

//     const onPageChange = React.useCallback((event) => {
//         let t = '';
//         if (type === 'year') {
//             t = 'year';
//         } else {
//             const month = event.firstDay.getMonth();
//             if (month < 3) {
//                 t = 'q1';
//             } else if (month < 6) {
//                 t = 'q2';
//             } else if (month < 9) {
//                 t = 'q3';
//             } else {
//                 t = 'q4';
//             }
//         }
//         setTimeout(() => {
//             setActiveDate(event.firstDay);
//             setType(t);
//         });
//     }, [type]);

//     const onChange = React.useCallback((event) => {
//         setDate(event.value);
//     }, []);

//     const calendarHeaderSwitch = React.useCallback(() => {
//         return <React.Fragment>
//             <CalendarNav />
//             <div className="quarter-year-header-picker">
//                 <SegmentedGroup value={type} onChange={changeView}>
//                     <SegmentedItem value="q1">Q1</SegmentedItem>
//                     <SegmentedItem value="q2">Q2</SegmentedItem>
//                     <SegmentedItem value="q3">Q3</SegmentedItem>
//                     <SegmentedItem value="q4">Q4</SegmentedItem>
//                     <SegmentedItem value="year">Year</SegmentedItem>
//                 </SegmentedGroup>
//             </div>
//             <CalendarPrev />
//             <CalendarToday />
//             <CalendarNext />
//         </React.Fragment>;
//     }, [changeView, type]);

//     return (
//         <Datepicker
//             controls={['calendar']}
//             display="inline"
//             calendarType={calType}
//             calendarSize={3}
//             renderCalendarHeader={calendarHeaderSwitch}
//             onPageChange={onPageChange}
//             onChange={onChange}
//             showWeekNumbers={true}
//             value={selectedDate}
//         />
//     );
// }

