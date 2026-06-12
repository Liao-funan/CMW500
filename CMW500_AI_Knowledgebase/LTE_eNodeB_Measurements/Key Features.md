# Key Features

Module: LTE eNodeB Measurements
Source: 79c2791baaf14d0c.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Programming
 > 
Key Features
Key Features
The LTE eNodeB multi-evaluation measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...LTE:MEAS:ENB:MEValuation...
Use general commands of the type 
...:LTE:MEAS:ENB...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off. Use 
READ:LTE:MEAS:ENB:MEValuation...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:LTE:MEAS:ENB:MEValuation
 and retrieve the results using 
FETCh:LTE:MEAS:ENB:MEValuation...?
.
For synchronization and proper decoding, some eNodeB signal settings must be in accordance with the measured signal; see 
"Specifying Required Settings"
.
Top