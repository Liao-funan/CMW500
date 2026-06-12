# Key Features

Module: WCDMA Measurements
Source: b6fdf3c1e0db4b70.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Programming
 > 
Key Features
Key Features
The WCDMA PRACH measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...WCDMa:MEAS:PRACh...
Use general commands of the type 
...WCDMa:MEAS...
 (no 
:PRACh
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off. Use 
READ:WCDMa:MEAS:PRACh...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WCDMa:MEAS:PRACh
 and retrieve the results using 
FETCh:WCDMa:MEAS:PRACh...?
.
For synchronization and proper decoding, some UE signal settings must be in accordance with the measured signal; see 
"Configuring Required Signal Settings"
.
Top