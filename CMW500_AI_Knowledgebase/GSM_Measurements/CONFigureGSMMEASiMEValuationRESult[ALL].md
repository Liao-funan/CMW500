# CONFigureGSMMEASiMEValuationRESult[ALL]

Module: GSM Measurements
Source: a049891e6e84495e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:GSM:MEAS<i>:MEValuation:RESult[:ALL]
CONFigure:GSM:MEAS<i>:MEValuation:RESult[:ALL] 
<PvT>, <EVM>, <MagnitudeError>, <PhaseError>, <IQ>, <ACPModFrequency>, <ACPModTime>, <ACPSwitFreq>, <ACPSwitTime>, <ModScalar>, <BER>, <AMPM>
Enables or disables the evaluation of results and shows or hides the views in the multi-evaluation measurement. This command combines all other 
CONFigure:GSM:MEAS<i>:MEValuation:RESult...
 commands.
Parameters:
<PvT>
OFF |
 
 ON
Power vs. time
ON:
 Evaluate results and show the view
OFF:
 Do not evaluate results, hide the view (if applicable)
*RST:
ON
<EVM>
OFF |
 
 ON
Error vector magnitude
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
ON
<IQ>
OFF |
 
 ON
I/Q constellation
*RST:
OFF
<ACPModFrequency>
OFF |
 
 ON
ACP spectrum modulation frequency
*RST:
ON
<ACPModTime>
OFF |
 
 ON
ACP spectrum modulation time
*RST:
OFF
<ACPSwitFreq>
OFF |
 
 ON
ACP spectrum switching frequency
*RST:
ON
<ACPSwitTime>
OFF |
 
 ON
ACP spectrum switching time
*RST:
OFF
<ModScalar>
OFF |
 
 ON
Scalar modulation results
*RST:
ON
<BER>
OFF |
 
 ON
Bit error rate
*RST:
OFF
<AMPM>
OFF |
 
 ON
AM-PM
*RST:
OFF
Example: 
See 
"Configuring a Spectrum Measurement"
Firmware/Software: 
V1.0.10.1 
Manual operation: 
See 
"Assign Views"
Top