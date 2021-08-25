# UGrid

## Properties

### filtering
* type: Object
* ExampleJSON : {"filter1":"value1","filter2":"value2","filter3":"value3"} 

### operationId
* type: Number

### model
* type: Array
* ExampleArray : [object1,object2,object3,..]

### visible

* type: boolean
* default: true

## Related Components

* [UGridFinalRow](/docs/components/form/form-grid-final-row.md)
* [UGridCol](/docs/components/form/form-grid-col.md)

```html

<u-grid filtering="filteringObject" operationId="" :model="reportData" visible="true" >
	<u-grid-col value="id" label="labletext"></u-grid-col>
	<u-grid-final-row>
		<u-grid-col value="amount" label="labletext"> {{ sumComuted }} </u-grid-col>
    </u-grid-final-row>
	<u-grid-col value="name" label="labletext">
   		{{ item }}
   		<u-btn :to="item.link" v-if="item.code === 1"> </u-btn>
  	</u-grid-col>

</u-grid>
```
