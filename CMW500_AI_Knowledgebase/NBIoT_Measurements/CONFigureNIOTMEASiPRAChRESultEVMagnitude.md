# CONFigureNIOTMEASiPRAChRESultEVMagnitude

Module: NBIoT Measurements
Source: 8d45e72d144e47c8.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:NIOT:MEAS<i>:PRACh:RESult:EVMagnitude
CONFigure:NIOT:MEAS<i>:PRACh:RESult:EVMagnitude 
<Enable>
CONFigure:NIOT:MEAS<i>:PRACh:RESult:MERRor 
<Enable>
CONFigure:NIOT:MEAS<i>:PRACh:RESult:PERRor 
<Enable>
CONFigure:NIOT:MEAS<i>:PRACh:RESult:IQ 
<Enable>
CONFigure:NIOT:MEAS<i>:PRACh:RESult:PDYNamics 
<Enable>
CONFigure:NIOT:MEAS<i>:PRACh:RESult:TXM 
<Enable>
CONFigure:NIOT:MEAS<i>:PRACh:RESult:EVPReamble 
<Enable>
CONFigure:NIOT:MEAS<i>:PRACh:RESult:PVPReamble 
<Enable>
Enables or disables the evaluation of results and shows or hides the views in the NPRACH measurement.
The mnemonic after "RESult" denotes the view type: error vector magnitude, magnitude error, phase error, I/Q constellation diagram, power dynamics, TX measurement statistical overview, error vector magnitude vs preamble, power vs preamble
For reset values, see 
CONFigure:
​
NIOT:
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
V3.7.20
Manual operation: 
See 
"Multi Evaluation, NPRACH > Assign Views"
Top