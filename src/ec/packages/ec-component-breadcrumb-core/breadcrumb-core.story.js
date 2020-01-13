import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataSimple from './demo/data-simple';
import dataLong from './demo/data';

import breadcrumb from './ecl-breadcrumb-core.html.twig';
import notes from './README.md';

storiesOf('Components/Navigation/Breadcrumbs/Breadcrumb Core', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'simple',
    () =>
      breadcrumb(
        merge(dataSimple, {
          icon_file_path: defaultSprite,
          ellipsis_label: 'Click to expand',
        })
      ),
    {
      notes: { markdown: notes, json: dataSimple },
    }
  )
  .add(
    'long',
    () =>
      breadcrumb(
        merge(dataLong, {
          icon_file_path: defaultSprite,
          ellipsis_label: 'Click to expand',
        })
      ),
    {
      notes: { markdown: notes, json: dataLong },
    }
  );