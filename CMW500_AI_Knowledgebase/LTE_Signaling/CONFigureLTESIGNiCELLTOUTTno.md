# CONFigureLTESIGNiCELLTOUTTno

Module: LTE Signaling
Source: 1dff2f3e0eff47a4.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer and Constants
 > 
CONFigure:LTE:SIGN<i>:CELL:TOUT:T<no>
CONFigure:LTE:SIGN<i>:CELL:TOUT:T<no> 
<Value>
Configures one of the following timers:
T3402, attach/TAU reattempts
T3412, periodic tracking area updates
The information elements support the values 1 to 31 combined with the units 2 seconds, 1 minute and 6 minutes.
This command configures the timer value in seconds. So there are three subranges with different increments.
Suffix: 
<no>
3402, 3412
Parameters:
<Value>
Range: 
2 s  to  11160 s
Increment: 
2 s (2 s to 62 s), 60 s (120 s to 1860 s), 360 s (2160 s to 11160 s)
*RST:
720 s for T3402, 2 s for T3412
Additional parameters: OFF | ON (disables | enables the timer)
Example: 
See 
"Configuring Other Network Settings"
Firmware/Software: 
V3.0.10, V3.5.40: added T3402
Manual operation: 
See 
"T3402"
Top