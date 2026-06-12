# Key Features

Module: LTE Measurements
Source: b91e4fb257664184.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Programming
 > 
Key Features
Key Features
The LTE PRACH measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...LTE:MEAS:PRACh...
Use general commands of the type 
...:LTE:MEAS...
 (no 
:PRACh
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off. Use 
READ:LTE:MEAS:PRACh...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:LTE:MEAS:PRACh
 and retrieve the results using 
FETCh:LTE:MEAS:PRACh...?
.
For synchronization and proper decoding, some UE signal settings must be in accordance with the measured signal; see 
"Specifying Required PRACH Settings"
.
Top