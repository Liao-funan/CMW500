# SOURceDATACONTrolSTATe

Module: Data Application Unit
Source: da82743f90b04ce7.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
General Settings
 > 
SOURce:DATA:CONTrol:STATe
SOURce:DATA:CONTrol:STATe 
<Control>
Switches the DAU on or off. These actions are irrelevant for normal operation of the DAU. For troubleshooting, a reboot of the DAU can be initiated by switching if off and on again.
Setting parameters: 
<Control>
ON |
 
 OFF
Switch DAU 
ON
 or 
OFF
Return values: 
<DAUState>
OFF |
 
 PENDing |
 
 ON
OFF
: DAU switched off
PEND
: DAU has been switched on and is booting
ON
: DAU switched on and ready for operation
*RST:
ON
Example: 
See 
"Rebooting the DAU"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"DAU (parameter)"
Top