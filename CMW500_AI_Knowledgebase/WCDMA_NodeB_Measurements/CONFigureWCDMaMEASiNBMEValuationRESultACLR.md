# CONFigureWCDMaMEASiNBMEValuationRESultACLR

Module: WCDMA NodeB Measurements
Source: 44133e797fac48ca.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:ACLR
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:ACLR 
<EnableACLR>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:CDERror 
<EnableCDE>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:CDPower 
<EnableCDP>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:CHIP:EVM 
<EnableEVMchip>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:CHIP:MERRor 
<EnableMErrChip>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:CHIP:PERRor 
<EnablePhErrChip>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:EMASk 
<EnableEMask>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:EVMagnitude 
<EnableEVM>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:FERRor 
<EnableFreqError>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:MERRor 
<EnableMagError>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:PERRor 
<EnablePhaseErr>
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:RESult:POWer 
<EnablePower>
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement.
The mnemonic after "RESult" denotes the view type: Adjacent channel leakage power ratio, code domain error, code domain power, error vector magnitude, magnitude error, phase error, emission mask, frequency error, power.
Parameters:
<EnablePower>
OFF |
 
 ON
OFF:
 do not evaluate results, hide the view
ON:
 evaluate results and show the view
*RST:
Depends on measurement
Example: 
See 
"Performing Single-Shot Measurements"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Multi Evaluation > Assign Views"
Top