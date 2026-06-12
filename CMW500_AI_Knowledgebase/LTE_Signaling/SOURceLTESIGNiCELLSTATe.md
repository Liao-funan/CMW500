# SOURceLTESIGNiCELLSTATe

Module: LTE Signaling
Source: 4d9b4520ac1545bf.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
General Commands
 > 
SOURce:LTE:SIGN<i>:CELL:STATe
SOURce:LTE:SIGN<i>:CELL:STATe 
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
"Attaching the UE and Activating SCCs"
Firmware/Software: 
V1.0.15.20
Manual operation: 
See 
"Cell"
Top