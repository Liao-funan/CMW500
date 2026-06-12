# CONFigureWPANMEASiMEValuationRESultEVMChip

Module: LRWPAN Measurements
Source: 914c6c24290f4f2f.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:WPAN:MEAS<i>:MEValuation:RESult:EVMChip
CONFigure:WPAN:MEAS<i>:MEValuation:RESult:EVMChip 
<Enable>
CONFigure:WPAN:MEAS<i>:MEValuation:RESult:IQ 
<Enable>
CONFigure:WPAN:MEAS<i>:MEValuation:RESult:MSCalar 
<Enable>
CONFigure:WPAN:MEAS<i>:MEValuation:RESult:PSCalar 
<Enable>
CONFigure:WPAN:MEAS<i>:MEValuation:RESult:PVTime 
<Enable>
CONFigure:WPAN:MEAS<i>:MEValuation:RESult:SPECtrum 
<Enable>
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. The last mnemonic denotes the view type: EVM vs chip, IQ constellation results, statistical modulation results, statistical power results, power vs. time results, spectrum results. Use 
CONFigure:
​
WPAN:
​
MEAS<i>:
​
MEValuation:
​
RESult[:
​
ALL]
 to enable/disable all result types.
Tip:
 Use 
READ...?
 queries to retrieve results for disabled views.
Parameters:
<Enable>
OFF |
 
 ON
ON:
 evaluate results and show view
OFF:
 do not evaluate results, hide view
*RST:
ON
Example: 
See 
"Performing Single Shot Measurements"
Firmware/Software: 
V3.5.10
V3.5.20: added command for IQ constellation results
Top