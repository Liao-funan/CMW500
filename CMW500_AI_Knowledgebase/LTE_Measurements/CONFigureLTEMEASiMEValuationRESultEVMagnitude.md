# CONFigureLTEMEASiMEValuationRESultEVMagnitude

Module: LTE Measurements
Source: fdf986763d7b4a7c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:LTE:MEAS<i>:MEValuation:RESult:EVMagnitude
CONFigure:LTE:MEAS<i>:MEValuation:RESult:EVMagnitude 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:EVMC 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:MERRor 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:PERRor 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:IEMissions 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:IQ 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:ESFLatness 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:TXM 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:SEMask 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:ACLR 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:RBATable 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:PMONitor 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:BLER 
<Enable>
CONFigure:LTE:MEAS<i>:MEValuation:RESult:PDYNamics 
<Enable>
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement.
Mnemonic
View type
Mnemonic
View type
EVMagnitude
Error vector magnitude
EVMC
EVM vs. subcarrier
MERRor
Magnitude error
PERRor
Phase error
IEMissions
Inband emissions
IQ
I/Q constellation diagram
ESFLatness
Equalizer spectrum flatness
TXM
TX meas. statistical overview
SEMask
Spectrum emission mask
ACLR
Adj. channel leakage power ratio
RBATable
Resource block allocation table
PMONitor
Power monitor
BLER
Block error ratio
PDYNamics
Power dynamics
For reset values, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
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
V1.0.10.1
RBATable and PMONitor: V1.0.15.20
BLER: V1.0.15.21
ESFLatness, PDYNamics: V2.0.10
Manual operation: 
See 
"Multi Evaluation, PRACH > Assign Views"
Top