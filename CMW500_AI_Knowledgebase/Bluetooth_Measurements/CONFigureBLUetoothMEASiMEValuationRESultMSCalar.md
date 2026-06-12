# CONFigureBLUetoothMEASiMEValuationRESultMSCalar

Module: Bluetooth Measurements
Source: cacc4a43247e4bf2.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:MSCalar
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:MSCalar 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:PSCalar 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:PENCoding 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:PVTime 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:DEVMagnitude 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:PDIFference 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:IQABsolute 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:IQDiff 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:IQERror 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:FDEViation 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:FRANge 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:SOBW 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:SACP 
<Enable>
CONFigure:BLUetooth:MEAS<i>:MEValuation:RESult:SGACp 
<Enable>
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. The last mnemonic denotes the view type: statistical modulation results , statistical power results, statistical differential phase encoding results (EDR in CSP), power vs. time results, DEVM (EDR), phase difference (EDR), IQ constellation absolute (EDR), IQ constellation differential (EDR), IQ constellation error (EDR), frequency deviation (BR, LE), frequency range results (BR), spectrum 20 dB bandwidth (BR), spectrum ACP (BR, LE), spectrum gated ACP (EDR). Use 
CONFigure:
​
BLUetooth:
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
 Evaluate results and show view
OFF:
 Do not evaluate results, hide view
*RST:
ON (most measurement results)
Example: 
See 
"Performing Single Shot Measurements"
Firmware/Software: 
V1.0.10.50
V1.0.15.20: added commands for 
SOBW
, 
SAPC
V2.0.20: added command for 
SGAPC
V2.0.20: added commands for 
FRANge
, 
PENCoding
Top