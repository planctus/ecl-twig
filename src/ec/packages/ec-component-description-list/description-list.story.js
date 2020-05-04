/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import specs from '@ecl/ec-specs-description-list/demo/data';
import specsHorizontal from '@ecl/ec-specs-description-list/demo/data--horizontal';
import descriptionList from './ecl-description-list.html.twig';
import notes from './README.md';

specsHorizontal.variant = 'horizontal';

const prepareList = data => {
  if (data.variant) {
    data.variant = select(
      'variant',
      [data.variant],
      data.variant,
      tabLabels.required
    );
  }
  data.items.forEach((item, i) => {
    if (Array.isArray(item.term)) {
      item.term.forEach((term, ind) => {
        data.items[i].term[ind] = text(
          `items[${i}].term[${ind}]`,
          term,
          tabLabels.required
        );
      });
    } else {
      item.term = text(`items[${i}].term`, item.term, tabLabels.required);
    }
    if (Array.isArray(item.definition)) {
      item.definition.forEach((definition, ind) => {
        data.items[i].definition[ind] = text(
          `items[${i}].definition[${ind}]`,
          definition,
          tabLabels.required
        );
      });
    } else if (item.definition) {
      item.definition = text(
        `items[${i}].definition`,
        item.definition,
        tabLabels.required
      );
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/List/Description list', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add('vertical', () => descriptionList(prepareList(specs)), {
    notes: { markdown: notes, json: specs },
  })
  .add('horizontal', () => descriptionList(prepareList(specsHorizontal)), {
    notes: { markdown: notes, json: specsHorizontal },
  });
