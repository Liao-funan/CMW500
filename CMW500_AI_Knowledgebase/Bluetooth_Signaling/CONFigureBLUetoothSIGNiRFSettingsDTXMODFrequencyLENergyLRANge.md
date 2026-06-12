# CONFigureBLUetoothSIGNiRFSettingsDTXMODFrequencyLENergyLRANge

Module: Bluetooth Signaling
Source: 41fa93c60db04a94.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
General Settings
 > 
Dirty Transmitter Settings
 > 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODFrequency:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODFrequency:LENergy:LRANge 
<DriftRate>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODFrequency:LENergy:LE2M 
<DriftRate>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:MODFrequency:LENergy[:LE1M] 
<DriftRate>
Specifies the drift rate for LE dirty transmitter.
Commands for LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<DriftRate>
HDRF |
 
 LDRF
HDRF: 1250 Hz (high drift rate)
LDRF: 625 Hz (low drift rate)
*RST:
LDRF
Example: 
See 
"Configure Dirty Transmitter"
Firmware/Software: 
V3.5.50
V3.5.70: added commands for 
...:LE2M...
 and 
...:LRANge...
Options: 
R&S CMW-KS611
Plus R&S CMW-KS721 for LE2M and LRANge
Manual operation: 
See 
"Modulation Frequency (LE)"
Top