# CONFigureLTEMEASiPRAChRESultEVMagnitude

Module: LTE Measurements
Source: 24fa22f26c9e4be5.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:LTE:MEAS<i>:PRACh:RESult:EVMagnitude
CONFigure:LTE:MEAS<i>:PRACh:RESult:EVMagnitude 
<Enable>
CONFigure:LTE:MEAS<i>:PRACh:RESult:MERRor 
<Enable>
CONFigure:LTE:MEAS<i>:PRACh:RESult:PERRor 
<Enable>
CONFigure:LTE:MEAS<i>:PRACh:RESult:IQ 
<Enable>
CONFigure:LTE:MEAS<i>:PRACh:RESult:PDYNamics 
<Enable>
CONFigure:LTE:MEAS<i>:PRACh:RESult:TXM 
<Enable>
CONFigure:LTE:MEAS<i>:PRACh:RESult:EVPReamble 
<Enable>
CONFigure:LTE:MEAS<i>:PRACh:RESult:PVPReamble 
<Enable>
Enables or disables the evaluation of results and shows or hides the views in the PRACH measurement.
The mnemonic after "RESult" denotes the view type: error vector magnitude, magnitude error, phase error, I/Q constellation diagram, power dynamics, TX measurement statistical overview, error vector magnitude vs preamble, power vs preamble
For reset values, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
PRACh:
​
RESult[:
​
ALL]
.
Parameters:
<Enable>
OFF |
 
 ON
OFF:
 Do not evaluate results, hide the view
ON:
 Evaluate results and show the view
*RST:
Depends on measurement
Firmware/Software: 
V2.0.10
V2.1.20: 
...:EVPReamble
 and 
...:PVPReamble
 added
Manual operation: 
See 
"Multi Evaluation, PRACH > Assign Views"
Top