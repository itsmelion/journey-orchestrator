import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(relativeTime);

export { dayjs };
