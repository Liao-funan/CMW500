# Using the List Mode

Module: NBIoT Measurements
Source: 312db3f45d774e10.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Programming
 > 
Using the List Mode
Using the List Mode
The NB-IoT multi-evaluation list mode is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...NIOT:MEAS:MEValuation:LIST...
Use general commands of the type 
...:NIOT:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off and the list mode is disabled. Use 
CONFigure:NIOT:MEAS:MEValuation:LIST ON
 to enable the list mode and 
INIT:NIOT:MEAS:MEValuation
 to initiate a single-shot measurement.
Use 
FETCh:NIOT:MEAS:MEValuation:LIST:...?
 commands to retrieve the results.
Speeding up list mode measurements
List mode tests are often used in production lines. The same tests are repeated for different UEs. Optimizing the test duration is important.
Consider the following rules to minimize the test duration:
Reduce the number and size of the segments and the statistical length as far as possible for your use case.
Enable only the results that you need / disable the other result calculations.
To reset the system repeatedly, use partial reset commands instead of the global reset command 
*RST
.
Example: Use 
SYSTem:RESet 'NB-IoT Meas1'
 to reset the NB-IoT measurement instance 1.
Contents
Specifying Global Measurement Settings
Specifying List Mode Settings
Performing Single-Shot Measurements
Top