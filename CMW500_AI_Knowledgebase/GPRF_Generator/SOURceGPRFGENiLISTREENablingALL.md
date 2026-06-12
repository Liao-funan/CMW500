# SOURceGPRFGENiLISTREENablingALL

Module: GPRF Generator
Source: 3fbf1900e96c42e8.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:REENabling:ALL
SOURce:GPRF:GEN<i>:LIST:REENabling:ALL 
<AllReenables>...
Defines or queries the "Reenable On / Off" setting of all frequency/level steps. The setting is valid if the list increment is enabled by a measurement (see 
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
<AllReenables>
OFF |
 
 ON
Comma-separated list of n values, one per frequency/level step, where n < 2001. The query returns 2000 results.
Each value disables/enables a retriggered frequency/level step.
*RST:
ON (step 1) and OFF (all other steps)
Example: 
See 
"Using the Generator List Mode"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"List"
Top