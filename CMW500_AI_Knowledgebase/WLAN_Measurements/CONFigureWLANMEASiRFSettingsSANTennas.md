# CONFigureWLANMEASiRFSettingsSANTennas

Module: WLAN Measurements
Source: 18d874b50df84bc6.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
CONFigure:WLAN:MEAS<i>:RFSettings:SANTennas
CONFigure:WLAN:MEAS<i>:RFSettings:SANTennas 
<SepAnt>
This command is available on the R&S
 
CMW100/CMW with MUA only.
It specifies whether the DUT uses separate antennas for the two segments of an 80+80 MHz signal.
To assign RF input connectors to the two antennas, see 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
RFSettings:
​
ANTenna<n>
.
Parameters:
<SepAnt>
ON |
 
 OFF
ON
: separate antennas for each segment
OFF
: same antennas for both segments
*RST:
OFF
Firmware/Software: 
V3.5.121
Manual operation: 
See 
"Use Sep. Ant. for 80+80 MHz"
Top