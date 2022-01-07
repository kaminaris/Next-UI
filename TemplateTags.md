## NextUI Template tags:

Data Text templates allows you to replace a text with custom template,
you can use any combination of those below as well as normal text,
some examples:

* `[name] - [hp:f]` => `Player Surname - 32k`
* `[hp:pct:f]%` => `48%`
* `[name:first] is missing [hp:def:f] health!` => `Player is missing 32k health!`
* `[somethingrandom]` => `[somethingrandom]`

### Name

* `[name]` - full name, no transformations ex `Player Surname`
* `[name:s]` - short name, first 5 characters ex. `Playe`
* `[name:m]` - medium name, first 10 characters ex. `Player Sur`
* `[name:l]` - long name, first 15 characters ex. `Longerplayer Su`
* `[name:first]` - first name (up to first space) ex. `Longerplayer`
* `[name:first:i]` - first name initial first letter. `L`
* `[name:last]` - last nameex. `Name`
* `[name:last:i]` - last name initial first letter ex. `N`

---

### Current HP

* `[hp]` - raw hp number ex `48429`
* `[hp:f]` - hp formatted with SI suffix and no decimal precision ex `48k`
* `[hp:f:1]` - hp formatted with SI suffix and 1 precision ex `48.4k`
* `[hp:f:2]` - hp formatted with SI suffix and 2 precision ex `48.42k`

### Maximum HP

* `[hp:max]` - raw max hp number ex `48429`
* `[hp:max:f]` - max hp formatted with SI suffix and no decimal precision ex `48k`
* `[hp:max:f:1]` - max hp formatted with SI suffix and 1 precision ex `48.4k`
* `[hp:max:f:2]` - max hp formatted with SI suffix and 2 precision ex `48.42k`

### HP Deficit (max hp minus current hp)

* `[hp:def]` - raw hp deficit number ex `48429`
* `[hp:def:f]` - hp deficit formatted with SI suffix and no decimal precision ex `48k`
* `[hp:def:f:1]` - hp deficit formatted with SI suffix and 1 precision ex `48.4k`
* `[hp:def:f:2]` - hp deficit formatted with SI suffix and 2 precision ex `48.42k`


### HP Percentage

* `[hp:pct]` - raw hp percentage number ex `58.143578`
* `[hp:pct:f]` - hp percentage formatted with no decimal precision ex `58`
* `[hp:pct:f:1]` - hp percentage formatted with 1 precision ex `58.1`
* `[hp:pct:f:2]` - hp percentage formatted with 1 precision ex `58.14`

---

### Current Mana

* `[mana]` - raw mana number ex `9623`
* `[mana:f]` - mana formatted with SI suffix and no decimal precision ex `9k`
* `[mana:f:1]` - mana formatted with SI suffix and 1 precision ex `9.6k`
* `[mana:f:2]` - mana formatted with SI suffix and 2 precision ex `9.62k`

### Maximum Mana

* `[mana:max]` - raw max mana number ex `10000`
* `[mana:max:f]` - max mana formatted with SI suffix and no decimal precision ex `10k`
* `[mana:max:f:1]` - max mana formatted with SI suffix and 1 precision ex `10.0k`
* `[mana:max:f:2]` - max mana formatted with SI suffix and 2 precision ex `10.00k`

### Mana Deficit (max hp minus current hp)

* `[mana:def]` - raw mana deficit number ex `3429`
* `[mana:def:f]` - mana deficit formatted with SI suffix and no decimal precision ex `3k`
* `[mana:def:f:1]` - mana deficit formatted with SI suffix and 1 precision ex `3.4k`
* `[mana:def:f:2]` - mana deficit formatted with SI suffix and 2 precision ex `3.42k`

### Mana Percentage

* `[mana:pct]` - raw mana percentage number ex `58.143578`
* `[mana:pct:f]` - mana percentage formatted with no decimal precision ex `58`
* `[mana:pct:f:1]` - mana percentage formatted with 1 precision ex `58.1`
* `[mana:pct:f:2]` - mana percentage formatted with 1 precision ex `58.14`

---

### Job

* `[job]` - character job ex `MCH`
* `[job:lower]` - character job in lowercase ex `mch`

### Level

* `[level]` - character level ex `87`

### Id

* `[id]` - character id ex `12356563`
* `[id:hex]` - character id in hex ex `1002453A`

### Sign

* `[sign]` - character sign id (mark over the head) ex `3`

### Role

* `[role]` - character role either 'tank' or 'healer' or 'dps' ex `tank`
* `[role:upper]` - character role in upper case ex `TANK`

### Distance

* `[distance]` - raw distance to character ex `22.231451`
* `[distance:f]` - distance to character formatted with 0 digit precsion `22`
* `[distance:f:1]` - distance to character formatted with 1 digit precsion `22.2`
* `[distance:f:2]` - distance to character formatted with 2 digit precsion `22.23`


---

### Position

It does not correspond with map coordinates, those are actual game coordinates

#### X

* `[pos:x]` - raw character position x `12.215362345`
* `[pos:x:f]` - character position x formatted with 0 digit precsion `12`
* `[pos:x:f:1]` - character position x formatted with 1 digit precsion `12.2`
* `[pos:x:f:2]` - character position x formatted with 2 digit precsion `12.21`

#### Y

* `[pos:y]` - raw character position y `12.215362345`
* `[pos:y:f]` - character position y formatted with 0 digit precsion `12`
* `[pos:y:f:1]` - character position y formatted with 1 digit precsion `12.2`
* `[pos:y:f:2]` - character position y formatted with 2 digit precsion `12.21`

#### Z

* `[pos:z]` - raw character position z `12.215362345`
* `[pos:z:f]` - character position z formatted with 0 digit precsion `12`
* `[pos:z:f:1]` - character position z formatted with 1 digit precsion `12.2`
* `[pos:z:f:2]` - character position z formatted with 2 digit precsion `12.21`

