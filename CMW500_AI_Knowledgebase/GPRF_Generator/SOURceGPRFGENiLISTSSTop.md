# SOURceGPRFGENiLISTSSTop

Module: GPRF Generator
Source: ec1c091fc43841e0.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:SSTop
SOURce:GPRF:GEN<i>:LIST:SSTop 
<StartIndex>, <StopIndex>[, <GotoIndex>]
Defines the first and last generated frequency/level steps in list mode.
Parameters:
<StartIndex>
Range: 
0 to min{<StopIndex>,1999}
*RST:
0
<StopIndex>
Range: 
<StartIndex> to 1999
*RST:
19
Setting parameters: 
<GotoIndex>
The start index for all but the first generator cycle in continuous mode. See also 
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
GOTO
.
Range: 
<StartIndex> to <StopIndex>
Example: 
See 
"Using the Generator List Mode"
Firmware/Software: 
V1.0.0.4
V3.0.12 <GotoIndex> added
Manual operation: 
See 
"List Section"
Top