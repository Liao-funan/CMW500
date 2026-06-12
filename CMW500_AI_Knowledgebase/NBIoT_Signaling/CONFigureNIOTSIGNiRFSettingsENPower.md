# CONFigureNIOTSIGNiRFSettingsENPower

Module: NBIoT Signaling
Source: 4f379f31341e4130.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:NIOT:SIGN<i>:RFSettings:ENPower
CONFigure:NIOT:SIGN<i>:RFSettings:ENPower 
<ExpectedPower>
Sets the expected nominal power of the UL signal in manual mode.
If the expected nominal power is calculated automatically according to the UL power control settings, you can only query the result.
To configure the expected nominal power mode, see 
CONFigure:
​
NIOT:
​
SIGN<i>:
​
RFSettings:
​
ENPMode
.
Parameters:
<ExpectedPower>
In manual mode, the range of the expected nominal power can be calculated as follows:
Range (expected nominal power) = range (input power) + external attenuation - margin
The input power range is stated in the data sheet.
*RST:
23 dBm
Default unit: 
dBm
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Exp. Nominal Power..., Margin"
Top