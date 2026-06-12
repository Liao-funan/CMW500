# Using WCDMA List Mode

Module: WCDMA Measurements
Source: 2693eec26eec4bba.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Programming
 > 
Using WCDMA List Mode
Using WCDMA List Mode
The WCDMA multi-evaluation list mode is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...WCDMa:MEAS:MEValuation:LIST...
Use general commands of the type 
...:WCDMa:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off and list mode is disabled. Use 
CONFigure:WCDMa:MEAS:MEValuation:LIST ON
 to enable the list mode and 
INIT:WCDMa:MEAS:MEValuation
 to initiate a single-shot measurement.
Use 
FETCh:WCDMa:MEAS:MEValuation:LIST:...?
 commands to retrieve the results.
Speed considerations
The following measurement settings have an impact on the measurement speed:
The number and size of the segments and the number of measured slots in each segment
The number and type of results that the R&S
 
CMW needs to calculate
Contents
Specifying Global Measurement Settings
Specifying List Mode Settings
Performing Single-Shot Measurements
Retrieving Single Results for All Segments
Top