# Key Features

Module: LRWPAN Measurements
Source: d0be3b686f1e4803.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Programming
 > 
Key Features
Key Features
The "LR-WPAN Multi-Evaluation Measurement" is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...WPAN:MEAS:MEValuation...
Use general commands of the type 
...:WPAN:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and configure RF and analyzer settings.
Use general commands of the type 
...:WPAN:MEAS:ISIGnal...
 (no 
:MEValuation
 mnemonic) to inform the R&S
 
CMW about the basic properties of the measured LR-WPAN signal.
After a 
*RST
, the measurement is switched off. Use 
READ:WPAN:MEAS:MEValuation...?
 to initiate a single-shot measurement and retrieve the results. You can also start the measurement using 
INIT:WPAN:MEAS:MEValuation
 and retrieve the results using 
FETCh:WPAN:MEAS:MEValuation...?
.
After a 
*RST
, the measurement is performed in auto-detection mode.
Top