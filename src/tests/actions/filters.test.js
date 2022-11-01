import moment from 'moment';
import { setEndDate, setStartDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(1000));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(1000),
  })
})

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(9000));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(9000),
  })
})

test('should generate sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should generate sortByDate action object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should generate setTextFilter action object with provided value', () => {
  const text = 'rent';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  })
})

test('should generate setTextFilter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})
