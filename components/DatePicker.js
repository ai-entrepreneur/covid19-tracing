import { useState } from 'react'
import styled from 'styled-components'
import DayPicker from 'react-day-picker'

import { connect } from 'react-redux'
import { updateGraph, selectFilter } from './Redux/actions'
import { rowsToGraph } from '../util/parse'
import { isBrowser } from 'react-device-detect'

const Container = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const DatePickerButton = styled.button`
  width: 200px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
`

function DatePicker({ updateGraph, selectFilter }) {
  const [selectedDay, changeSelectedDay] = useState(new Date());
  const [isDayPickerVisible, changeDayPickerVisibility] = useState(false);

  const toggleDayPickerVisibility = () => changeDayPickerVisibility(!isDayPickerVisible);

  function handleDayClick(date, modifiers) {

    // Do not proceed with click action if the date is disabled
    if(modifiers.disabled){
      return;
    }

    toggleDayPickerVisibility();

    function formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day

      return [year, month, day].join('-')
    }

    const newDate = formatDate(date)

    if (formatDate(selectedDay) !== newDate) {
      changeSelectedDay(date)

      const apiURL =
      // 'https://ai-entrepreneur.github.io/covid19-tracing/data/covid19_tw_2020_0408.json'
      'https://ai-entrepreneur.github.io/covid19-tracing/data/covid19_tw_today.json'
      // 'http://localhost:5000/api/tw'
        // newDate

      fetch(apiURL, {
        cors: 'no-cors',
        method: 'GET',
        redirect: 'follow',
      })
        .then(resp => resp.json())
        .then(res => {
          // console.log(res)
          // Update the graph only if res.success is true
          if(res.success){
            updateGraph(rowsToGraph(res.data.rawPatientData))
            selectFilter('P2P');
          }
        })
    }
  }

  const renderDayPicker = () => isDayPickerVisible ? (
    <DayPicker
      selectedDays={selectedDay}
      onDayClick={handleDayClick}
      disabledDays={[
        {
          before: new Date(2020, 2, 23),
          after: new Date(),
        },
      ]}
    />
  ) : null

  return (
    <Container>
      {isBrowser ? (
        <>
          {renderDayPicker()}
          <DatePickerButton
            onClick={toggleDayPickerVisibility}
          >
            <span>{selectedDay.toDateString()}</span>
          </DatePickerButton>
        </>
      ) : null}
    </Container>
  )
}

export default connect(null, { updateGraph, selectFilter })(DatePicker)
