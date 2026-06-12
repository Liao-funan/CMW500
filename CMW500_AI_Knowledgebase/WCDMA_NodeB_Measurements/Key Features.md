# Key Features

Module: WCDMA NodeB Measurements
Source: a99c9213776e4fce.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Programming
 > 
Key Features
Key Features
The WCDMA NodeB TX measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...:WCDMa:MEAS:NB:MEValuation...
Use general commands of the type 
...:WCDMa:MEAS:NB...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:MEAS:NB:MEValuation...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:MEAS:NB:MEValuation
 and retrieve the results using 
FETCh:WCDMa:MEAS:NB:MEValuation...?
.
For synchronization and proper decoding, some NodeB signal settings must be in accordance with the measured signal; see 
"Specifying Required Settings"
.
Top