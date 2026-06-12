# CONFigureLTESIGNiCAGGregationSET

Module: LTE Measurements
Source: 2d03afb71e194885.htm

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
CONFigure:LTE:SIGN<i>:CAGGregation:SET
CONFigure:LTE:SIGN<i>:CAGGregation:SET 
<SetApos1>, <SetApos2>, <SetApos3>, <SetApos4>, <SetBpos1>, <SetBpos2>, <SetBpos3>, <SetBpos4>
Configures the alignment of uplink component carriers for intraband contiguous uplink carrier aggregation.
The command configures set A and set B. It aligns all component carriers of a set for contiguous UL CA.
Rules for valid parameter combinations:
Enable the uplink of a component carrier before adding it to a set.
For scenarios with fewer than 4 carriers, use only set A and disable set B.
To disable a set, select INV for all four parameters of the set.
To use a set, select the master carrier for <...pos1> and a second carrier for <...pos2>.
To align only two carriers, set <...pos3> and <...pos4> to INV.
To align three carriers, select <...pos3> and set <...pos4> to INV.
To align four carriers, select <...pos3> and <...pos4>.
All carriers of a set must fit into the band of the master carrier, without changing the frequency of the master carrier.
Parameters:
<SetApos1>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Master carrier of set A
<SetApos2>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Second carrier of set A
<SetApos3>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Third carrier of set A
<SetApos4>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Fourth carrier of set A
<SetBpos1>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Master carrier of set B
<SetBpos2>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Second carrier of set B
<SetBpos3>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Third carrier of set B
<SetBpos4>
INV |
 
 PCC |
 
 SCC1 |
 
 SCC2 |
 
 SCC3 |
 
 SCC4 |
 
 SCC5 |
 
 SCC6 |
 
 SCC7
Fourth carrier of set B
Firmware/Software: 
V3.7.30
Options: 
R&S CMW-KS512
Manual operation: 
See 
"Adjust Carrier Spacing"
Top