# CONFigureLTEMEASiMEValuationTMODeRLEVel

Module: LTE Measurements
Source: 2719574cce2d4919.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:TMODe:RLEVel?
CONFigure:LTE:MEAS<i>:MEValuation:TMODe:RLEVel? 
Queries the reference level for all entries of the "TPC Mode" list. The reference level is calculated from the expected nominal power of each entry and the user margin.
Return values: 
<ReferenceLevel>
Comma-separated list of 16 values, for list entry number 0 to 15
The range of the reference levels can be calculated as follows:
Range (Reference Level) = Range (Input Power) + External Attenuation
The input power range is stated in the data sheet.
Default unit: 
dBm
Example: 
See 
"Specifying Measurement-Specific Settings"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"TPC Mode"
Top