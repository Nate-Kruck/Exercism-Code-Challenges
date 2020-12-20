export const gigasecond = (startDate) => {
  let startTime = startDate.getTime();
  let endDate = new Date(startTime + 1000000000000);
  return endDate;
};
