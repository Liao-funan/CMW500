# CONFigureLTEMEASiENBRFSettingsENPower

Module: LTE eNodeB Measurements
Source: 01440b2315154c98.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:LTE:MEAS<i>:ENB:RFSettings:ENPower
CONFigure:LTE:MEAS<i>:ENB:RFSettings:ENPower 
<ExpNomPow>
Sets the expected nominal power of the measured RF signal.
Parameters:
<ExpNomPow>
The range of the expected nominal power can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - User Margin
Range: 
-55 dBm to 55 dBm for the input power at the RF COM connectors (please notice also the ranges quoted in the data sheet)
*RST:
0 dBm
Default unit: 
dBm
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.0.20
Top