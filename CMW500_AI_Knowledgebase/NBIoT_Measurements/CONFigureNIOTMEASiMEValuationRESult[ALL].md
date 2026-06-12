# CONFigureNIOTMEASiMEValuationRESult[ALL]

Module: NBIoT Measurements
Source: 5636f88581bd4bcb.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:RESult[:ALL]
CONFigure:NIOT:MEAS<i>:MEValuation:RESult[:ALL] 
<EVM>, <MagnitudeError>, <PhaseError>, <InbandEmissions>, <IQ>, <TXMeasurement>, <SpecEmMask>, <ACLR>[, <PowerMonitor>, <PowerDynamics>]
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. This command combines most other 
CONFigure:NIOT:MEAS<i>:MEValuation:RESult...
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
*RST:
ON
<PhaseError>
OFF |
 
 ON
*RST:
ON
<InbandEmissions>
OFF |
 
 ON
*RST:
ON
<IQ>
OFF |
 
 ON
I/Q constellation diagram
*RST:
ON
<TXMeasurement>
OFF |
 
 ON
TX measurement statistical overview
*RST:
ON
<SpecEmMask>
OFF |
 
 ON
Spectrum emission mask
*RST:
ON
<ACLR>
OFF |
 
 ON
Adjacent channel leakage power ratio
*RST:
ON
<PowerMonitor>
OFF |
 
 ON
*RST:
ON
<PowerDynamics>
OFF |
 
 ON
*RST:
ON
Example: 
See 
"Performing Single-Shot Measurements"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Multi Evaluation, NPRACH > Assign Views"
Top