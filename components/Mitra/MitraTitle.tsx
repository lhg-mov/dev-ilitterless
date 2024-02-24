import React from 'react'

import MitraTitleRender from './MitraTitleRender';
import MitraTitleClient from './MitraTitleClient';

const MitraTitle = () => {
  return (
    <MitraTitleClient>
        <MitraTitleRender/>
    </MitraTitleClient>
  )
}

export default MitraTitle