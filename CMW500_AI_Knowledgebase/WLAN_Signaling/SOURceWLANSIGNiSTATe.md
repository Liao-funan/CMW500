# SOURceWLANSIGNiSTATe

Module: WLAN Signaling
Source: 6bbef216a39246cd.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Signaling Control and States
 > 
SOURce:WLAN:SIGN<i>:STATe
SOURce:WLAN:SIGN<i>:STATe 
<MainState>
Turns the generator (the cell) on or off.
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
"Associating the DUT"
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"ON | OFF (key) / WLAN Signaling (softkey)"
Top