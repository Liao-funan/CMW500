# SOURceNIOTSIGNiCELLSTATe

Module: NBIoT Signaling
Source: 005d787b683e45aa.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SOURce:NIOT:SIGN<i>:CELL:STATe
SOURce:NIOT:SIGN<i>:CELL:STATe 
<Control>
Turns the generator (the cell) on or off.
Setting parameters: 
<Control>
OFF |
 
 ON
Switch generator 
ON
 or 
OFF
*RST:
OFF
Return values: 
<GeneratorState>
OFF |
 
 PENDing |
 
 ON
OFF:
 generator switched off
PEND:
 generator switched on but no signal available yet
ON:
 generator switched on, signal available
*RST:
OFF
Example: 
See 
"Setting Up  a Connection"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Cell"
Top