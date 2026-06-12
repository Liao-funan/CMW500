# CONFigureLTEMEASiMEValuationTMODeENPower

Module: LTE Measurements
Source: 6d02b23b17494b51.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:LTE:MEAS<i>:MEValuation:TMODe:ENPower
CONFigure:LTE:MEAS<i>:MEValuation:TMODe:ENPower 
<ExpNomPow>...
Defines the expected nominal power values for all entries of the "TPC Mode" list.
For definition of the corresponding subframe count values, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
TMODe:
​
SCOunt
.
Parameters:
<ExpNomPow>
Comma-separated list of 16 values, for list entry number 0 to 15
The range of the expected nominal power can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - User Margin
The input power range is stated in the data sheet.
*RST:
0 dBm
Default unit: 
dBm
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"TPC Mode"
Top