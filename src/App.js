import React from 'react';

import {Button, Dropdown, Paragraph} from '@george-labs.com/design-system';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">

          <h1>Kunda H1</h1>
          <Button>Pyčo</Button>
          <Button className='ml-3'
                  icon={Button.ICON.APP_LIST}
                  hiddenLabel={Button.HIDDEN_LABEL.BELOW_MD}
                  variant={Button.VARIANT.DANGER}
          >Pyčo s ikonem</Button>
          <Dropdown className='ml-3'
                    renderToggle={() =>
                      <Button>Pyčo s blikajicim dropdonem</Button>
                    }>
            <Paragraph>Kuk pyčo, blik pyčo</Paragraph>
          </Dropdown>

        </div>
      </div>
    </div>
  );
}

export default App;
