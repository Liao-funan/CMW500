# CONFigureLTEMEASiCAGGregationMAPing

Module: LTE Measurements
Source: c25e5f09549e4fb1.htm

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
CONFigure:LTE:MEAS<i>:CAGGregation:MAPing?
CONFigure:LTE:MEAS<i>:CAGGregation:MAPing? 
This command is only relevant for combined signal path measurements with contiguous uplink CA.
It queries which carriers are mapped to CC1 to CC4.
The measurement identifies the aggregated carriers as CC1 to CC4. The signaling application uses PCC and SCC<n>.
A returned INV means that no carrier is mapped to the CC.
Return values: 
<CC1>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Carrier mapped to CC1
<CC2>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Carrier mapped to CC2
<CC3>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Carrier mapped to CC3
<CC4>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Carrier mapped to CC4
Usage: 
Query only
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Scenario = Combined Signal Path"
Top