# SOURceGPRFGENiLISTDTIMe

Module: GPRF Generator
Source: 0dcd237dfb2a4cdd.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:DTIMe
SOURce:GPRF:GEN<i>:LIST:DTIMe 
<Index>, <Dwelltime>
SOURce:GPRF:GEN<i>:LIST:DTIMe? 
<Index>
Defines or queries the transmission time for a selected frequency/level step in "Dwell Time" mode. The value is not used in the other list modes (see 
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
<Dwelltime>
Dwell time for the frequency/level step
Range: 
200E-6 s  to  20 s
Increment: 
10E-9 s
*RST:
0.5 s
Default unit: 
s
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
V1.0.0.4 (extended by <Index> in V1.0.2.6)
V3.2.10 maximum value decreased from 40 s to 20 s
Manual operation: 
See 
"List"
Top