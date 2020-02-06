import * as moment from 'moment';
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = path => reg.test(path);

export const HTTPCode = {
  TRIP: {
    FAIL: 'Fetch trip failed!',
  },
};

const DEFAULT_FORMAT = 'DD/MM/YYYY HH:mm';
const isCorrectFormat = dateString => {
  return !!Date.parse(dateString);
};

export const dateTimeFormat = (datetime, format = DEFAULT_FORMAT) => {
  console.log(datetime, format, isCorrectFormat(datetime, format));
  if (!datetime || !isCorrectFormat(datetime)) {
    return undefined;
  }

  return moment(datetime).format(format);
};
