# UGridCol

## Properties

### field

- type: String
- default: ''

### title

- type: String
- default: field name

### value

- type: String
- default: ''

### class

- type: String
- default: ''

### width

- type: string
- available values: auto, [number]px ,[number]%
- default: auto

### type

- type: string
- default: 'string'
- available values: number, string, date, datetime, radio, checkbox, switch, icon, image

### fromat

- type: string
- default: ''
- Examples : 'P', 'C', '#,###.##', ..

### visible

- type: boolean
- default: true

### dir

- type: string
- default: right
- available values: left, right

```html
<u-grid-col
  field="field-name"
  title="title"
  class="col"
  width="auto"
  type="number"
  fromat="#,###"
  visible="true"
>
  {{itemValue}}
</u-grid-col>
```
