export const STUDENT_MAPPING = {
    May: {
        displayName: 'May ',
        color: '#fb5581',
      },
    June: {
      displayName: 'June ',
      color: '#ff073a',
    },
    July: {
      displayName: 'July ',
      color: '#007bff',
    },
    Aug: {
      displayName: 'Aug ',
      color: '#28a745',
    },
    Sept: {
      displayName: 'Sep ',
      color: '#6c757d',
    },
    Oct: {
      displayName: 'Oct ',
      color: '#6c757d',
    },
    Nov: {
      displayName: 'Nov ',
      color: '#4b1eaa',
    },
    Dec: {
      displayName: 'Dec ',
      color: '#fb5581',
    },
    Jan: {
      displayName: 'Jan ',
      color: '#fb5581',
    },
    Feb: {
      displayName: 'Feb ',
      color: '#fb5581',
    },
    Mar: {
      displayName: 'Mar ',
      color: '#fb5581',
    },
    April: {
      displayName: 'Apr ',
      color: '#fb5581',
    },
  };

export const MONTH_COLUMNS = [
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct', 
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'April',
];

export const BATCH_MAPPING = {
  MON1: {
    displayName: 'Mon (4PM-5PM)',
    color: '#ff073a',
  },
  MON2: {
    displayName: 'Mon (5PM-6PM)',
    color: '#007bff',
  },
  MON3: {
    displayName: 'Mon (6PM-7PM)',
    color: '#28a745',
  },
  TUE1: {
    displayName: 'Tue (4PM-5PM)',
    color: '#6c757d',
  },
  TUE2: {
    displayName: 'Tue (5PM-6PM)',
    color: '#6c757d',
  },
  TUE3: {
    displayName: 'Tue (6PM-7PM)',
    color: '#4b1eaa',
  },
  WED1: {
    displayName: 'Wed (4PM-5PM)',
    color: '#fb5581',
  },
  WED2: {
    displayName: 'Wed (5PM-6PM)',
    color: '#fb5581',
  },
  WED3: {
    displayName: 'Wed (6PM-7PM)',
    color: '#fb5581',
  },
  THU1: {
    displayName: 'Thu (4PM-5PM)',
    color: '#fb5581',
  },
  THU2: {
    displayName: 'Thu (5PM-6PM)',
    color: '#fb5581',
  },
  THU3: {
      displayName: 'Thu (6PM-7PM)',
      color: '#fb5581',
    },
  FRI1: {
    displayName: 'Fri (4PM-5PM)',
    color: '#ff073a',
  },
  FRI2: {
    displayName: 'Fri (5PM-6PM)',
    color: '#007bff',
  },
  FRI3: {
    displayName: 'Fri (6PM-7PM)',
    color: '#28a745',
  },
};

export const BATCH_COLUMNS = [
'MON1',
'MON2',
'MON3',
'TUE1',
'TUE2', 
'TUE3',
'WED1',
'WED2',
'WED3',
'THU1',
'THU2',
'THU3',
'FRI1',
'FRI2',
'FRI3',
];

export const FEES_SUMMARY = [
  'Overall',
  'Cash',
  'GPay',
];

export const FEES_DISPLAY = {
  Overall: {
    displayName: 'Overall',
    format: 'int',
  },
  Cash: {
    displayName: 'Cash',
    format: 'int',
  },
  GPay: {
    displayName: 'G Pay',
    format: 'int',
  },
};

export var summaryFees  = {
  delta: {Overall:0, Cash:0, GPay:0},
  total: {Overall:0, Cash:0, GPay:0},
}

export const THIS_MONTH_AMOUNT_VALUE = "1";
export const LAST_MONTH_AMOUNT_VALUE = "2";
export const TOTAL_AMOUNT_VALUE = "3";
export const BATCH_BUMBER_VALUE = "4";
export var currentSortYear = {
  value:'2025',
};