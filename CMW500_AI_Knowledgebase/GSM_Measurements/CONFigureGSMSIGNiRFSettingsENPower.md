# CONFigureGSMSIGNiRFSettingsENPower

Module: GSM Measurements
Source: 6e7d6584c48d4ecc.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Multi-Evaluation Measurement Settings
 > 
CONFigure:GSM:SIGN<i>:RFSettings:ENPower
CONFigure:GSM:SIGN<i>:RFSettings:ENPower 
<ExpectedPower>
Sets the expected nominal power of the UL signal in manual mode or queries the result if the expected nominal power is calculated automatically according to the UL power control.
To configure the expected nominal power mode, see 
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
ENPMode
.
Parameters:
<ExpectedPower>
In manual mode the range of the expected nominal power can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - Margin
The input power range is stated in the data sheet.
*RST:
33 dBm
Default unit: 
dBm
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Expected Nominal Power"
Top