# SOURceWCDMaSIGNiCELLSTATe

Module: WCDMA Signaling
Source: d5027101e38350.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SOURce:WCDMa:SIGN<i>:CELL:STATe
SOURce:WCDMa:SIGN<i>:CELL:STATe 
<Control>
Turns the generator (the cell) on or off.
See also: 
"Generator Control"
Setting parameters: 
<Control>
ON |
 
 OFF
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
"Switching On the Cell Signal and the UE (Signaling)"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Cell"
Top