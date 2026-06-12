# CONFigureGSMMEASiMEValuationTSEQuence

Module: GSM Measurements
Source: 4bebafc5e322408a.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:TSEQuence
CONFigure:GSM:MEAS<i>:MEValuation:TSEQuence 
<TSC>
Selects the training sequence of the analyzed bursts.
For the combined signal path scenario, use 
CONFigure:
​
GSM:
​
SIGN<i>:
​
CELL:
​
BCC
.
Parameters:
<TSC>
OFF |
 
 TSC0 |
 
 TSC1 |
 
 TSC2 |
 
 TSC3 |
 
 TSC4 |
 
 TSC5 |
 
 TSC6 |
 
 TSC7 |
 
 TSCA |
 
 DUMM
OFF:
 Analyze all bursts, irrespective of their training sequence
TSC0 ... TSC7:
Analyze bursts with a particular GSM training sequence
TSCA:
 Analyze bursts with any of the GSM training sequences TSC0 to TSC7
DUMMY:
 Analyze GSM-specific dummy bursts
*RST:
TSC0
Example: 
See 
"Selecting Specific Burst Types"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Training Sequence"
Top