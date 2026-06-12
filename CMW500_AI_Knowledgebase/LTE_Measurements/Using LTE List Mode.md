# Using LTE List Mode

Module: LTE Measurements
Source: 14f43375d4d54efa.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Programming
 > 
Using LTE List Mode
Using LTE List Mode
The LTE multi-evaluation list mode is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...LTE:MEAS:MEValuation:LIST...
Use general commands of the type 
...:LTE:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off and list mode is disabled. Use 
CONFigure:LTE:MEAS:MEValuation:LIST ON
 to enable the list mode and 
INIT:LTE:MEAS:MEValuation
 to initiate a single-shot measurement.
Use 
FETCh:LTE:MEAS:MEValuation:LIST:...?
 commands to retrieve the results.
Speeding up list mode measurements
List mode tests are often used in production lines. The same tests are repeated for different UEs. Optimizing the test duration is important.
Consider the following rules to minimize the test duration:
Reduce the number and size of the segments and the statistical length as far as possible for your use case.
Enable only the results that you need / disable the other result calculations.
There are two groups of 
FETCh
 commands. One for result retrieval per segment and one for result retrieval over all segments. Which of the two groups is more effective, depends on the enabled results and on the number of segments.
Minimize the number of 
FETCh
 commands transmitted for result query.
To reset the system repeatedly, use partial reset commands instead of the global reset command 
*RST
.
Example: Use 
SYSTem:RESet 'LTE Meas1'
 to reset the LTE measurement instance 1.
To configure the same list mode settings repeatedly, use partial save/recall commands:
–
Configure all list mode settings once.
–
Save the list mode settings to a file, for example to the file 
ListModeLTE1.dfl
 located in the directory assigned to the 
@SAVE
 alias:
MMEMory:STORe:ITEM 'LTE Meas:MEV:LIST', '@SAVE\ListModeLTE1.dfl'
–
If you want to configure the same settings again, recall the stored settings:
MMEMory:LOAD:ITEM 'LTE Meas:MEV:LIST', '@SAVE\ListModeLTE1.dfl'
Contents
Specifying Global Measurement Settings
Specifying List Mode Settings
Performing Single-Shot Measurements
Retrieving Single Results for All Segments
Top