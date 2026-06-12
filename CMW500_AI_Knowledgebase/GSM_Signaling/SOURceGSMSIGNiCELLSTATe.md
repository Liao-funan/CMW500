# SOURceGSMSIGNiCELLSTATe

Module: GSM Signaling
Source: e07d0073bee54454.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SOURce:GSM:SIGN<i>:CELL:STATe
SOURce:GSM:SIGN<i>:CELL:STATe 
<Control>
Turns the GSM signaling generator (DL GSM signal) off or on.
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
 
 ON |
 
 RFHandover
OFF:
 generator switched off
PEND:
 generator switched on but no signal available yet
ON:
 generator switched on, signal available
RFHandover:
 ready to receive a handover from another signaling application
*RST:
OFF
Example: 
See 
"Switching On the Cell Signal and the MS"
Firmware/Software: 
V1.0.15.0
V3.0.10: RFHandover added
Manual operation: 
See 
"ON | OFF (key) / GSM Signaling (softkey)"
Top