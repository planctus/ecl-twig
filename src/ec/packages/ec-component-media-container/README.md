# ECL Twig - EC Media container component

npm package: `@ecl-twig/ec-component-media-container`

```shell
npm install --save @ecl-twig/ec-component-media-container
```

### Parameters

- **"description"** (string) (default: '') - A caption to be shown under the media,
- **"image"** (string) (default: '') The path to the image,
- **"alt"** (string) (default: '') The alternate text for the image,
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'.

### Example for media container image:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-media-container/ecl-media-container.html.twig' with { 
  description: 'A description for this image', 
  extra_classes: 'my-extra-class-1 my-extra-class-2', 
  image: '/path/to/your/image', 
  alt: 'An alternate text', 
  extra_attributes: [ 
    { name: 'data-test', value: 'data-test-value' },  
    { name: 'data-test-1', value: 'data-test-value-1' }  
  ] 
} %}
```