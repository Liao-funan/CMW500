# CONFigureWLANSIGNiRFSettingsBOPower

Module: WLAN Signaling
Source: 7c943c456c444409.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
RF Settings
 > 
CONFigure:WLAN:SIGN<i>:RFSettings:BOPower
CONFigure:WLAN:SIGN<i>:RFSettings:BOPower 
<BurstOutputPow>
Sets the burst power of the transmitted signal.
The allowed value range depends on the used connector and the external attenuation in the output path.
Minimum = level
connector, min
 - ext. att.
out
Maximum = level
connector, max
 - ext. att.
out
With level
connector, min
 = -145.98 dBm (-137.98 dBm), level
connector, max
 = -15.98 dBm (-2.98 dBm) for RF COM (RF OUT); please also notice the ranges quoted in the data sheet.
Parameters:
<BurstOutputPow>
Range: 
see above
*RST:
-40 dBm
Default unit: 
dBm
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.1.30
V2.1.40: range shifted
V3.2.11: reset changed from -80 dBm to -40 dBm
Manual operation: 
See 
"RF TX Burst Power"
Top