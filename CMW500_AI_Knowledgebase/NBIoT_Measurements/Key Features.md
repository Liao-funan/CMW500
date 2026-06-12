# Key Features

Module: NBIoT Measurements
Source: 6f1bbe0af277472e.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Programming
 > 
Key Features
Key Features
The NB-IoT NPRACH measurement is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...NIOT:MEAS:PRACh...
Use general commands of the type 
...:NIOT:MEAS...
 (no 
:PRACh
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off. Use 
READ:NIOT:MEAS:PRACh...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:NIOT:MEAS:PRACh
 and retrieve the results using 
FETCh:NIOT:MEAS:PRACh...?
.
For synchronization and proper decoding, some UE signal settings must be in accordance with the measured signal; see 
"Specifying Required NPRACH Settings"
.
Top