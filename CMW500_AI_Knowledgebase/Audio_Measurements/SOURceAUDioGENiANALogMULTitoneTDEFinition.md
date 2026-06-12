# SOURceAUDioGENiANALogMULTitoneTDEFinition

Module: Audio Measurements
Source: 0d3d28435688454a.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Generators
 > 
Multitone Generator Settings
 > 
SOURce:AUDio:GEN<i>:ANALog:MULTitone:TDEFinition
SOURce:AUDio:GEN<i>:ANALog:MULTitone:TDEFinition 
{<Frequency>, <Level>}...
Configures the frequency and level of the first n tones of the multitone list of the analog generator (n = 1 to 20). Send a parameter pair for each tone to be configured:
{<Frequency>, <Level>}
1
, ..., {<Frequency>, <Level>}
n
A query always returns the complete multitone list (20 pairs of values).
Parameters:
<Frequency>
Frequency of the tone. All tones must have different frequencies.
Range: 
0 Hz  to  21E+3 Hz
Default unit: 
Hz
<Level>
Level of the tone.
For method SEP, the level can be set and queried.
For method TLEV, the level of a setting command is ignored and a query returns the level resulting from the total multitone signal level.
For method selection, see 
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
The total level of the multitone signal must not exceed 5 V.
Range: 
0 V  to  5 V
*RST:
0.05 V
Default unit: 
V
Example: 
See 
"Multitone Measurement"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"List"
Top