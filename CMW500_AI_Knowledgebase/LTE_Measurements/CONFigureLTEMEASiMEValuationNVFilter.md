# CONFigureLTEMEASiMEValuationNVFilter

Module: LTE Measurements
Source: 0d095908a0024e99.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:NVFilter
CONFigure:LTE:MEAS<i>:MEValuation:NVFilter 
<NRBViewFilter>
Specifies, enables or disables the number of resource blocks (NRB) view filter. If the filter is active, only slots with a matching number of allocated resource blocks are measured.
Within the indicated input range, only specific numbers are allowed as defined in 3GPP TS 36.211. For details, see 
"Resources in Time and Frequency Domain"
.
Parameters:
<NRBViewFilter>
Number of allocated resource blocks
Range: 
1  to  100
*RST:
OFF
Additional parameters: OFF | ON (disables | enables the filter)
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"NRB"
Top