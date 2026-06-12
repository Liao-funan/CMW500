# CONFigureWCDMaMEASiRFSettingsCARRiercFREQuency

Module: WCDMA Measurements
Source: efc76e7d166840ba.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WCDMa:MEAS<i>:RFSettings:CARRier<c>:FREQuency
CONFigure:WCDMa:MEAS<i>:RFSettings:CARRier<c>:FREQuency 
<Frequency>
Selects the center frequency of the RF analyzer.
For the combined signal path scenario, use:
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
CARRier<c>:
​
FREQuency:
​
UL
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
CARRier<c>:
​
FOFFset:
​
UL
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
CARRier<c>:
​
CHANnel:
​
UL
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Suffix: 
<c>
1..2
Uplink carrier
Parameters:
<Frequency>
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
1.9226E+9 Hz
Default unit: 
Hz
Using the unit CH the frequency can be set via the channel number. The allowed channel number range depends on the operating band, see 
"Operating Bands"
.
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.0.4
V3.0.10: Minimum value decreased to 70 MHz
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KM405 for multi-carrier in uplink
Manual operation: 
See 
"Band / Channel / Frequency"
Top