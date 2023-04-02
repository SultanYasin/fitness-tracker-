import React from 'react'
import { useFitness } from 'DataStore/Store'

function Activities() {

  const {message} = useFitness();
 

  return (
    <div>Activities</div>
  )
}

export default Activities