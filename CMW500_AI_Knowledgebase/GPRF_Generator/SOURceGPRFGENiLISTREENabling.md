# SOURceGPRFGENiLISTREENabling

Module: GPRF Generator
Source: 2718a25b06eb49ac.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:REENabling
SOURce:GPRF:GEN<i>:LIST:REENabling 
<Index>, <Reenabling>
SOURce:GPRF:GEN<i>:LIST:REENabling? 
<Index>
Defines or queries the "Reenable On / Off" setting of a selected frequency/level step. The setting is valid if the list increment is enabled by a measurement (see 
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
INCRement:
​
ENABling
).
Parameters:
<Reenabling>
OFF |
 
 ON
Disable/enable retriggered frequency/level steps
*RST:
ON (step 1) and OFF (all other steps)
Parameters for setting and query: 
<Index>
Number of the frequency/level step in the table
Range: 
0  to  1999
*RST:
n/a
Example: 
See 
"Using the Generator List Mode"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"List"
Top