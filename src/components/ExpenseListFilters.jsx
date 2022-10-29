import React from "react";
import { connect } from 'react-redux';
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null,
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }} />
        <select
          value={this.props.filters.sortBy} // controlled component: value is controlled by JS
          onChange={(e) => {
            if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount())
            } else if (e.target.value === 'sort') {
              this.props.dispatch(sortByDate())
            }
          }}>
          <option value='amount' >Amount</option>
          <option value='date' >Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);