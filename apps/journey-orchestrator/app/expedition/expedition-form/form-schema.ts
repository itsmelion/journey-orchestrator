import * as z from 'zod';
import { MemberTypes, dayjs, Engineer, Members } from '@journey-orchestrator/services';

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
    ),
    members: z.discriminatedUnion("type", [
      z.object({
        type: z.literal(MemberTypes.pilot),
        experience: z.number().min(10, { message: 'Minimal 10 years expericence required' })
      }).required(),
      z.object({
        type: z.literal(MemberTypes.engineer),
        experience: z.number().min(0)
      }),
      z.object({
        type: z.literal(MemberTypes.passenger),
        age: z.number()
          .min(0, { message: 'That age is unrealistic.' })
          .max(120, { message: 'Max age reached. "Old gents cant lift the rocket fella."' }),
        wealth: z.number()
          .min(10, { message: 'Too low wealth. "We are very capitalist. Poor people have no priviledges"' }),
      }).required(),
    ]).array().nonempty().refine((data) => {
      if (hasNoPassenger(data as Members[])) return false;
      return true;
    }, { message: 'Gotta have at least one passenger'}),
});



export function hasSameJob(members: Members[]) {
  const engineers: Engineer[] = [];

  for (let index = 0; index < members.length; index++) {
    const entry = members[index];
    const isEngineer = entry.type === MemberTypes.engineer;

    // filter engineers
    if (isEngineer) {
      // find if same job
      const repeatedJob = engineers.find(engineer => engineer.job === entry.job);

      // if repeated job, exit for-loop with truthy(job)
      if (repeatedJob) return { ...repeatedJob, index };
      // else, accumulate entry, and continue comparing on next iteration.
      else engineers.push(entry);
    }
  }
}


function hasNoPassenger(members: Members[]) {
  return members.findIndex(member => member.type === MemberTypes.passenger) < 0
}
