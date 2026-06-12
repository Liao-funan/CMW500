# SOURceGPRFGENiLISTDTIMeALL

Module: GPRF Generator
Source: b5910d7d13f34029.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:DTIMe:ALL
SOURce:GPRF:GEN<i>:LIST:DTIMe:ALL 
<AllDwelltimes>...
Defines the transmission times for all frequency/level steps in "Dwell Time" mode. The value is not used in the other list modes (see 
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
Parameters:
<AllDwelltimes>
Comma-separated list of n values, one per frequency/level step, where n < 2001. The query returns 2000 results.
Range: 
200E-6 s  to  20 s
*RST:
0.5 s
Default unit: 
s
Example: 
See 
"Using the Generator List Mode"
Firmware/Software: 
V1.0.2.6, V3.2.10 maximum value decreased from 40 s to 20 s
Manual operation: 
See 
"List"
Top