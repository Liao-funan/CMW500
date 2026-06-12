# Using Bluetooth List Mode

Module: Bluetooth Measurements
Source: 822824524e354fd0.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Using Bluetooth List Mode
Using Bluetooth List Mode
The Bluetooth multi-evaluation list mode is programmed as follows:
The measurement is controlled by SCPI commands with the following syntax: 
...BLUetooth:MEAS:MEValuation:LIST...
Use general commands of the type 
...:BLUetooth:MEAS...
 (no 
:MEValuation
 mnemonic) to define the signal routing and perform RF and analyzer settings.
After a 
*RST
, the measurement is switched off and list mode is disabled. Use 
CONFigure:BLUetooth:MEAS:MEValuation:LIST ON
 to enable the list mode and 
INIT:BLUetooth:MEAS:MEValuation
 to initiate a single-shot measurement.
Use 
FETCh:BLUetooth:MEAS:MEValuation:LIST:...?
 commands to retrieve the results.
Speeding up list mode measurements
List mode tests are often used in production lines. The same tests are repeated for different EUTs. Optimizing the test duration is important.
Consider the following rules to minimize the test duration:
Reduce the number and size of the segments and the statistical length as far as possible for your use case.
Enable only the results that you need / disable the other result calculations.
Minimize the number of 
FETCh
 commands transmitted for result query.
To reset the system repeatedly, use partial reset commands instead of the global reset command 
*RST
.
Example: Use 
SYSTem:RESet 'Bluetooth Meas1'
 to reset the Bluetooth measurement instance 1.
To configure the same list mode settings repeatedly, use partial save/recall commands:
–
Configure all list mode settings once.
–
Save the list mode settings to a file, for example to the file 
ListModeBluetooth1.dfl
 located in the directory assigned to the 
@SAVE
 alias:
MMEMory:STORe:ITEM 'Bluetooth Meas:MEV:LIST', '@SAVE\ListModeBluetooth1.dfl'
–
If you want to configure the same settings again, recall the stored settings:
MMEMory:LOAD:ITEM 'Bluetooth Meas:MEV:LIST', '@SAVE\ListModeBluetooth1.dfl'
Contents
Specifying Global Measurement Settings
Specifying List Mode Settings
Performing Single-Shot Measurements
Top