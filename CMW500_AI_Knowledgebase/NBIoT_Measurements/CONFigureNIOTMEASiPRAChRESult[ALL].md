# CONFigureNIOTMEASiPRAChRESult[ALL]

Module: NBIoT Measurements
Source: 3abdf89b78064b83.htm

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
CONFigure:NIOT:MEAS<i>:PRACh:RESult[:ALL]
CONFigure:NIOT:MEAS<i>:PRACh:RESult[:ALL] 
<EVM>, <MagnitudeError>, <PhaseError>, <IQ>, <PowerDynamics>, <TXMeasurement>[, <EVMvsPreamble>, <PowervsPreamble>]
Enables or disables the evaluation of results and shows or hides the views in the NPRACH measurement. This command combines all other 
CONFigure:NIOT:MEAS<i>:PRACh:RESult...
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
V3.7.20
Manual operation: 
See 
"Multi Evaluation, NPRACH > Assign Views"
Top