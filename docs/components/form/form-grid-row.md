# UGridRow

## Properties

### class

- type: String
- default: 'row'

### visible

- type: boolean
- default: true

### isFixed

- type: boolean
- default: false

### type

- type: String
- available values: header,body,footer
- default: body

```html
<u-grid-row class="row footer" visible="true" type="footer" isFixed="false">
  <u-grid-col
    field="field-name"
    title="title"
    class="col"
    width="auto"
    type="number"
    fromat="#,###"
    visible="true"
  >
    {{ sumComuted }}
  </u-grid-col>
</u-grid-row>
```
