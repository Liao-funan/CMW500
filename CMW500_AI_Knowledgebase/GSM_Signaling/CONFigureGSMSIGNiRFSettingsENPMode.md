# CONFigureGSMSIGNiRFSettingsENPMode

Module: GSM Signaling
Source: 528308846e9d4f8b.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:GSM:SIGN<i>:RFSettings:ENPMode
CONFigure:GSM:SIGN<i>:RFSettings:ENPMode 
<Mode>
Selects the expected nominal power mode. The expected nominal power of the UL signal can be defined manually or calculated automatically, according to the UL power control settings.
For manual configuration, see:
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
ENPower
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
UMARgin
Parameters:
<Mode>
MANual |
 
 ULPC
MANual
: The expected nominal power and margin are specified manually.
ULPC
: The expected nominal power is calculated according to the UL power control settings. For the margin, 7 dB are applied.
*RST:
ULPC
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Exp. Nominal Power, Margin"
Top