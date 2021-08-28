# UGrid

## Properties

### filtering

- type: Object
- ExampleJSON : {"filter1":"value1","filter2":"value2","filter3":"value3"}

### model

- type: Array
- ExampleArray : [object1,object2,object3,..]

### visible

- type: boolean
- default: true

### rowNumberVisibility

- type: boolean
- default: true

### rowKeyFieldName

- type: string

## Related Components

- [UGridRow](/docs/components/form/form-grid-row.md)
- [UGridCol](/docs/components/form/form-grid-col.md)

```html
<u-grid
  filtering="filteringObject"
  :model="reportData"
  :visible="true"
  rowNumberVisibility="true"
>
  <u-grid-row class="row body" visible="true" type="body">
    <u-grid-col
      field="id"
      title="Id"
      class="col"
      width="auto"
      type="number"
      fromat="#,###"
      visible="true"
    >
      {{itemValue}}
    </u-grid-col>

    <u-grid-col
      field="value"
      title="Value"
      class="col"
      width="auto"
      type="number"
      fromat="#,###"
      visible="true"
    >
      {{itemValue}}
    </u-grid-col>

    <u-grid-col field="name" title="name">
      {{ item }}
      <u-btn :to="item.link" v-if="item.code === 1"> </u-btn>
    </u-grid-col>
  </u-grid-row>

  <u-grid-row class="row footer" visible="true" type="footer">
    <u-grid-col value="Total :" />
    <u-grid-col
      field="value"
      title="Value"
      class="col"
      width="auto"
      type="number"
      fromat="#,###"
      visible="true"
    >
      {{ sumComuted }}
    </u-grid-col>
    <u-grid-col />
  </u-grid-row>
</u-grid>
```
