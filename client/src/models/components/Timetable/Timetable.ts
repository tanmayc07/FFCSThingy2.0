import TimetableCourse from '../../data/TimetableCourse';

export default interface TimetableProps {
	timetable: TimetableCourse[];
	activeTimetableName: string;
	filledSlots: string[];
};