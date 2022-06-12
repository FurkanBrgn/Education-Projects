import React from 'react'

import SmootButton from 'smootbutton'
import 'smootbutton/dist/index.css'

const App = () => {
  return (
    <>
      <SmootButton type="default" text="Smoot Button" />
      <SmootButton type="primary" text="Smoot Button" />
      <SmootButton type="bordered" text="Smoot Button" />
    </>
  );
}

export default App
