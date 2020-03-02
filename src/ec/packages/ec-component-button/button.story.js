/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

// Import data for demos
import dataPrimary from '@ecl/ec-specs-button/demo/data--primary';
import dataSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import dataCall from '@ecl/ec-specs-button/demo/data--call';
import dataGhost from '@ecl/ec-specs-button/demo/data--ghost';
import dataSearch from '@ecl/ec-specs-button/demo/data--search';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import button from './ecl-button.html.twig';
import notes from './README.md';

const iconPositionSettings = {
  before: 'before',
  after: 'after',
};

const iconsList = {};
iconsList.none = null;

uiIcons.forEach(icon => {
  iconsList[icon] = icon;
});

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

// Preserve the adapted specs.
const primaryData = { ...dataPrimary };
const secondaryData = { ...dataSecondary };
const callData = { ...dataCall };
const ghostData = { ...dataGhost };
const searchData = { ...dataSearch };

const prepareButton = prepareData => {
  // Set default values
  prepareData.icon = {};
  prepareData.icon_position = 'after';

  // Set extra defaultdata for knobs
  const label = prepareData.label
    ? text('Label', prepareData.label, requiredGroupId)
    : false;

  const { variant } = prepareData.variant;

  const icon = prepareData.icon
    ? {
        type: 'ui',
        path: defaultSprite,
        name: select('Icon (sample)', iconsList, null, optionalGroupId),
        size: 'xs',
      }
    : {};

  const iconPosition = prepareData.icon_position
    ? select('Icon position', iconPositionSettings, 'after', optionalGroupId)
    : false;

  const disabled = boolean('Disabled', prepareData.disabled, optionalGroupId);

  const newButton = {
    label,
    variant,
    icon,
    iconPosition,
    disabled,
  };

  return newButton;
};

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'primary',
    () => {
      return button(prepareButton(primaryData));
    },
    {
      notes: { markdown: notes, json: prepareButton(primaryData) },
    }
  )
  .add(
    'secondary',
    () => {
      return button(prepareButton(secondaryData));
    },
    {
      notes: { markdown: notes, json: prepareButton(secondaryData) },
    }
  )
  .add(
    'call to action',
    () => {
      return button(prepareButton(callData));
    },
    {
      notes: { markdown: notes, json: prepareButton(callData) },
    }
  )
  .add(
    'text',
    () => {
      return button(prepareButton(ghostData));
    },
    {
      notes: { markdown: notes, json: prepareButton(ghostData) },
    }
  )
  .add(
    'search',
    () => {
      return button(prepareButton(searchData));
    },
    {
      notes: { markdown: notes, json: prepareButton(ghostData) },
    }
  );
