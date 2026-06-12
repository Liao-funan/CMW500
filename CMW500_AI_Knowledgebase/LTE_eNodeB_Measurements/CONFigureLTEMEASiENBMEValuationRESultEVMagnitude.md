# CONFigureLTEMEASiENBMEValuationRESultEVMagnitude

Module: LTE eNodeB Measurements
Source: f79a9960c071427d.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:EVMagnitude
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:EVMagnitude 
<Enable>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:MERRor 
<Enable>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:PERRor 
<Enable>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:OSPower 
<Enable>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:SFLatness 
<Enable>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:IQ 
<Enable>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:TXM 
<Enable>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:SEMask 
<Enable>
CONFigure:LTE:MEAS<i>:ENB:MEValuation:RESult:ACLR 
<Enable>
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement.
The mnemonic after "RESult" denotes the view type: error vector magnitude, magnitude error, phase error, OFDM symbol power, spectrum flatness, I/Q constellation diagram, TX measurement statistical overview, spectrum emission mask, adjacent channel leakage power ratio.
For *RST values, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
ENB:
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
V3.0.20
Top