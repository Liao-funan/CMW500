# CONFigureLTEMEASiCAGGregationMAPingPCC

Module: LTE Measurements
Source: 8a63998fb15e45b0.htm

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
CONFigure:LTE:MEAS<i>:CAGGregation:MAPing:PCC?
CONFigure:LTE:MEAS<i>:CAGGregation:MAPing:PCC? 
This command is only relevant for combined signal path measurements with contiguous uplink CA.
It queries to which CC the PCC is mapped.
The measurement identifies the aggregated carriers as CC1 to CC4. The signaling application uses PCC and SCC<n>.
Return values: 
<CC>
String indicating the CC, examples: "CC1", "CC2", "INV"
"INV" means that the PCC is not contained in the measured set of aggregated uplink carriers.
Usage: 
Query only
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Scenario = Combined Signal Path"
Top