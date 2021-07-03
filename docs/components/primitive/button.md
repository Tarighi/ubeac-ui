# UButton

## Properties

### text

* type: String

### tooltip

* type: String

### variant

* type: String
* default: primary
* available values: econdary, primary, Success, Danger,Warning,Info,Light,Dark,Indigo,Purple,Pink,...
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

### icon
* Type: String
* Default :clean
* available :check,arrow-end,search,close,pencil,...

### HoverAnimated
* Type: String
* Default :clean
* available :hover-top,hover-right,hover-bottom,hover-left,noshadow,hover-zoom,...
### ButtonType
* Type: String
* Default :clean
* available :soft,soft-static,pill,ghost,rounded-circle

### SocialButtons
* Type: String
* Default :clean
* available :facebook,twitter,linkedin,vimeo,youtube


## Methods

### click

### beforeClick

### afterClick

## Examples

```html
<u-button variant="danger" disabled="false" autofocus text="Submit" icon="pencil" HoverAnimated="hover-top" ButtonType="soft pill" SocialButtons="facebook"
 visible="true" @click="" @beforeClick="" @afterClick="" loading="true" badge="secondary" PositionBadge="inside"           
 />
```
