# CONFigureGSMSIGNiNCELlALLTHResholdsHIGH

Module: GSM Signaling
Source: d35e28530.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell
 > 
CONFigure:GSM:SIGN<i>:NCELl:ALL:THResholds:HIGH
CONFigure:GSM:SIGN<i>:NCELl:ALL:THResholds:HIGH 
<Valid>, <High>
Configures a common reselection high threshold value applicable to all technologies.
Alternatively to a common threshold you can also use individual thresholds. They are defined per technology via the commands 
CONFigure:GSM:SIGN<i>:NCELl:<Technology>:THResholds:HIGH
. The parameter 
<Valid>
 selects whether common or individual thresholds are used.
Parameters:
<Valid>
OFF |
 
 ON
OFF
: use individual thresholds defined by separate commands
ON
: use common threshold defined by this command
*RST:
OFF
<High>
Range: 
0  to  31
*RST:
5
Example: 
See 
"Configuring Neighbor Cell and Reselection Parameters"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"Threshold"
Top