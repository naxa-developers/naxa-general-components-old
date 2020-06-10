import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean,number,color } from '@storybook/addon-knobs';

import ButtonReadme from './README.md';
import ExportDataTable from './ExportDataTable';


storiesOf('ExportDataTable', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme before story
      content: ButtonReadme,
      // Show readme at the addons panel
      sidebar: ButtonReadme,
    },
  })
  .add('Default', () => (
    <ExportDataTable/>
  ))
  .add('with Filename and tableid', () => (
    <ExportDataTable tableId={text('Table Id',"table_id")} exportedfilename={text('Filename',"personData")}/>
  ))
  // .add('Label & Notification Count', () => (
  //   <Badge
  //     label={text('Label', 'Mail')}
  //     notification_count={number('Notification Count', 5)}
  //     onClick={action('click', 'hello')}
  //   />
  // ))
  // .add('With Different Color', () => (
  //   <Badge 
  //   color={color("Badge Color", "#337ab7")}
  //   borderColor={color("Badge Border Color", "#2e6da4")}
  //   label={text('label', 'Mail')}
  //   notification_count={number('Notification Count', 5)}
  //   />
  // ));
