import React from 'react'
import MitraCafeClient from './MitraCafeClient'
import MitraCafeRender from './MitraCafeRender'

const MitraCafe = () => {
  return (
    <MitraCafeClient>
        <MitraCafeRender/>
    </MitraCafeClient>
  )
}

export default MitraCafe