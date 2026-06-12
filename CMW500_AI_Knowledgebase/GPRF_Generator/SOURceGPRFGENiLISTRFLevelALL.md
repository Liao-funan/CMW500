# SOURceGPRFGENiLISTRFLevelALL

Module: GPRF Generator
Source: e10ec7e3e6b6447e.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:RFLevel:ALL
SOURce:GPRF:GEN<i>:LIST:RFLevel:ALL 
<AllLevels>...
Defines the levels of all frequency/level steps.
Parameters:
<AllLevels>
Comma-separated list of n values, one per frequency/level step, where n < 2001. The query returns 2000 results.
Range: 
Depends on the connector, please notice the ranges quoted in the data sheet
Increment: 
0.01 dBm
*RST:
-30 dBm
Default unit: 
dBm
Additional parameters: OFF | ON (disables | enables the frequency/level step)
Example: 
See 
"Using the Generator List Mode"
Firmware/Software: 
V1.0.2.6
Manual operation: 
See 
"List"
Top