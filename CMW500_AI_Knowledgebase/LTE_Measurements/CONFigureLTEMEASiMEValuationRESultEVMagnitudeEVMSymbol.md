# CONFigureLTEMEASiMEValuationRESultEVMagnitudeEVMSymbol

Module: LTE Measurements
Source: 40e18e85178945d6.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Enabling Results and Views
 > 
CONFigure:LTE:MEAS<i>:MEValuation:RESult:EVMagnitude:EVMSymbol
CONFigure:LTE:MEAS<i>:MEValuation:RESult:EVMagnitude:EVMSymbol 
<Enable>, <Symbol>, <LowHigh>
Enables or disables the measurement of EVM vs. modulation symbol results and configures the scope of the measurement.
Parameters:
<Enable>
OFF |
 
 ON
OFF:
 Do not measure the results and hide the result diagram
ON:
 Measure the results and show the diagram
*RST:
OFF
<Symbol>
SC-FDMA symbol to be evaluated
Range: 
0  to  6
*RST:
0
<LowHigh>
LOW |
 
 HIGH
Low or high EVM window position
*RST:
LOW
Example: 
See 
"Performing Single-Shot Measurements"
Firmware/Software: 
V3.5.40
Manual operation: 
See 
"Multi Evaluation > EVM vs. Symbol"
Top