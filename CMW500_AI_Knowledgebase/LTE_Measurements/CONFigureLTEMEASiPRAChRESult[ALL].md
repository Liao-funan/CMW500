# CONFigureLTEMEASiPRAChRESult[ALL]

Module: LTE Measurements
Source: 86a532ffee5f45f0.htm

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
CONFigure:LTE:MEAS<i>:PRACh:RESult[:ALL]
CONFigure:LTE:MEAS<i>:PRACh:RESult[:ALL] 
<EVM>, <MagnitudeError>, <PhaseError>, <IQ>, <PowerDynamics>, <TXMeasurement>[, <EVMvsPreamble>, <PowervsPreamble>]
Enables or disables the evaluation of results and shows or hides the views in the PRACH measurement. This command combines all other 
CONFigure:LTE:MEAS<i>:PRACh:RESult...
 commands.
Parameters:
<EVM>
OFF |
 
 ON
Error vector magnitude
OFF:
 Do not evaluate results, hide the view
ON:
 Evaluate results and show the view
*RST:
ON
<MagnitudeError>
OFF |
 
 ON
Magnitude error
*RST:
OFF
<PhaseError>
OFF |
 
 ON
Phase error
*RST:
OFF
<IQ>
OFF |
 
 ON
I/Q constellation diagram
*RST:
OFF
<PowerDynamics>
OFF |
 
 ON
Power dynamics
*RST:
ON
<TXMeasurement>
OFF |
 
 ON
Statistical overview
*RST:
ON
<EVMvsPreamble>
OFF |
 
 ON
Error vector magnitude vs preamble
*RST:
OFF
<PowervsPreamble>
OFF |
 
 ON
Power vs preamble
*RST:
OFF
Example: 
See 
"Performing Single-Shot Measurements"
Firmware/Software: 
V2.0.10
V2.1.20: added <EVMvsPreamble> and <PowervsPreamble>
Manual operation: 
See 
"Multi Evaluation, PRACH > Assign Views"
Top