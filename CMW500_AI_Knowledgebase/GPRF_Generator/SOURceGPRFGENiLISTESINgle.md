# SOURceGPRFGENiLISTESINgle

Module: GPRF Generator
Source: 0492f4274a9b422f.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:ESINgle
SOURce:GPRF:GEN<i>:LIST:ESINgle
Starts a single generator cycle through the frequency/level list.
This command is available only if:
The list mode is enabled (see 
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST
).
And the "Single" list mode is set (
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
REPetition
).
And the increment "Dwell Time" is set (
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
INCRement
).
Example: 
See 
"Using the Arbitrary Mode"
The active list index can be queried using 
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
AINDex?
.
Usage: 
Event
Firmware/Software: 
V1.0.2.7
Manual operation: 
See 
"Additional Softkeys and Hotkeys"
Top