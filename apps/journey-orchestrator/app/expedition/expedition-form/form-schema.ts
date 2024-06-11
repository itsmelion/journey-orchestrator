import * as z from 'zod';
import { dayjs } from '@journey-orchestrator/services';

export const schema = z.object({
  name: z.string().min(1, { message: 'Mission needs thrilling name' }),
  destination: z.string().min(1, { message: 'Must define here are you landing' }),
  departure: z.string()
    .transform((val) => dayjs.utc(val, "YYYY-MM-DD"))
    .refine(
      v => { return v.isValid() },
      { message: "Something went wrong. invalid date" },
    )
    .refine(
      v => { return v.isAfter(dayjs.utc()) },
      { message: "Can't time travel back time yet, date must be in the future" },
    )
    .refine(
      v => { return v.isBefore(dayjs.utc('2025-01-01')) },
      { message: "Dont get too hasty! only one year advance" },
    )
});
