# Using WLAN List Mode

Module: WLAN Measurements
Source: ae3befeef9f1460e.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
Using WLAN List Mode
Using WLAN List Mode
The WLAN multi-evaluation list mode is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...WLAN:MEAS:MEValuation:LIST...
Use general commands of the type 
...:WLAN:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off and list mode is disabled. Use 
CONFigure:WLAN:MEAS:MEValuation:LIST ON
 to enable the list mode and 
INIT:WLAN:MEAS:MEValuation
 to initiate a single-shot measurement.
Use 
FETCh:WLAN:MEAS:MEValuation:LIST:...?
 commands to retrieve the results.
Speed considerations
The following measurement settings have an impact on the measurement speed:
The number and size of the segments and the number of measured bursts in each segment
The number and type of results that the R&S
 
CMW needs to calculate
Contents
Specifying General Measurement Settings
Specifying Measurement-Specific Settings
Performing Single-Shot Measurements
Top