# CONFigureGSMMEASiMEValuationRESultPVTime

Module: GSM Measurements
Source: 643149d641854e15.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:GSM:MEAS<i>:MEValuation:RESult:PVTime
CONFigure:GSM:MEAS<i>:MEValuation:RESult:PVTime 
<Enable>
CONFigure:GSM:MEAS<i>:MEValuation:RESult:EVMagnitude 
<Enable>
CONFigure:GSM:MEAS<i>:MEValuation:RESult:MERRor 
<Enable>
CONFigure:GSM:MEAS<i>:MEValuation:RESult:PERRor 
<Enable>
CONFigure:GSM:MEAS<i>:MEValuation:RESult:IQ 
<Enable>
CONFigure:GSM:MEAS<i>:MEValuation:RESult:SMFRequency 
<Enable>
CONFigure:GSM:MEAS<i>:MEValuation:RESult:SMTime 
<Enable>
CONFigure:GSM:MEAS<i>:MEValuation:RESult:SSFRequency 
<Enable>
CONFigure:GSM:MEAS<i>:MEValuation:RESult:SSTime 
<Enable>
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. The last mnemonic denotes the view type: Power vs. time, error vector magnitude, magnitude error, phase error, I/Q constellation, spectrum modulation frequency, spectrum modulation time, spectrum switching frequency, spectrum switching time.
Use 
READ...?
 queries to retrieve results for disabled views.
Parameters:
<Enable>
ON |
 
 OFF
ON:
 Evaluate results and show view
OFF:
 Do not evaluate results, hide view
*RST:
ON (all except MERRor, SMTime, SSTime, IQ)
Example: 
See 
"Configuring a Spectrum Measurement"
Firmware/Software: 
V1.0.0.4 (V1.0.5.3 for IQ)
Manual operation: 
See 
"Assign Views"
Top