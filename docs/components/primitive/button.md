# UButton

## Properties

### text

* type: String

### tooltip

* type: String

### variant

* type: String
* default: primary
* available values: primary, secondary, danger, alert, warning, ...

### autofocus

* type: boolean
* default: false

### disable

* type: boolean
* default: false

### visible

* type: boolean
* default: true

### loading

* type: boolean
* default: false

### badge

* type: String
* default: primary
* available values: secondary, primary, Success, Danger,Warning,Info,Light,Dark,Indigo,Purple,Pink

### PositionBadge
* type: String
* default: inside
* available values: right-top, left-top

## Methods

### click

### beforeClick

### afterClick

## Examples

```html
<u-button variant="danger" disabled="false" autofocus text="Submit"
 visible="true" @click="" @beforeClick="" @afterClick="" loading="true" badge="secondary" PositionBadge="inside"         
 />
```
