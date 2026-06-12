# CONFigureLTESIGNiNCELlALLTHResholdsLOW

Module: LTE Signaling
Source: d35e74114.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell Settings
 > 
CONFigure:LTE:SIGN<i>:NCELl:ALL:THResholds:LOW
CONFigure:LTE:SIGN<i>:NCELl:ALL:THResholds:LOW 
<Valid>, <Low>
Configures a common reselection threshold value "threshX-Low" applicable to all technologies.
Alternatively to a common threshold you can also use individual thresholds. They are defined per technology via the commands 
CONFigure:LTE:SIGN<i>:NCELl:<Technology>:THResholds:LOW
. The parameter 
<Valid>
 selects whether common or individual thresholds are used.
Parameters:
<Valid>
OFF |
 
 ON
OFF: use individual thresholds defined by separate commands
ON: use common threshold defined by this command
*RST:
OFF
<Low>
Range: 
0  to  31
*RST:
5
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"Threshold"
Top