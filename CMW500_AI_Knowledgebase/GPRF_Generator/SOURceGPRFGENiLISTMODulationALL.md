# SOURceGPRFGENiLISTMODulationALL

Module: GPRF Generator
Source: 6598b2884e3e46d5.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:MODulation:ALL
SOURce:GPRF:GEN<i>:LIST:MODulation:ALL 
<AllModulations>...
Defines or queries the "Mod. On / Off" setting of all frequency/level steps. The setting is valid only in arbitrary baseband mode (see 
SOURce:
​
GPRF:
​
GEN<i>:
​
BBMode
).
Parameters:
<AllModulations>
OFF |
 
 ON
Comma-separated list of n values, one per frequency/level step, where n < 2001. The query returns 2000 results.
Each value switches the modulation of a step 
OFF
 or 
ON
.
*RST:
ON
Example: 
See 
"Using the Generator List Mode"
Firmware/Software: 
V1.0.2.6
Manual operation: 
See 
"List"
Top