import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getIconKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataDefault from './demo/data--default';
import dataImage from './demo/data--image';
import dataImageShade from './demo/data--image-shade';
import dataPrimary from './demo/data--primary';
import dataLeft from './demo/data--align-left';
import heroBanner from './ecl-hero-banner.html.twig';
import notes from './README.md';

const icons = { none: '' };
uiIcons.forEach(icon => {
  icons[icon] = icon;
});

const prepareBanner = (data, variant) => {
  data.centered = boolean('centered', data.centered, tabLabels.states);
  data.type = select('type', [data.type], data.type, tabLabels.required);
  data.title = text('title', data.title, tabLabels.optional);
  data.description = text('description', data.description, tabLabels.optional);

  if (variant === 'img') {
    data.image = text('image', data.image, tabLabels.required);
  }
  data.link.link.label = text(
    'link.link.label',
    data.link.link.label,
    tabLabels.optional
  );
  data.link.link.path = text(
    'link.link.path',
    data.link.link.path,
    tabLabels.optional
  );
  data.link.icon.name = select(
    'link.icon.name',
    icons,
    data.link.icon.name,
    tabLabels.optional
  );
  if (data.link.icon.name) {
    getIconKnobs(
      data,
      data.link.icon.name,
      'ui',
      'xs',
      'default',
      'rotate-90',
      true
    );
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Banners/Hero Banner',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => heroBanner(prepareBanner(dataDefault));

Default.story = {
  name: 'default',

  parameters: {
    notes: { markdown: notes, json: dataDefault },
  },
};

export const Primary = () => heroBanner(prepareBanner(dataPrimary));

Primary.story = {
  name: 'primary',

  parameters: {
    notes: { markdown: notes, json: dataPrimary },
  },
};

export const AlignLeft = () => heroBanner(prepareBanner(dataLeft));

AlignLeft.story = {
  name: 'align-left',

  parameters: {
    notes: { markdown: notes, json: dataLeft },
  },
};

export const Image = () => heroBanner(prepareBanner(dataImage, 'img'));

Image.story = {
  name: 'image',

  parameters: {
    notes: { markdown: notes, json: dataImage },
  },
};

export const ImageShade = () =>
  heroBanner(prepareBanner(dataImageShade, 'img'));

ImageShade.story = {
  name: 'image-shade',

  parameters: {
    notes: { markdown: notes, json: dataImageShade },
  },
};
