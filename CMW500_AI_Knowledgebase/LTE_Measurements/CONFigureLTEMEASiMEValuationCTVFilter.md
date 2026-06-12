# CONFigureLTEMEASiMEValuationCTVFilter

Module: LTE Measurements
Source: befa51609a0a4d74.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:CTVFilter
CONFigure:LTE:MEAS<i>:MEValuation:CTVFilter 
<ChannelType>
Specifies, enables or disables the channel type view filter. If the filter is active, only slots with detected channel type PUSCH or PUCCH are measured.
Parameters:
<ChannelType>
PUSCh |
 
 PUCCh |
 
 ON |
 
 OFF
PUSCh
: measure only physical uplink shared channel
PUCCh
: measure only physical uplink control channel
ON
: enable the filter
OFF
: disable the filter
*RST:
OFF (PUSC)
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Channel Type"
Top