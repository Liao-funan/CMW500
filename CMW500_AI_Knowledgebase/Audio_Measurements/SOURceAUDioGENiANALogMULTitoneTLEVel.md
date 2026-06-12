# SOURceAUDioGENiANALogMULTitoneTLEVel

Module: Audio Measurements
Source: d593193e13164.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Generators
 > 
Multitone Generator Settings
 > 
SOURce:AUDio:GEN<i>:ANALog:MULTitone:TLEVel
SOURce:AUDio:GEN<i>:ANALog:MULTitone:TLEVel 
<TotalLevel>
Configures or queries the total level of an analog multitone signal.
For method TLEV, a setting command is executed and a query returns the configured level.
For method SEP, a setting command is ignored and a query returns the total level resulting from the levels of the individual tones.
For method configuration, see 
SOURce:
​
AUDio:
​
GEN<i>:
​
ANALog:
​
MULTitone:
​
LSELection
.
Parameters:
<TotalLevel>
Range: 
0 V  to  5 V
*RST:
1 V
Default unit: 
V
Example: 
See 
"Multitone Measurement"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Level Handling"
Top