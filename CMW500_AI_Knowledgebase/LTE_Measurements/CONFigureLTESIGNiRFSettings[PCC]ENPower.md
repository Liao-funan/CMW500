# CONFigureLTESIGNiRFSettings[PCC]ENPower

Module: LTE Measurements
Source: d50c5bfd9d364de7.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for General Measurement Settings
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:ENPower
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:ENPower 
<ExpectedPower>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:ENPower 
<ExpectedPower>
Sets the expected nominal power of the UL signal in manual mode.
If the expected nominal power is calculated automatically according to the UL power control settings, you can only query the result.
To configure the expected nominal power mode, see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings[:
​
PCC]:
​
ENPMode
.
Suffix: 
<c>
1..4
Parameters:
<ExpectedPower>
In manual mode, the range of the expected nominal power can be calculated as follows:
Range (expected nominal power) = range (input power) + external attenuation - margin
The input power range is stated in the data sheet.
*RST:
-20 dBm
Default unit: 
dBm
Firmware/Software: 
V1.0.15.21, SCC command V3.5.20
Manual operation: 
See 
"Expected Nominal Power"
Top