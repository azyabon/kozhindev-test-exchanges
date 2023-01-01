import { formatDistance } from "date-fns";

export const dateDistance = (date: number) => {
  return formatDistance(date, Date.now(), {
    addSuffix: true,
  });
};
