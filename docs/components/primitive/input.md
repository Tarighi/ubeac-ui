# UInput

## Properties

### type

* type: String
* available values: text, number, date, time, datetime, money

### value

* type: String

### name

* type: String

### placeholder

* type: String

### tooltip

* type: String

### format

* type: String

### mask

* type: String

### autofocus

* type: boolean
* default: false

### disable

* type: boolean
* default: false

### dir

* type: string
* default: left
* available values: left, right

### visible

* type: boolean
* default: true

### readonly

* type: boolean
* default: false

### language

* type: String
* default: null
* available values: en-US, fa-IR, ...


## Methods

### focus
### keyup
### keydown
### blur
### click
### mouseOver

## Examples

```html
<u-input type="text" value="Sample" name="SampleID" placeholder="Sample" tooltip="Sample" format="" mask="" disable="false" visible="true" readonly="false" dir="left" language="en-US" 
         @focus="" @keyup="" @keydown="" @blur="" @click="" @mouseOver=""
 />
<u-input type="money" value="400,100,100" name="SampleID" placeholder="1000,000,000" tooltip="Sample" format="" mask="---,---" disable="false" visible="true" readonly="false"  dir="left" language="en-US" 
         @focus="" @keyup="" @keydown="" @blur="" @click="" @mouseOver=""
 />
```
