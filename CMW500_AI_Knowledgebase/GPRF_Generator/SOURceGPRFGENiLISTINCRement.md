# SOURceGPRFGENiLISTINCRement

Module: GPRF Generator
Source: 5324e14047e54ef0.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:INCRement
SOURce:GPRF:GEN<i>:LIST:INCRement 
<ListIncrSrc>
Defines how the RF generator steps through the list.
Parameters:
<ListIncrSrc>
String parameter, specifies the source for the list increment. Examples:
'Dwell Time'
The generator transmits at each frequency/level step for the selected dwell time (
SOURce:
​
GPRF:
​
GEN<i>:
​
LIST:
​
DTIMe
)
'GPRF Gen<i>: <some marker>'
List incremented by a marker in the played-back ARB file (only for baseband mode ARB, see 
SOURce:
​
GPRF:
​
GEN<i>:
​
BBMode
)
'Some measurement' (e.g. 'GPRF Meas<i>: Power')
List incremented in line with a running measurement
Use 
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
CATalog?
 to query the list of possible sources for the current HW/SW configuration.
Example: 
See 
"Using the Generator List Mode"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"List Increment"
Top