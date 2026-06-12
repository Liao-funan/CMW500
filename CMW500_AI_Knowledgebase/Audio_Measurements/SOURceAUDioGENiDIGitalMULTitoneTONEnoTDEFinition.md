# SOURceAUDioGENiDIGitalMULTitoneTONEnoTDEFinition

Module: Audio Measurements
Source: 32aa5b6394ee4339.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Generators
 > 
Multitone Generator Settings
 > 
SOURce:AUDio:GEN<i>:DIGital:MULTitone:TONE<no>:TDEFinition
SOURce:AUDio:GEN<i>:DIGital:MULTitone:TONE<no>:TDEFinition 
<Frequency>, <Level>
Configures a selected tone of the multitone list of the digital generator.
Suffix: 
<no>
1..20
Selects the tone
Parameters:
<Frequency>
Frequency of the tone. All tones must have different frequencies.
Range: 
0 Hz  to  21E+3 Hz
*RST:
1000 * <no>
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
DIGital:
​
MULTitone:
​
LSELection
.
The total level of the multitone signal must not exceed 1 FS.
Range: 
0 FS  to  1 FS
*RST:
0.05 FS
Default unit: 
FS
Example: 
See 
"Multitone Measurement"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"List"
Top