# Description:

Match height of any DOM element/s by using it's selector (class/id, etc.).

# Usage:

Use this `script` tag to your html file before the `</body>` tag:
```
<script src="jquery-3.5.1.min.js" type="text/javascript"></script>
<script src="match-module-height.js" type="text/javascript"></script>
```

Use this in your own script i.e.`script.js` file:

## Match height to one particular selector
This will find the maximum `height` of `.your-selector-name` and apply.
```
$('.your-selector-name').matchModuleHeight();
```

## Match height of a target selector
This will find the height of first `.target-selector` element and apply to `.your-selector-name`.
```
$('.your-selector-name').matchModuleHeight('.target-selector');
```

Change `.your-selector-name` with your own selector.
