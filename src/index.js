import React from 'react';
import { FormattedMessage } from 'react-intl';

const SampleComponent = ({changeLanguage}) => (
    <h1>
      <FormattedMessage
          id="SampleComponent.welcomeMsessage"
          defaultMessage="You are using Sample Component"
      />
      <button onClick={changeLanguage}>Change Language</button>
    </h1>
);
export default SampleComponent;
