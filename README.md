# tooltip
sws-tooltip module to work in Angular 5
### To install simply run
npm install npm install sws-tooltip.
To use it in your Angular 5 app import the module.
import {SWSTooltipModule} from 'tooltip.module';
```@NgModule({
imports:[
SWSTooltipModule
],
})  
``` 
In your components html input in html tag sws-tooltip="test". Default position in right. Also may be put position in left - sws-tooltip-pos="left"
###Important! Input to our css file style for tooltip
```
@import "../node_modules/sws-tooltip/tooltip.css";
``` 