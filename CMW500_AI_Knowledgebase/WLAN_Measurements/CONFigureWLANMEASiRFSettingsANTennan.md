# CONFigureWLANMEASiRFSettingsANTennan

Module: WLAN Measurements
Source: abe27060884e4f3f.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
CONFigure:WLAN:MEAS<i>:RFSettings:ANTenna<n>
CONFigure:WLAN:MEAS<i>:RFSettings:ANTenna<n> 
<Connector>[, <ExtAtt>]
Assigns an RF input connector and optionally an external attenuation to antenna <n>.
The command is relevant for the scenarios "MIMO 2x2", "MIMO 4x4", "MIMO 8x8" and for 80+80 MHz signals with a separate antenna per segment.
For 80+80 MHz signals, the antenna numbering continues for the second segment. Example: Two antennas per segment. Segment 0 uses antenna 1 and 2. Segment 1 uses antenna 3 and 4.
For connector values, see 
"Values for RF Path Selection"
.
Suffix: 
<n>
1..8
Parameters:
<Connector>
RF connector to be assigned to antenna <n>
<ExtAtt>
External attenuation component for antenna <n>
Range: 
-50 dB  to  90 dB
*RST:
0 dB
Default unit: 
dB
Firmware/Software: 
V3.5.121
V3.7.10 added <ExtAtt>
Manual operation: 
See 
"RF Routing"
Top