# CONFigureLTEMEASiCAGGregationMAPingSCCc

Module: LTE Measurements
Source: 41579cf4553e41be.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
CONFigure:LTE:MEAS<i>:CAGGregation:MAPing:SCC<c>?
CONFigure:LTE:MEAS<i>:CAGGregation:MAPing:SCC<c>? 
This command is only relevant for combined signal path measurements with contiguous uplink CA.
It queries to which CC the SCC<n> is mapped.
The measurement identifies the aggregated carriers as CC1 to CC4. The signaling application uses PCC and SCC<n>.
Suffix: 
<c>
1..7
Return values: 
<CC>
String indicating the CC, examples: "CC1", "CC2", "INV"
"INV" means that the SCC<n> is not contained in the measured set of aggregated uplink carriers.
Usage: 
Query only
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Scenario = Combined Signal Path"
Top